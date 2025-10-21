import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface FeatureSectionConfig {
  /** Imagen + lado (left/right) */
  media?: {
    src?: string;
    alt?: string;
    side?: 'left' | 'right';     // default: 'left'
    rounded?: number;            // radius en px; default 22
  };

  /** Contenido textual */
  eyebrow?: string;               // "NUESTRO TRATAMIENTO"
  title?: string;                 // acepta HTML (ej. spans para énfasis)
  copy?: string;                  // acepta HTML
  copy2?: string;                  // acepta HTML
  bullets?: string[];             // si está vacío/no llega, no se muestra

  /** CTA opcional */
  cta?: {
    label: string;
    routerLink?: any[] | string;  // usa esto o href
    href?: string;                // externo
    target?: '_blank' | '_self';  // default: '_self'
  };

  /** Opcional: estilos de sección */
  background?: string;            // color o gradiente
}

const DEF: Required<FeatureSectionConfig> = {
  media: { src: '', alt: '', side: 'left', rounded: 22 },
  eyebrow: '',
  title: '',
  copy: '',
  copy2: '',
  bullets: [],
  cta: { label: '', routerLink: undefined as any, href: undefined as any, target: '_self' },
  background: '#f1fcff'
};

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class FeatureSectionComponent {
  @Input() config?: FeatureSectionConfig;

  get c(): Required<FeatureSectionConfig> {
    const base = structuredClone(DEF);
    const incoming = this.config ?? {};

    // merge shallow es suficiente aquí
    base.background = incoming.background ?? base.background;

    base.media = { ...base.media, ...(incoming.media ?? {}) };
    base.eyebrow = incoming.eyebrow ?? base.eyebrow;
    base.title = incoming.title ?? base.title;
    base.copy = incoming.copy ?? base.copy;
    base.copy2 = incoming.copy2 ?? base.copy2;
    base.bullets = Array.isArray(incoming.bullets) ? incoming.bullets : base.bullets;
    base.cta = { ...base.cta, ...(incoming.cta ?? {}) };

    return base;
  }

  get showMedia() { return !!this.c.media.src; }
  get showEyebrow() { return !!this.c.eyebrow?.trim(); }
  get showTitle() { return !!this.c.title?.trim(); }
  get showCopy() { return !!this.c.copy?.trim(); }
  get showCopy2() { return !!this.c.copy2?.trim(); }
  get showBullets() { return Array.isArray(this.c.bullets) && this.c.bullets.length > 0; }
  get showCta() { return !!this.c.cta?.label && (!!this.c.cta.routerLink || !!this.c.cta.href); }

  get sideClass() {
    return this.c.media.side === 'right' ? 'is-right' : 'is-left';
  }
}
