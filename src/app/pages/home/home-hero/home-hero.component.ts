import { Component, HostListener, OnInit } from '@angular/core';

interface HeroSlide {
  imgDesktop: string; // Imagen para pantallas grandes
  imgMobile: string; // Imagen para pantallas pequeñas
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
  standalone: false,
})
export class HomeHeroComponent implements OnInit {
  slides: HeroSlide[] = [
    {
      imgDesktop:
        'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Slide1.ai.jpg',
      imgMobile:
        '../../../../assets/Recurso 1.png',
      title: 'Cuidarte es un acto de amor',
      desc: 'La detección temprana salva vidas',
      ctaText: 'Agenda una cita',
      ctaLink: '/contacto',
      interval: 4000,
    },
    // Aquí pueden ir más slides
  ];

  currentSlide: HeroSlide = this.slides[0]; // Imagen inicial, basada en el primer slide
  isMobile: boolean = window.innerWidth < 768; // Determina si es móvil o PC

  ngOnInit(): void {
    this.updateImageForDevice(window.innerWidth); // Establece la imagen inicial en función del tamaño
  }

  // Listener para actualizar la imagen al cambiar el tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.updateImageForDevice(width);
  }

  // Función para actualizar la imagen dependiendo del tamaño de la pantalla
  updateImageForDevice(width: number): void {
    this.isMobile = width < 768;
    this.currentSlide = this.isMobile ? this.slides[0] : this.slides[0]; // Puedes cambiar el índice de slides según lo necesites
  }

  onImgError(ev: Event) {
    const el = ev.target as HTMLImageElement;
    el.src =
      'https://images.unsplash.com/photo-1580281657527-47f249e8f5b2?q=80&w=1920&auto=format&fit=crop';
  }
}
