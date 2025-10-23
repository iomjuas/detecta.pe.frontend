import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-mastologia',
  standalone: false,
  templateUrl: './mastologia.component.html',
  styleUrl: './mastologia.component.scss'
})
export class MastologiaComponent {
  // featureOncHeadNeck: FeatureSectionConfig = {
  //   background: '#f1fcff',
  //   media: {
  //     src: 'assets/img/quimio/bomba.jpg',
  //     alt: 'Equipo quirúrgico',
  //     side: 'right',
  //   },
  //   eyebrow: 'Cabeza y cuello',
  //   title: 'Diagnóstico y manejo quirúrgico especializado',
  //   copy: '',
  //   copy2: '<br>',
  //   listCols: 2,
  //   groups: [
  //     {
  //       title: 'Diagnóstico',
  //       items: [
  //         'Mamografía 3D – Tomosíntesis',
  //         'Ecografía Mamaria Shear Wave',
  //         'Biopsia estereotáctica, core y BAAF',
  //         'Resonancia mamaria',
  //         'Marcadores tumorales específicos'
  //       ]
  //     },
  //     {
  //       title: 'Tratamientos quirúrgicos',
  //       items: [
  //         'Cirugía conservadora de mama (tumorectomía, cuadrantectomía)',
  //         'Mastectomía total o parcial',
  //         'Ganglio Centinela con Verde de Indocianina',
  //         'Linfadenectomía axilar',
  //         'Reconstrucción mamaria inmediata o diferida'
  //       ]
  //     },
  //     {
  //       title: 'Acompañamiento integral',
  //       items: [
  //         'Apoyo psicológico oncológico',
  //         'Rehabilitación y linfoterapia post cirugía',
  //         'Seguimiento y control periódico'
  //       ]
  //     }
  //   ],
  //   cta: {
  //     label: 'Agenda una evaluación',
  //     routerLink: ['/contacto']
  //   }
  // };
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/especialidadesquirurgicas/mastologia/Mastologia-Detecta-Banner-V1.4.webp', alt: 'Bomba de infusión', side: 'left' },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Diagnóstico preciso, cirugía avanzada y apoyo integral',
    copy: '<br>',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico',
          open: false,
          bullets: [
            'Mamografía 3D – Tomosíntesis',
            'Ecografía Mamaria Shear Wave',
            'Biopsia estereotáctica, core y BAAF',
            'Resonancia mamaria',
            'Marcadores tumorales específicos'
          ]
        },
        {
          title: 'Tratamientos quirúrgicos',
          open: false,
          bullets: [
            'Cirugía conservadora de mama (tumorectomía, cuadrantectomía)',
            'Mastectomía total o parcial',
            'Ganglio Centinela con Verde de Indocianina',
            'Linfadenectomía axilar',
            'Reconstrucción mamaria inmediata o diferida'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Apoyo psicológico oncológico',
            'Rehabilitación y linfoterapia post cirugía',
            'Seguimiento y control periódico'
          ]
        }
      ]
    }
  };
}
