import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() countTo = 0;
  @Input() durationMs = 1200;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() decimals = 0;

  private obs?: IntersectionObserver;
  private started = false;

  constructor(private el: ElementRef<HTMLElement>, private rd: Renderer2) { }

  ngOnInit(): void {
    this.obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !this.started) {
          this.started = true;
          this.animate();
          this.obs?.disconnect();
        }
      });
    }, { threshold: 0.2 });
    this.obs.observe(this.el.nativeElement);
  }

  private animate() {
    const start = performance.now();
    const from = 0;
    const to = this.countTo;
    const dur = Math.max(200, this.durationMs);
    const ease = (t: number) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // cubic

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const val = from + (to - from) * ease(p);
      const text = this.format(val);
      this.rd.setProperty(this.el.nativeElement, 'textContent', text);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  private format(v: number) {
    const num = v.toLocaleString(undefined, {
      minimumFractionDigits: this.decimals,
      maximumFractionDigits: this.decimals
    });
    return `${this.prefix || ''}${num}${this.suffix || ''}`;
  }

  ngOnDestroy(): void {
    this.obs?.disconnect();
  }
}
