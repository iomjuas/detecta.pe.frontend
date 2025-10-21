import { Component, Input } from '@angular/core';

export interface SharedHeroData {
  top: {
    /** Texto que va en el <span> de la 1ª línea del H1 */
    lead: string;
    /** Líneas bajo el span; se renderizan con <br> entre ellas */
    lines: string[];
  };
  media: {
    src: string;
    alt?: string;
  };
  info: {
    /** Chip/eyebrow opcional (p.ej. QUIMIOTERAPIA) */
    chip?: string;
    /** H2 “Tratamiento oncológico seguro y personalizado” */
    h2?: {
      pre?: string;     // “Tratamiento oncológico”
      hl1?: string;     // “seguro”
      connector?: string; // “ y ”
      hl2?: string;     // “personalizado”
    };
    /** Párrafo de soporte (permite <strong>, <br>, etc.) */
    copy?: string;
  };
}

const DEFAULT_DATA: SharedHeroData = {
  top: {
    lead: 'Quimioterapia',
    lines: [
      'ambulatoria segura en un entorno profesional',
      'y cercano a ti'
    ]
  },
  media: {
    src: 'assets/img/quimio/hero.jpg',
    alt: 'Paciente recibiendo quimioterapia en ambiente ambulatorio seguro'
  },
  info: {
    chip: 'QUIMIOTERAPIA',
    h2: {
      pre: 'Tratamiento oncológico ',
      hl1: 'seguro',
      connector: ' y ',
      hl2: 'personalizado'
    },
    copy:
      'Diseñamos <strong>esquemas de quimioterapia</strong> ajustados a tu diagnóstico, historia clínica y objetivos terapéuticos. ' +
      'Resolvemos tus dudas antes de iniciar y acordamos un <strong>plan de manejo individual</strong>, con seguimiento de tu respuesta ' +
      'y de posibles efectos secundarios para actuar a tiempo.'
  }
};

@Component({
  selector: 'app-shared-hero',
  standalone: false,
  templateUrl: './shared-hero.component.html',
  styleUrl: './shared-hero.component.scss'
})
export class SharedHeroComponent {

  @Input() data?: SharedHeroData;

  get d(): SharedHeroData {
    // merge simple de defaults con lo recibido
    const base: SharedHeroData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    const incoming = this.data ?? {} as SharedHeroData;

    base.top = { ...base.top, ...(incoming.top || {}) };
    base.media = { ...base.media, ...(incoming.media || {}) };
    base.info = {
      ...base.info,
      ...(incoming.info || {}),
      h2: { ...base.info.h2, ...(incoming.info?.h2 || {}) }
    };

    return base;
  }
}
