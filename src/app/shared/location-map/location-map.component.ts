import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

export interface LocationMapCTA {
  label: string;
  routerLink?: string | any[];   // usa routerLink o href (uno de los dos)
  href?: string;
  target?: '_blank' | '_self';
}

export interface LocationMapConfig {
  eyebrow?: string;                 // “UBICACIÓN Y CONTACTO”
  title?: string;                   // acepta HTML (p.ej. spans)
  subtitle?: string;                // opcional

  /** URL de Google Maps embed (o cualquier iframe embed) */
  mapSrc?: string;

  /** CTA global opcional */
  cta?: LocationMapCTA;

  /** Estilos de la sección */
  background?: string;              // color/gradiente
  containerWidth?: string;          // 'min(1180px,92vw)'
  radius?: string;                  // '22px'
  mapRadius?: string;               // '18px'
  mapAspect?: string;               // '16 / 6' (aspect-ratio)
  minMapHeight?: string;            // '360px'
}

const DEF: Required<LocationMapConfig> = {
  eyebrow: '',
  title: 'Cirugías programadas y emergencias, disponibles 24/7.',
  subtitle: '',
  mapSrc: '',
  cta: { label: '', routerLink: undefined as any, href: undefined as any, target: '_self' },
  background: 'linear-gradient(180deg,#eaf7fb 0%, #f7fdff 100%)',
  containerWidth: 'min(1180px, 92vw)',
  radius: '0',
  mapRadius: '18px',
  mapAspect: '16 / 6',
  minMapHeight: '320px'
};

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class LocationMapComponent implements OnChanges {
  @Input() config?: LocationMapConfig;

  c: Required<LocationMapConfig> = structuredClone(DEF);

  ngOnChanges(_: SimpleChanges) {
    const inc = this.config ?? {};
    this.c = {
      ...DEF,
      ...inc,
      cta: { ...DEF.cta, ...(inc.cta || {}) }
    };
  }

  get showHead() { return !!(this.c.eyebrow || this.c.title || this.c.subtitle); }
  get showMap() { return !!this.c.mapSrc?.trim(); }
  get showCTA() { return !!(this.c.cta.label && (this.c.cta.routerLink || this.c.cta.href)); }
}
