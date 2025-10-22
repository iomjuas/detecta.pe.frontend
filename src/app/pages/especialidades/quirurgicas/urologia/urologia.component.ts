import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';
import { TestimonialWallConfig } from '../../../../shared/testimonial-wall/testimonial-wall.component';

@Component({
  selector: 'app-urologia',
  standalone: false,
  templateUrl: './urologia.component.html',
  styleUrl: './urologia.component.scss'
})
export class UrologiaComponent {
  twallConfig = {
    eyebrow: 'TESTIMONIOS',
    title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
    cta: { label: '', routerLink: ['/contacto'] },
    items: [
      {
        quote: 'La verdad llegué con mucho miedo porque tenía problemas para orinar y mi PSA estaba alto. El Dr. Nicanor me explicó todo con calma, como si hablara con un amigo, y eso me dio confianza. Gracias a su tratamiento hoy estoy tranquilo y con mis controles al día. Le estoy muy agradecido.',
        author: 'Jose Ramirez',
        meta: '64 años',
        tag: 'Lima'
      },
      {
        quote: 'Al Dr. Alexis lo encontré gracias a una recomendación y fue lo mejor que me pudo pasar. Siempre me habló claro, sin rodeos, y me acompañó en cada etapa de mi operación. Ahora estoy recuperado y de verdad solo me queda decir: gracias doctor, por devolverme la tranquilidad.',
        author: 'Carlos Quispe',
        meta: '58 años'
      },
      {
        quote: 'El equipo siempre estuvo a mi lado, incluso en momentos difíciles.',
        author: 'Ana L.',
        meta: '46 años, linfoma'
      }
    ],
    bg: 'linear-gradient(180deg,#f1fcff 5%, #eafaa1 80%, #f1fcff 100%)',
    accent: '#2e9cc0',
    glass: true,
    columns: 3,
    autoPlayMobile: true,
    autoPlayMs: 4200
  } as TestimonialWallConfig;
  // en el padre que ya usa FeatureSection
  featureCfg: FeatureSectionConfig = {
    background: '#f1fcff',
    media: { src: 'assets/img/quimio/bomba.jpg', alt: 'Bomba de infusión', side: 'left' },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Diagnóstico preciso, cirugía avanzada y apoyo integral',
    copy: 'Seleccionamos la mejor alternativa para tu caso.',
    accordion: {
      singleOpen: true,
      accent: '#d7df3f',
      items: [
        {
          title: 'Diagnóstico',
          open: false,
          bullets: [
            '<strong>Biopsias guiadas por imagen:</strong> precisión para detectar lesiones malignas.',
            '<strong>Marcadores tumorales y estudios genéticos:</strong>  identificación temprana de riesgos y tipo de tumor.',
            '<strong>Imágenes avanzadas:</strong> ecografía, tomografía (TAC) y resonancia magnética para evaluar extensión.'
          ]
        },
        {
          title: 'Tratamientos',
          open: false,
          bullets: [
            '<strong>Cirugía laparoscópica</strong> <em>(procedimiento mínimamente invasivo con recuperación más rápida)</em>.',
            '<strong>Cirugía estándar (abierta)</strong> para casos complejos.',
            '<strong>Radioterapia y braquiterapia</strong> <em>(radiación dirigida al tumor para preservar tejidos sanos)</em>.',
            '<strong>Terapias dirigidas y quimioterapia</strong> <em>(tratamientos que atacan células cancerígenas específicas)</em>.'
          ]
        },
        {
          title: 'Acompañamiento integral',
          open: false,
          bullets: [
            'Controles médicos periódicos',
            'Apoyo psicológico para ti y tu familia',
            'Programas de rehabilitación y seguimiento postoperatorio'
          ]
        }
      ]
    }
  };

}
