import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';
import { TestimonialWallConfig } from '../../../../shared/testimonial-wall/testimonial-wall.component';

@Component({
  selector: 'app-otorrinolaringologia',
  standalone: false,
  templateUrl: './otorrinolaringologia.component.html',
  styleUrl: './otorrinolaringologia.component.scss'
})
export class OtorrinolaringologiaComponent {
  twallConfig = {
    eyebrow: 'TESTIMONIOS',
    title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
    cta: { label: '', routerLink: ['/contacto'] },
    items: [
      {
        quote: 'Perdí parte de mi voz y sentía mucha inseguridad para hablar. Me hicieron laringoscopia y tratamiento personalizado; recuperé mi voz y confianza.',
        author: 'Gabriela Torres',
        meta: '37 años',
        tag: 'Lima'
      },
      {
        quote: 'Vivía con la nariz tapada y escuchaba cada vez menos. En Detecta me hicieron endoscopia nasal y audiometría; hoy respiro mejor y recuperé audición.',
        author: 'Jose Quispe',
        meta: '50 años',
        tag: 'Cusco'
      },
      {
        quote: 'Los doctores siempre estuvieron a mi lado en todo el proceso que me ayudaron a recuperarme muy rápido.',
        author: 'Daniel Poma',
        meta: '31 años'
      }
    ],
    bg: 'linear-gradient(180deg,#f1fcff 5%, #eafaa1 80%, #f1fcff 100%)',
    accent: '#2e9cc0',
    glass: true,
    columns: 3,
    autoPlayMobile: true,
    autoPlayMs: 4200
  } as TestimonialWallConfig;
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: {
      src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/especialidadesquirurgicas/otorrinolaringologia/Otorrinolaringologia-Detecta-Banner-V1.2.webp',
      alt: 'Bomba de infusión', side: 'left'
    },
    eyebrow: 'Servicios y procedimientos ORL',
    title: 'Tecnología avanzada para diagnósticos y tratamientos efectivos',
    copy: '<br>',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico',
          open: false,
          bullets: [
            'Laringoscopia para evaluar cuerdas vocales y laringe',
            'Endoscopia nasal para revisar fosas nasales y senos paranasales',
            'Audiometría y Timpanometría para evaluar la audición y función del oído medio',
            'Pruebas vestibulares para mareos y equilibrio',
            'Nasofaringoscopia para garganta y vías superiores'
          ]
        },
        {
          title: 'Tratamientos quirúrgicos y ambulatorios',
          open: false,
          bullets: [
            'Cirugías funcionales de nariz (septoplastia, turbinoplastia)',
            'Cirugía de amígdalas y adenoides',
            'Microcirugía laríngea para pólipos o lesiones vocales',
            'Colocación de tubos de ventilación',
            'Cirugía endoscópica de senos paranasales'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Programas de rehabilitación de la voz',
            'Manejo de alergias respiratorias',
            'Seguimiento de problemas auditivos y adaptaciones con audífonos',
            'Controles periódicos post quirúrgicos'
          ]
        }
      ]
    }
  };

  // featureOncHeadNeck: FeatureSectionConfig = {
  //   background: '#f1fcff',
  //   media: {
  //     src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/especialidadesquirurgicas/otorrinolaringologia/Otorrinolaringologia-Detecta-Banner-V1.2.webp',
  //     alt: 'Equipo quirúrgico',
  //     side: 'left',
  //   },
  //   eyebrow: 'Servicios y procedimientos ORL',
  //   title: 'Tecnología avanzada para diagnósticos y tratamientos efectivos',
  //   copy: '', copy2: '<br>',
  //   listCols: 2,
  //   groups: [
  //     {
  //       title: 'Diagnóstico',
  //       items: [
  //         'Laringoscopia para evaluar cuerdas vocales y laringe',
  //         'Endoscopia nasal para revisar fosas nasales y senos paranasales',
  //         'Audiometría y Timpanometría para evaluar la audición y función del oído medio',
  //         'Pruebas vestibulares para mareos y equilibrio',
  //         'Nasofaringoscopia para garganta y vías superiores'
  //       ]
  //     },
  //     {
  //       title: 'Tratamientos quirúrgicos y ambulatorios',
  //       items: [
  //         'Cirugías funcionales de nariz (septoplastia, turbinoplastia)',
  //         'Cirugía de amígdalas y adenoides',
  //         'Microcirugía laríngea para pólipos o lesiones vocales',
  //         'Colocación de tubos de ventilación',
  //         'Cirugía endoscópica de senos paranasales'
  //       ]
  //     },
  //     {
  //       title: 'Acompañamiento integral',
  //       items: [
  //         'Programas de rehabilitación de la voz',
  //         'Manejo de alergias respiratorias',
  //         'Seguimiento de problemas auditivos y adaptaciones con audífonos',
  //         'Controles periódicos post quirúrgicos'
  //       ]
  //     },
  //   ],
  //   cta: {
  //     label: 'Agendar cita',
  //     routerLink: ['/contacto']
  //   }
  // };
}
