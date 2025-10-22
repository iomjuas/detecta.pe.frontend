import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  AfterViewInit,
  HostListener,
  ElementRef,
} from '@angular/core';

export interface SliderCta {
  label: string;
  href?: string;
  routerLink?: string | any[];
  target?: '_blank' | '_self';
}

export interface SliderItem {
  media: { src: string; alt?: string };
  title?: string;
  description?: string;
  cta?: SliderCta;
}

export interface MediaSliderConfig {
  eyebrow?: string;
  title?: string;

  items: SliderItem[];

  autoplay?: boolean;           // default true
  autoplayDelay?: number;       // ms (default 4500)
  pauseOnHover?: boolean;       // default true

  // override columnas por breakpoint (opcional)
  colsDesktop?: number;         // default 3
  colsTablet?: number;          // default 2
  colsMobile?: number;          // default 1

  // estilos rápidos (opcionales)
  background?: string;          // color/gradient para la sección
  containerWidth?: string;      // ej: 'min(1180px, 92vw)'
}

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class MediaSliderComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() config!: MediaSliderConfig;

  // estado
  pageIndex = 0;
  pages: SliderItem[][] = [];
  cols = 3;

  // autoplay
  private timer: any = null;
  private hovering = false;

  // defaults
  private DEF = {
    autoplay: true,
    autoplayDelay: 4500,
    pauseOnHover: true,
    colsDesktop: 3,
    colsTablet: 2,
    colsMobile: 1,
    background: 'linear-gradient(180deg, #eaf7fb 0%, #f6fdff 100%)',
    containerWidth: 'min(1180px, 92vw)',
  };

  constructor(private host: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.recompute();
    this.maybeStartAutoplay();
  }

  ngOnChanges(_: SimpleChanges): void {
    this.recompute();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  // ===== Layout =====
  @HostListener('window:resize')
  onResize() {
    this.recompute();
  }

  private recompute() {
    const cfg = { ...this.DEF, ...(this.config || {}) };

    this.cols = this.calcCols(cfg);
    this.pages = this.chunk(cfg.items || [], this.cols);
    if (this.pageIndex >= this.pages.length) this.pageIndex = 0;

    this.maybeStartAutoplay();
  }

  private calcCols(cfg: MediaSliderConfig & typeof this.DEF): number {
    const w = window.innerWidth;
    if (w <= 720) return cfg.colsMobile!;
    if (w <= 1024) return cfg.colsTablet!;
    return cfg.colsDesktop!;
    // puedes sofisticar con breakpoints si quieres
  }

  private chunk<T>(arr: T[], size: number): T[][] {
    if (!Array.isArray(arr) || size <= 0) return [];
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      out.push(arr.slice(i, i + size));
    }
    return out;
  }

  // ===== Navegación =====
  prev() {
    if (!this.pages.length) return;
    this.pageIndex = (this.pageIndex - 1 + this.pages.length) % this.pages.length;
    this.maybeRestartAutoplay();
  }

  next() {
    if (!this.pages.length) return;
    this.pageIndex = (this.pageIndex + 1) % this.pages.length;
    this.maybeRestartAutoplay();
  }

  goTo(i: number) {
    if (i < 0 || i >= this.pages.length) return;
    this.pageIndex = i;
    this.maybeRestartAutoplay();
  }

  get trackTransform(): string {
    return `translateX(-${this.pageIndex * 100}%)`;
  }

  // ===== Autoplay =====
  private maybeStartAutoplay() {
    const cfg = { ...this.DEF, ...(this.config || {}) };
    this.stopAutoplay();

    if (!cfg.autoplay || !this.pages.length) return;

    this.timer = setInterval(() => {
      if (cfg.pauseOnHover && this.hovering) return;
      this.next();
    }, cfg.autoplayDelay);
  }

  private maybeRestartAutoplay() {
    const cfg = { ...this.DEF, ...(this.config || {}) };
    if (!cfg.autoplay) return;
    this.maybeStartAutoplay();
  }

  private stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onMouseEnter() {
    this.hovering = true;
  }
  onMouseLeave() {
    this.hovering = false;
  }

  // helpers para template
  get bg(): string {
    return (this.config?.background) ?? this.DEF.background;
  }
  get containerWidth(): string {
    return (this.config?.containerWidth) ?? this.DEF.containerWidth;
  }
  get showHead(): boolean {
    return !!(this.config?.eyebrow || this.config?.title);
  }
}
