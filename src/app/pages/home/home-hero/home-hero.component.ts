import { Component } from '@angular/core';

interface HeroSlide {
  img: string;
  title: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  interval?: number;
}

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  standalone: false
})
export class HomeHeroComponent {
  slides: HeroSlide[] = [
    {
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop',
      title: 'Cuidamos tu salud con calidez y ciencia',
      desc: 'Prevención, diagnóstico y tratamiento con un equipo humano y tecnología de vanguardia.',
      ctaText: 'Agenda tu cita',
      ctaLink: '/contacto',
      interval: 4000
    },
    {
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1920&auto=format&fit=crop',
      title: 'Atención integral en un solo lugar',
      desc: 'Especialidades médicas y quirúrgicas coordinadas para tu tranquilidad.',
      ctaText: 'Ver especialidades',
      ctaLink: '/especialidades-medicas',
      interval: 4000
    },
    {
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop',
      title: 'Resultados confiables, trato humano',
      desc: 'Laboratorio, imágenes y hospitalización con estándares de calidad.',
      ctaText: 'Conoce nuestros servicios',
      ctaLink: '/servicios',
      interval: 4000
    }
  ];

  onImgError(ev: Event) {
    const el = ev.target as HTMLImageElement;
    el.src = 'https://images.unsplash.com/photo-1580281657527-47f249e8f5b2?q=80&w=1920&auto=format&fit=crop';
  }
}
