// testimonial-wall.component.ts
import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

export interface TestimonialItem {
  quote: string;           // Texto del testimonio
  author: string;          // "Ana L."
  meta?: string;           // "46 años, linfoma"
  tag?: string;            // "Oncología" (pill opcional por tarjeta)
}

export interface TestimonialCTA {
  label: string;
  routerLink?: any[] | string;
  href?: string;
  target?: '_self' | '_blank';
}

export interface TestimonialWallConfig {
  eyebrow?: string;                    // "TESTIMONIOS"
  title?: string;                      // Acepta HTML (<span> para destacar)
  subtitle?: string;                   // Opcional
  cta?: TestimonialCTA;                // Botón principal (opcional)
  items: TestimonialItem[];            // Testimonios
  // estilos
  bg?: string;                         // fondo (gradiente/color)
  accent?: string;                     // color acento (chips/bordes)
  glass?: boolean;                     // efecto glass
  columns?: 2 | 3 | 4;                 // columnas desktop (default 3)
  autoPlayMobile?: boolean;            // autoplay en móvil
  autoPlayMs?: number;                 // intervalo autoplay (ms)
}

// DESPUÉS
const DEF: Required<Omit<TestimonialWallConfig, 'cta' | 'items'>> = {
  eyebrow: 'TESTIMONIOS',
  title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
  subtitle: '',
  bg: 'linear-gradient(180deg,#f1fcff 10%, #daf07f 50%, #e6f7a3 100%)',
  accent: '#2e9cc0',
  glass: true,
  columns: 3,
  autoPlayMobile: true,
  autoPlayMs: 4200
};

@Component({
  selector: 'app-testimonial-wall',
  templateUrl: './testimonial-wall.component.html',
  styleUrls: ['./testimonial-wall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TestimonialWallComponent implements OnInit, OnDestroy {

  @Input() config!: TestimonialWallConfig;

  // autoplay móvil
  private timer?: any;
  activeIndex = 0;

  ngOnInit() {
    const inc = this.config ?? { items: [] };
    this._c = { ...DEF, ...inc, items: inc.items ?? [] };
  }
  private _c: TestimonialWallConfig = { ...DEF, items: [] };
  get c() { return this._c; }
  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  isMobile() {
    return typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.c.items.length;
  }
  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.c.items.length) % this.c.items.length;
  }
  get showCTA(): boolean {
    const ct = this.c?.cta;
    return !!ct?.label && (!!ct?.routerLink || !!ct?.href);
  }
}
