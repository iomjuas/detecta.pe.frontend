import { Component } from '@angular/core';
import { TestimonialWallConfig } from '../../../../shared/testimonial-wall/testimonial-wall.component';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-cirujia-oncologica',
  standalone: false,
  templateUrl: './cirujia-oncologica.component.html',
  styleUrl: './cirujia-oncologica.component.scss'
})
export class CirujiaOncologicaComponent {
  twallConfig = {
    eyebrow: 'TESTIMONIOS',
    title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
    cta: { label: '', routerLink: ['/contacto'] },
    items: [
      {
        quote: 'Tenía un bulto en la garganta que no se iba. El Dr. Olaechea me escuchó, me explicó con claridad y actuó rápido. Hoy estoy en recuperación y agradecida con todo el equipo.',
        author: 'María Sánchez',
        meta: '50 años',
        tag: 'Lima'
      },
      {
        quote: 'Me detectaron un tumor en la boca. Vine a Detecta porque me hablaron de su especialidad en cabeza y cuello. La cirugía fue dura, pero el acompañamiento fue constante. Gracias al equipo, puedo hablar y comer mejor.',
        author: 'Juan Perez',
        meta: '62 años'
      },
      {
        quote: 'El equipo de cirugía oncológica me trató con profesionalismo y calidez desde el primer momento',
        author: 'Luis T.',
        meta: '61 años'
      }
    ],
    bg: '#f1fcff',
    accent: '#2e9cc0',
    glass: true,
    columns: 3,
    autoPlayMobile: true,
    autoPlayMs: 4200
  } as TestimonialWallConfig;
  
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: {
      src: 'assets/img/quimio/bomba.jpg',
      alt: 'Equipo quirúrgico',
      side: 'left',
    },
    eyebrow: 'Cabeza y cuello',
    title: 'Diagnóstico y manejo quirúrgico especializado',
    copy: 'Contamos con un equipo multidisciplinario con experiencia en tumores de cabeza y cuello.',
    listCols: 2,
    groups: [
      {
        title: 'Diagnóstico',
        items: [
          'Biopsias (incisional, excisional)',
          'Punción aspirativa con aguja fina',
          'Estudios de imagen: TAC, RM, PET-CT',
          'Marcadores tumorales e inmunohistoquímica'
        ]
      },
      {
        title: 'Tratamientos quirúrgicos',
        items: [
          'Resección de tumores de cavidad oral',
          'Laringectomía parcial o total',
          'Glossectomía',
          'Sialadenectomía (glándulas salivales)',
          'Cirugía de senos paranasales / nariz',
          'Disección de cuello',
          'Reconstrucción con colgajos microvasculares o libres'
        ]
      },
      {
        title: 'Tratamientos combinados / complementarios',
        items: [
          'Radioterapia postoperatoria',
          'Quimioterapia adyuvante',
          'Terapias dirigidas'
        ]
      },
      {
        title: 'Acompañamiento integral',
        items: [
          'Evaluaciones postoperatorias periódicas',
          'Rehabilitación del habla y deglución',
          'Apoyo psicológico'
        ]
      }
    ],
    cta: {
      label: 'Agenda una evaluación',
      routerLink: ['/contacto']
    }
  };
}
