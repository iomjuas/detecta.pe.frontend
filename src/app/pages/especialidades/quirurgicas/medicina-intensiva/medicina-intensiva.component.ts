import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-medicina-intensiva',
  standalone: false,
  templateUrl: './medicina-intensiva.component.html',
  styleUrl: './medicina-intensiva.component.scss'
})
export class MedicinaIntensivaComponent {
  // featureOncHeadNeck: FeatureSectionConfig = {
  //   background: '#f1fcff',
  //   media: {
  //     src: 'assets/img/quimio/bomba.jpg',
  //     alt: 'Equipo quirúrgico',
  //     side: 'right',
  //   },
  //   eyebrow: 'Servicios y procedimientos disponibles',
  //   title: 'Tecnología avanzada y procedimientos de última generación',
  //   copy: '', copy2: '<br>',
  //   listCols: 2,
  //   groups: [
  //     {
  //       title: 'Diagnóstico / monitoreo avanzado',
  //       items: [
  //         'Monitoreo hemodinámico invasivo y no invasivo',
  //         'Gasometría arterial continua',
  //         'Ecocardiografía en cuidados críticos',
  //         'Bioquímica, gases, electrolitos y marcadores de daño orgánico',
  //         'Score de gravedad (por ejemplo APACHE II) para evaluación de pronóstico ',
  //         'Monitorización neurológica infantil / cerebral cuando aplica'
  //       ]
  //     },
  //     {
  //       title: 'Intervenciones y soporte vital',
  //       items: [
  //         'Ventilación mecánica invasiva y no invasiva',
  //         'Oxigenación por membrana extracorpórea (ECMO) si aplica',
  //         'Soporte renal continuo (hemodiálisis, hemofiltración)',
  //         'Infusiones vasoactivas y soporte cardiovascular',
  //         'Terapias de manejo de sepsis',
  //         'Sedación, analgesia y cuidado del paciente crítico',
  //         'Manejo de nutrición parenteral o enteral en paciente crítico',
  //         'Cuidado de múltiples órganos simultáneamente'
  //       ]
  //     },
  //     {
  //       title: 'Acompañamiento integral',
  //       items: [
  //         'Atención 24/7 de intensivistas',
  //         'Equipo multidisciplinario (enfermería especializada, fisioterapia, rehabilitación)',
  //         'Comunicación con familiares y cuidados paliativos cuando necesario',
  //         'Rehabilitación temprana, movilización progresiva, soporte post UCI'
  //       ]
  //     },
  //   ],
  //   cta: {
  //     label: 'Agendar cita',
  //     routerLink: ['/contacto']
  //   }
  // };
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: { src: 'assets/img/quimio/bomba.jpg', alt: 'Bomba de infusión', side: 'right' },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Tecnología avanzada y procedimientos de última generación',
    copy: '<br>',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico / monitoreo avanzado',
          open: false,
          bullets: [
            'Monitoreo hemodinámico invasivo y no invasivo',
            'Gasometría arterial continua',
            'Ecocardiografía en cuidados críticos',
            'Bioquímica, gases, electrolitos y marcadores de daño orgánico',
            'Score de gravedad (por ejemplo APACHE II) para evaluación de pronóstico ',
            'Monitorización neurológica infantil / cerebral cuando aplica'
          ]
        },
        {
          title: 'Intervenciones y soporte vital',
          open: false,
          bullets: [
            'Ventilación mecánica invasiva y no invasiva',
            'Oxigenación por membrana extracorpórea (ECMO) si aplica',
            'Soporte renal continuo (hemodiálisis, hemofiltración)',
            'Infusiones vasoactivas y soporte cardiovascular',
            'Terapias de manejo de sepsis',
            'Sedación, analgesia y cuidado del paciente crítico',
            'Manejo de nutrición parenteral o enteral en paciente crítico',
            'Cuidado de múltiples órganos simultáneamente'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Atención 24/7 de intensivistas',
            'Equipo multidisciplinario (enfermería especializada, fisioterapia, rehabilitación)',
            'Comunicación con familiares y cuidados paliativos cuando necesario',
            'Rehabilitación temprana, movilización progresiva, soporte post UCI'
          ]
        }
      ]
    }
  };
}
