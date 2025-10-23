import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';
import { TestimonialWallConfig } from '../../../../shared/testimonial-wall/testimonial-wall.component';

@Component({
  selector: 'app-traumatologia',
  standalone: false,
  templateUrl: './traumatologia.component.html',
  styleUrl: './traumatologia.component.scss'
})
export class TraumatologiaComponent {
  twallConfig = {
    eyebrow: 'TESTIMONIOS',
    title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
    cta: { label: '', routerLink: ['/contacto'] },
    items: [
      {
        quote: '“Me fracturé la tibia en un partido de fútbol. En Detecta me intervinieron rápidamente, me explicaron el procedimiento y hoy camino sin dolor gracias a la rehabilitación.”',
        author: 'Gustavo Herrera',
        meta: '38 años',
        tag: 'Lima'
      },
      {
        quote: '“Tenía dolor intenso en la rodilla por artrosis. Fui a Detecta, hicieron estudios precisos y ahora estoy con artroscopia y terapia; camino mejor y con menos dolor.”',
        author: 'Carla Perez',
        meta: '45 años',
        tag: 'Arequipa'
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
  
  // featureOncHeadNeck: FeatureSectionConfig = {
  //   background: '#f1fcff',
  //   media: {
  //     src: 'assets/img/quimio/bomba.jpg',
  //     alt: 'Equipo quirúrgico',
  //     side: 'left',
  //   },
  //   eyebrow: 'Servicios y procedimientos',
  //   title: 'Tecnología avanzada al servicio de tu salud y tu bienestar',
  //   copy: '', copy2: '<br>',
  //   listCols: 2,
  //   groups: [
  //     {
  //       title: 'Diagnóstico',
  //       items: [
  //         'Radiografía simple',
  //         'Tomografía computarizada (TAC) ósea',
  //         'Resonancia magnética de articulaciones',
  //         'Ecografía musculoesquelética',
  //         'Evaluación funcional, estudios biomecánicos'
  //       ]
  //     },
  //     {
  //       title: 'Acompañamiento integral',
  //       items: [
  //         'Rehabilitación física especializada y progresiva',
  //         'Terapia de recuperación funcional',
  //         'Fisioterapia, ejercicio terapéutico',
  //         'Seguimiento postoperatorio'
  //       ]
  //     },
  //     {
  //       title: 'Tratamientos quirúrgicos / intervenciones',
  //       items: [
  //         'Fijación de fracturas con placas y tornillos',
  //         'Reparación de ligamentos (por ejemplo rodilla, hombro)',
  //         'Artroscopia de rodilla, hombro, tobillo',
  //         'Liberaciones tendinosas, reparaciones musculares',
  //         'Prótesis articulares (cadera, rodilla) cuando aplica',
  //         'Cirugía mínimamente invasiva para patologías articulares'
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
    media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/especialidadesquirurgicas/traumatologia/Traumatologia-Detecta-Banner-V1.3.webp', alt: 'Bomba de infusión', side: 'left' },
    eyebrow: 'Servicios y procedimientos',
    title: 'Tecnología avanzada al servicio de tu salud y tu bienestar',
    copy: '<br>',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico',
          open: false,
          bullets: [
            'Radiografía simple',
            'Tomografía computarizada (TAC) ósea',
            'Resonancia magnética de articulaciones',
            'Ecografía musculoesquelética',
            'Evaluación funcional, estudios biomecánicos'
          ]
        },
        {
          title: 'Tratamientos quirúrgicos / intervenciones',
          open: false,
          bullets: [
            'Fijación de fracturas con placas y tornillos',
            'Reparación de ligamentos (por ejemplo rodilla, hombro)',
            'Artroscopia de rodilla, hombro, tobillo',
            'Liberaciones tendinosas, reparaciones musculares',
            'Prótesis articulares (cadera, rodilla) cuando aplica',
            'Cirugía mínimamente invasiva para patologías articulares'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Rehabilitación física especializada y progresiva',
            'Terapia de recuperación funcional',
            'Fisioterapia, ejercicio terapéutico',
            'Seguimiento postoperatorio'
          ]
        }
      ]
    }
  };
}
