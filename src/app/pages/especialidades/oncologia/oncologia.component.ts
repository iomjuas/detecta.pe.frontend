import { Component } from '@angular/core';
import { TestimonialWallConfig } from '../../../shared/testimonial-wall/testimonial-wall.component';

@Component({
  selector: 'app-oncologia',
  standalone: false,
  templateUrl: './oncologia.component.html',
  styleUrl: './oncologia.component.scss'
})
export class OncologiaComponent {
  // en tu componente padre
  twallConfig = {
    eyebrow: 'TESTIMONIOS',
    title: 'Lo que dicen nuestros <span>pacientes</span>, historias que dan confianza',
    cta: { label: '', routerLink: ['/contacto'] },
    items: [
      {
        quote: 'Me explicaron todo con mucha claridad y humanidad. Sentí que tenía opciones reales.',
        author: 'María F.',
        meta: '54 años, cáncer de mama',
        tag: 'Oncología'
      },
      {
        quote: 'Me trataron como persona, no como un diagnóstico. Muy agradecido.',
        author: 'Esteban G.',
        meta: '61 años, cáncer de colon'
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

}
