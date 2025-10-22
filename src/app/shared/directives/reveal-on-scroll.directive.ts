import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input('appRevealOnScroll') effect: 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' = 'fade-up';
  @Input() aosDelay = 0;         // ms
  @Input() aosDuration = 700;    // ms
  @Input() aosOnce = true;       // true = solo una vez
  @Input() aosThreshold = 0.15;  // visibilidad para disparar (0..1)
  @Input() aosDistance = 24;     // px para *-up/-down/-left/-right

  private observer?: IntersectionObserver;
  private revealed = false;

  private el = inject(ElementRef<HTMLElement>);
  private rd = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // Variables y clases base
    const native = this.el.nativeElement;
    this.rd.addClass(native, 'aos');        // base
    this.rd.addClass(native, 'aos-init');   // oculto
    // IMPORTANTE: aplicar el efecto DESDE EL INICIO (posición de partida)
    this.rd.addClass(native, `aos-${this.effect}`);

    this.rd.setStyle(native, '--aos-delay', `${this.aosDelay}ms`);
    this.rd.setStyle(native, '--aos-duration', `${this.aosDuration}ms`);
    this.rd.setStyle(native, '--aos-distance', `${this.aosDistance}px`);
    this.rd.setStyle(native, '--aos-ease', 'cubic-bezier(.22,.61,.36,1)');

    const prefersReduced = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    // SSR o reduce-motion: no animar, mostrar directo
    if (!isPlatformBrowser(this.platformId) || prefersReduced) {
      this.rd.addClass(native, 'aos-done');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            this.reveal();
            if (this.aosOnce) this.disconnect();
          } else if (!this.aosOnce && this.revealed) {
            this.hide();
          }
        });
      },
      { threshold: this.aosThreshold }
    );
    this.observer.observe(native);
  }

  private reveal() {
    this.revealed = true;
    const n = this.el.nativeElement;
    this.rd.removeClass(n, 'aos-init');   // deja de estar oculto
    this.rd.addClass(n, 'aos-animate');   // dispara transición a estado final
  }

  private hide() {
    this.revealed = false;
    const n = this.el.nativeElement;
    this.rd.addClass(n, 'aos-init');
    this.rd.removeClass(n, 'aos-animate');
  }

  private disconnect() {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
