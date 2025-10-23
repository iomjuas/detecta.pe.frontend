import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-neurocirugia',
  standalone: false,
  templateUrl: './neurocirugia.component.html',
  styleUrl: './neurocirugia.component.scss'
})
export class NeurocirugiaComponent {
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: {
      src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/especialidadesquirurgicas/neurocirugia/Neurologia-Detecta-Banner-V1.3.webp',
      alt: 'Bomba de infusión', side: 'left'
    },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Tecnología y técnicas de vanguardia',
    copy: '<br>',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico avanzado',
          open: false,
          bullets: [
            'Resonancia magnética (RM), TAC cerebral o de columna',
            'Angiografía cerebral',
            'Estudios neurofisiológicos (EEG, EMG)',
            'Evaluación funcional para Parkinson y trastornos del movimiento',
            'Biopsias neurológicas'
          ]
        },
        {
          title: 'Tratamientos quirúrgicos',
          open: false,
          bullets: [
            'Resección de tumores cerebrales y medulares',
            'Cirugía de columna mínimamente invasiva',
            'Clipaje de aneurismas y malformaciones vasculares',
            'Cirugía funcional para Parkinson (estimulación cerebral profunda)',
            'Implantes de electrodos para control de movimiento y dolor',
            'Descompresión espinal'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Evaluación preoperatoria completa',
            'Cuidados neurointensivos post cirugía',
            'Rehabilitación neurológica y fisioterapia',
            'Seguimiento especializado a largo plazo'
          ]
        }
      ]
    }
  };
  // featureOncHeadNeck: FeatureSectionConfig = {
  //   background: '#f1fcff',
  //   media: {
  //     src: 'assets/img/quimio/bomba.jpg',
  //     alt: 'Equipo quirúrgico',
  //     side: 'left',
  //   },
  //   eyebrow: 'Servicios y procedimientos disponibles',
  //   title: 'Tecnología y técnicas de vanguardia',
  //   copy: '', copy2: '<br>',
  //   listCols: 2,
  //   groups: [
  //     {
  //       title: 'Diagnóstico avanzado',
  //       items: [
  //         'Resonancia magnética (RM), TAC cerebral o de columna',
  //         'Angiografía cerebral',
  //         'Estudios neurofisiológicos (EEG, EMG)',
  //         'Evaluación funcional para Parkinson y trastornos del movimiento',
  //         'Biopsias neurológicas'
  //       ]
  //     },
  //     {
  //       title: 'Tratamientos quirúrgicos',
  //       items: [
  //         'Resección de tumores cerebrales y medulares',
  //         'Cirugía de columna mínimamente invasiva',
  //         'Clipaje de aneurismas y malformaciones vasculares',
  //         'Cirugía funcional para Parkinson (estimulación cerebral profunda)',
  //         'Implantes de electrodos para control de movimiento y dolor',
  //         'Descompresión espinal'
  //       ]
  //     },
  //     {
  //       title: 'Acompañamiento integral',
  //       items: [
  //         'Evaluación preoperatoria completa',
  //         'Cuidados neurointensivos post cirugía',
  //         'Rehabilitación neurológica y fisioterapia',
  //         'Seguimiento especializado a largo plazo'
  //       ]
  //     },
  //   ],
  //   cta: {
  //     label: 'Agendar cita',
  //     routerLink: ['/contacto']
  //   }
  // };
}
