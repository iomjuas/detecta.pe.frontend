import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

export interface TechCard {
  media: { src: string; alt?: string };
  title?: string;
  /** Ahora acepta string (texto) o string[] (lista) */
  description?: string | string[];
  cta?: {
    label: string;
    routerLink?: any[] | string;
    href?: string;
    target?: '_blank' | '_self';
  };
}

export interface TechShowcaseConfig {
  eyebrow?: string;                 // “NUESTRA TECNOLOGÍA”
  title?: string;                   // acepta HTML (para <span> etc.)
  subtitle?: string;                // opcional

  items?: TechCard[];               // cards
  columns?: 2 | 3 | 4;              // desktop (default 3)

  // estilos de sección
  background?: string;              // color/gradiente fondo sección
  containerWidth?: string;          // ancho del container
  accent?: string;                  // lima para chips/bordes
}

const DEF: Required<TechShowcaseConfig> = {
  eyebrow: '',
  title: 'Tecnología avanzada y protocolos de seguridad para tu cirugía <strong>Integramos:</strong>',
  subtitle: '',
  items: [],
  columns: 3,
  background: 'linear-gradient(180deg, #f1fcff 0%, #eff9af 45%, #f1fcff 100%)',
  containerWidth: 'min(1180px, 92vw)',
  accent: '#d7df3f'
};

@Component({
  selector: 'app-tech-showcase',
  templateUrl: './tech-showcase.component.html',
  styleUrls: ['./tech-showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TechShowcaseComponent implements OnChanges {
  @Input() config?: TechShowcaseConfig;

  c: Required<TechShowcaseConfig> = structuredClone(DEF);

  ngOnChanges(_: SimpleChanges) {
    const inc = this.config ?? {};
    this.c = { ...DEF, ...inc, items: inc.items ?? [] };
  }

  get showHead() { return !!(this.c.eyebrow || this.c.title || this.c.subtitle); }
  get showItems() { return Array.isArray(this.c.items) && this.c.items.length > 0; }

  gridClass() {
    return {
      'cols-2': this.c.columns === 2,
      'cols-3': this.c.columns === 3,
      'cols-4': this.c.columns === 4
    };
  }

  isString(v: unknown): v is string {
    return typeof v === 'string';
  }
  isArray(v: unknown): v is string[] {
    return Array.isArray(v);
  }
}
