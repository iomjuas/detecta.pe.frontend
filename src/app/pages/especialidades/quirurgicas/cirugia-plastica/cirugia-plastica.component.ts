import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';
import { TestimonialWallConfig } from '../../../../shared/testimonial-wall/testimonial-wall.component';

@Component({
  selector: 'app-cirugia-plastica',
  standalone: false,
  templateUrl: './cirugia-plastica.component.html',
  styleUrl: './cirugia-plastica.component.scss'
})
export class CirugiaPlasticaComponent {
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/especialidadesquirurgicas/cirugia-plastica/Cirugia-Plastica-Detecta-Banner-V1.3.webp', alt: 'Bomba de infusión', side: 'left' },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Soluciones médicas para cada necesidad de reconstrucción',
    copy: '<br>',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico / planificación',
          open: false,
          bullets: [
            'Evaluación clínica detallada',
            'Modelado 3D y simulaciones estéticas',
            'Fotografía médica pre / post',
            'Estudios complementarios: ecografía, TAC de partes blandas'
          ]
        },
        {
          title: 'Tratamientos / procedimientos quirúrgicos',
          open: false,
          bullets: [
            'Mamoplastia de aumento / reducción',
            'Abdominoplastia (cirugía abdominal)',
            'Liposucción y lipoescultura',
            'Rinoplastia',
            'Blefaroplastia y cirugía periocular',
            'Facelift / lifting facial',
            'Reconstrucción mamaria, facial y corporal',
            'Cirugía de mano y microcirugía',
            'Injertos y colgajos locales o libres',
            'Corrección de cicatrices y quemaduras'
          ]
        },
        {
          title: 'Tratamientos no quirúrgicos / complementarios',
          open: false,
          bullets: [
            'Rellenos con ácido hialurónico',
            'Toxina botulínica (botox)',
            'Peelings, microdermoabrasión',
            'Láser dermatológico para cicatrices',
            'Mesoterapia'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Seguimiento médico postoperatorio',
            'Cuidado de heridas y manejo del dolor',
            'Rehabilitación funcional cuando aplica',
            'Apoyo emocional pre y post cirugía'
          ]
        }
      ]
    }
  };
  twallConfig = {
    eyebrow: 'TESTIMONIOS',
    title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
    cta: { label: '', routerLink: ['/contacto'] },
    items: [
      {
        quote: 'Siempre quise arreglar mi abdomen pero tenía miedo. En Detecta me explicaron paso a paso y me sentí segura. Hoy tengo resultados buenos, me veo y me siento mejor.',
        author: 'Maria Gomez',
        meta: '45 años',
        tag: 'Lima'
      },
      {
        quote: 'Tenía una lesión tras un accidente facial. El equipo de reconstrucción fue impecable. No solo corrigieron el daño, restauraron mi confianza.',
        author: 'Carlos Rivera',
        meta: '38 años'
      },
      {
        quote: 'El equipo siempre estuvo a mi lado, incluso en momentos difíciles.',
        author: 'Erick Noruha',
        meta: '46 años'
      }
    ],
    bg: 'linear-gradient(180deg,#f1fcff 5%, #eafaa1 80%, #f1fcff 100%)',
    accent: '#2e9cc0',
    glass: true,
    columns: 3,
    autoPlayMobile: true,
    autoPlayMs: 4200
  } as TestimonialWallConfig;
}
