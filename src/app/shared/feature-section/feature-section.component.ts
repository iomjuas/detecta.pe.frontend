// feature-section.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface FSAccordionItem {
  title: string;
  html?: string;         // contenido libre como HTML
  bullets?: string[];    // o lista con viñetas (puedes usar <em>/<strong> con innerHTML)
  open?: boolean;        // empieza abierto
}
export interface FSAccordionConfig {
  items?: FSAccordionItem[];  // si no hay, no se muestra
  singleOpen?: boolean;       // estilo “sólo uno abierto”
  accent?: string;            // color de acento (línea/borde botón)
}
export interface FeatureGroup {
  title?: string;         // "Diagnóstico"
  items: string[];        // bullets de ese grupo
}

export interface FeatureSectionConfig {
  media?: {
    src?: string;
    alt?: string;
    side?: 'left' | 'right';     // default: 'left'
    rounded?: number;            // default: 22px
    width?: string;              // e.g. '520px' | '40rem' | 'min(520px, 42vw)'
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  };

  eyebrow?: string;
  title?: string;       // acepta HTML
  copy?: string;        // acepta HTML
  copy2?: string;       // acepta HTML
  bullets?: string[];   // lista simple (ya existente)

  /** NUEVO: grupos de lista tipo "Diagnóstico", "Tratamientos...", etc. */
  groups?: FeatureGroup[]; // <—— opcional
  listCols?: 1 | 2;        // columnas para los grupos (desktop). default: 1

  cta?: {
    label: string;
    routerLink?: any[] | string;
    href?: string;
    target?: '_blank' | '_self';
  };

  background?: string;
  accordion?: FSAccordionConfig;
}

const DEF: Required<FeatureSectionConfig> = {
  media: { src: '', alt: '', side: 'left', rounded: 22, width: '', objectFit: 'cover' },
  eyebrow: '',
  title: '',
  copy: '',
  copy2: '',
  bullets: [],
  /** NUEVO */
  groups: [],
  listCols: 1,
  cta: { label: '', routerLink: undefined as any, href: undefined as any, target: '_self' },
  background: '#f1fcff',
  accordion: {
    items: [],
    singleOpen: false,
    accent: '#d7df3f'
  }
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

    base.background = incoming.background ?? base.background;
    base.media = { ...base.media, ...(incoming.media ?? {}) };
    base.eyebrow = incoming.eyebrow ?? base.eyebrow;
    base.title = incoming.title ?? base.title;
    base.copy = incoming.copy ?? base.copy;
    base.copy2 = incoming.copy2 ?? base.copy2;
    base.bullets = Array.isArray(incoming.bullets) ? incoming.bullets : base.bullets;

    /** NUEVO: merge de groups / listCols */
    base.groups = Array.isArray(incoming.groups) ? incoming.groups : base.groups;
    base.listCols = incoming.listCols ?? base.listCols;

    base.cta = { ...base.cta, ...(incoming.cta ?? {}) };

    const accIn = incoming.accordion ?? {};
    base.accordion = {
      items: Array.isArray(accIn.items) ? accIn.items : base.accordion.items,
      singleOpen: accIn.singleOpen ?? base.accordion.singleOpen,
      accent: accIn.accent ?? base.accordion.accent
    };
    return base;
  }

  get showMedia() { return !!this.c.media.src; }
  get showEyebrow() { return !!this.c.eyebrow?.trim(); }
  get showTitle() { return !!this.c.title?.trim(); }
  get showCopy() { return !!this.c.copy?.trim(); }
  get showCopy2() { return !!this.c.copy2?.trim(); }
  get showBullets() { return Array.isArray(this.c.bullets) && this.c.bullets.length > 0; }
  /** NUEVO */
  get showGroups() { return Array.isArray(this.c.groups) && this.c.groups.length > 0; }
  get showCta() { return !!this.c.cta?.label && (!!this.c.cta.routerLink || !!this.c.cta.href); }
  get hasAccordion() {
    return Array.isArray(this.c.accordion.items) && this.c.accordion.items.length > 0;
  }
  accId(i: number) { return `fs-acc-${i}`; }
  toggleAcc(i: number) {
    const items:any = this.c.accordion.items;
    const single = !!this.c.accordion.singleOpen;
    const next = !items[i].open;

    if (single) {
      items.forEach((it:any, idx:any) => it.open = (idx === i) ? next : false);
    } else {
      items[i].open = next;
    }
  }
}
