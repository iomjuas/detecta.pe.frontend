import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export type HeroMediaType = 'image' | 'video';
export type HeroAlign = 'left' | 'right';
export type HeroSkin = 'none' | 'ribbons';

export interface HeroCta {
  label: string;
  routerLink?: string | any[];
  href?: string;
  target?: '_self' | '_blank';
  ariaLabel?: string;
}

export interface HeroMedia {
  type: HeroMediaType;
  src: string;
  alt?: string;       // imagen
  poster?: string;    // video
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  overlay?: boolean;  // oscurece para legibilidad
}

export interface ModernHeroConfig {
  eyebrow?: string;
  title?: string;     // HTML permitido
  copy?: string;      // HTML permitido

  ctaPrimary?: HeroCta;
  ctaSecondary?: HeroCta;

  media?: HeroMedia;
  align?: HeroAlign;             // 'right' por defecto (media a la derecha)
  background?: string;           // gradiente/color de sección
  containerWidth?: string;       // min(1180px, 92vw) por defecto
  rounded?: string;              // radio de la media (p.ej. "26px")

  /** NUEVO **/
  fullBleed?: boolean;           // quita padding top para pegar al header
  skin?: HeroSkin;               // 'none' | 'ribbons'
  patternOpacity?: number;       // opacidad del patrón ribbons (0–1)
}

const DEF: Required<ModernHeroConfig> = {
  eyebrow: '',
  title: 'Título hero moderno y flexible',
  copy: '',
  ctaPrimary: { label: '' },
  ctaSecondary: { label: '' },

  media: {
    type: 'image',
    src: '',
    alt: '',
    poster: '',
    autoplay: true,
    loop: true,
    muted: true,
    playsInline: true,
    overlay: true,
  },

  align: 'right',
  background: 'transparent',
  containerWidth: 'min(1180px, 92vw)',
  rounded: '26px',

  /** NUEVOS DEFAULTS **/
  fullBleed: false,
  skin: 'none',
  patternOpacity: 0.8,
};

@Component({
  selector: 'app-modern-hero',
  templateUrl: './modern-hero.component.html',
  styleUrls: ['./modern-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ModernHeroComponent {
  @Input() config?: ModernHeroConfig;

  get c(): Required<ModernHeroConfig> {
    const inc = this.config ?? {};
    const media = { ...DEF.media, ...(inc.media ?? {}) };
    return { ...DEF, ...inc, media };
  }

  get showEyebrow() { return !!this.c.eyebrow; }
  get showTitle() { return !!this.c.title; }
  get showCopy() { return !!this.c.copy; }

  get showPrimary() {
    const a = this.c.ctaPrimary;
    return !!a?.label && (a.href || a.routerLink);
  }
  get showSecondary() {
    const a = this.c.ctaSecondary;
    return !!a?.label && (a.href || a.routerLink);
  }

  get isImage() { return this.c.media.type === 'image'; }
  get isVideo() { return this.c.media.type === 'video'; }
}
