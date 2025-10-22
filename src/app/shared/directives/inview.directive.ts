import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit, OnDestroy {
  /** Si true, solo anima una vez (por defecto) */
  @Input() once = true;
  /** Umbral de visibilidad (0..1). Ej: 0.15 */
  @Input() threshold = 0.15;
  /** rootMargin para anticipar */
  @Input() rootMargin = '0px 0px -10% 0px';

  /** Variables CSS opcionales (puedes setearlas desde template) */
  @Input() animDelay?: string;     // '120ms'
  @Input() animDuration?: string;  // '800ms'
  @Input() animDistance?: string;  // '20px'

  private io?: IntersectionObserver;
  private host = inject(ElementRef<HTMLElement>);
  private rd = inject(Renderer2);

  ngOnInit(): void {
    const el = this.host.nativeElement;

    // Si el dev no puso .anim, la añadimos para que el estado base exista
    if (!el.classList.contains('anim')) this.rd.addClass(el, 'anim');

    // Setea variables desde inputs (opcional)
    if (this.animDelay) this.rd.setStyle(el, '--anim-delay', this.animDelay);
    if (this.animDuration) this.rd.setStyle(el, '--anim-duration', this.animDuration);
    if (this.animDistance) this.rd.setStyle(el, '--anim-distance', this.animDistance);

    // Respeta reduced motion
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduce) {
      this.rd.addClass(el, 'is-visible');
      return;
    }

    this.io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.rd.addClass(el, 'is-visible');
          if (this.once) this.disconnect();
        } else if (!this.once) {
          this.rd.removeClass(el, 'is-visible');
        }
      });
    }, { threshold: this.threshold, rootMargin: this.rootMargin });

    this.io.observe(el);
  }

  private disconnect() { this.io?.disconnect(); this.io = undefined; }
  ngOnDestroy(): void { this.disconnect(); }
}
