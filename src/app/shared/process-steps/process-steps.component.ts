import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface ProcessStep {
  /** Título del paso */
  title: string;
  /** Descripción (puede llevar <strong> etc.) */
  description: string;
  /** Opción A: emoji o carácter (ej. '🧑‍⚕️') */
  iconText?: string;
  /** Opción B: imagen */
  iconImg?: { src: string; alt?: string; };
}

export interface ProcessStepsConfig {
  /** Estilos del contenedor grande */
  background?: string;             // ej: '#58c0df' o 'linear-gradient(...)'
  radius?: string;                 // '28px'
  paddingY?: string;               // '40px'
  maxWidth?: string;               // 'min(1180px,92vw)'

  /** Encabezado */
  eyebrow?: string;                // opcional
  title?: string;                  // acepta HTML (para <span> resaltado)
  subtitle?: string;               // opcional

  /** Pasos */
  columns?: 2 | 3 | 4;             // desktop, default 3
  steps?: ProcessStep[];           // si vacío/ausente, no se renderiza
}

const DEF: Required<ProcessStepsConfig> = {
  background: '#58c0df',
  radius: '28px',
  paddingY: '28px',
  maxWidth: 'min(1180px, 92vw)',
  eyebrow: '',
  title: 'Proceso de quimioterapia: <span>paso a paso</span>',
  subtitle: 'Conoce cómo será tu tratamiento con claridad, seguridad y seguimiento.',
  columns: 3,
  steps: []
};

@Component({
  selector: 'app-process-steps',
  templateUrl: './process-steps.component.html',
  styleUrls: ['./process-steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ProcessStepsComponent {
  @Input() config?: ProcessStepsConfig;

  get c(): Required<ProcessStepsConfig> {
    const base = structuredClone(DEF);
    const inCfg = this.config ?? {};
    Object.assign(base, inCfg);
    if (inCfg.steps) base.steps = inCfg.steps;
    return base;
  }

  get showEyebrow() { return !!this.c.eyebrow?.trim(); }
  get showTitle() { return !!this.c.title?.trim(); }
  get showSub() { return !!this.c.subtitle?.trim(); }
  get showSteps() { return Array.isArray(this.c.steps) && this.c.steps.length > 0; }

  get gridClass() {
    return {
      'cols-2': this.c.columns === 2,
      'cols-3': this.c.columns === 3,
      'cols-4': this.c.columns === 4
    };
  }
}
