import {
  Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges
} from '@angular/core';

export interface FaqItem { q: string; a: string; open?: boolean; }
export interface FaqConfig {
  background?: string; containerWidth?: string; accent?: string; titleColor?: string;
  eyebrow?: string; title?: string; subtitle?: string; singleOpen?: boolean; items?: FaqItem[];
}

const DEF: Required<FaqConfig> = {
  background: '#eef9ff',
  containerWidth: 'min(1180px, 92vw)',
  accent: '#d7df3f',
  titleColor: '#2e9cc0',
  eyebrow: '',
  title: 'Resolvemos tus dudas <span>más comunes</span>.',
  subtitle: '',
  singleOpen: true,
  items: []
};

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class FaqAccordionComponent implements OnChanges {
  @Input() config?: FaqConfig;

  /** Estado interno MERGEADO y PERSISTENTE */
  _c: Required<FaqConfig> = structuredClone(DEF);

  ngOnChanges(_: SimpleChanges) {
    this._c = this.mergeConfig(DEF, this.config ?? {});
  }

  /** merge “suave” que conserva .open y otros flags */
  private mergeConfig(base: Required<FaqConfig>, incoming: FaqConfig): Required<FaqConfig> {
    const out: Required<FaqConfig> = { ...base, ...incoming };
    const inItems = incoming.items ?? base.items;
    out.items = inItems.map((it, idx) => {
      const prev = this._c.items?.[idx];
      // si no se pasa 'open', conserva el anterior
      return { ...it, open: it.open ?? prev?.open ?? false };
    });
    return out;
  }

  get c(): Required<FaqConfig> { return this._c; }
  get hasHeader() { return !!(this.c.eyebrow || this.c.title || this.c.subtitle); }
  get hasItems() { return Array.isArray(this.c.items) && this.c.items.length > 0; }

  toggle(i: number) {
    const open = !this.c.items[i].open;
    if (this.c.singleOpen) {
      this.c.items = this.c.items.map((it, idx) => ({ ...it, open: idx === i ? open : false }));
    } else {
      this.c.items[i] = { ...this.c.items[i], open };
    }
  }

  idFor(i: number, part: 'btn' | 'panel') { return `faq_${i}_${part}`; }
}
