import { Component, HostListener, OnInit } from '@angular/core';

interface HeroSlide {
  imgDesktop: string; // Imagen para pantallas grandes
  imgMobile1: string; // Imagen para pantallas pequeñas
  imgMobile2: string; // Imagen para pantallas pequeñas
  title: string;
  desc: string;
  desc2: string;
  color_desc: string;
  color_title: string;
  color_desc2: string;
  ctaText: string;
  ctaBackground: string;
  ctaColor: string;
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
        'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta.pe-slider1.webp',
      imgMobile1:
        'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta-slider1.png',
      imgMobile2:
        'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta-slider1.1.png',
      title: 'Cuidarte es un acto de amor',
      desc: 'La detección temprana salva vidas',
      desc2: '',
      color_desc: '#313131',
      color_title: '#313131',
      color_desc2: '#313131',
      ctaBackground: '#3ec9de',
      ctaColor: '#ffffff',
      ctaText: 'Agenda una cita',
      ctaLink: '/contacto',
      interval: 5000,
    },
    {
      imgDesktop: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta-slider2.png',
      imgMobile1: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta-slider2.png',
      imgMobile2: 'vacio',
      title: 'Mamografía 3D con Inteligencia Artificial',
      desc: 'Tecnología Avanzada',
      desc2: 'Diagnóstico más preciso, imágenes más claras y resultados más confiables.',
      color_desc: '#ffffff',
      color_title: '#49b9e7',
      color_desc2: '#ffffff',
      ctaBackground: '#3ec9de',
      ctaColor: '#ffffff',
      ctaText: 'Agenda una cita',
      ctaLink: '/contacto',
      interval: 5000,
    },
    {
      imgDesktop: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta.pe-slider3.webp',
      imgMobile1: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta-slider3.png',
      imgMobile2: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/detecta-slider3.1.png',
      title: 'Cuidarte es un acto de amor',
      desc: 'Preventivo Rosa',
      desc2: 'La detección temprana salva vidas',
      color_desc: '#ffffff',
      color_title: '#ffffff',
      color_desc2: '#ffffff',
      ctaBackground: '#3ec9de',
      ctaColor: '#ffffff',
      ctaText: 'Agenda una cita',
      ctaLink: '/contacto',
      interval: 5000,
    },
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
  }

  onImgError(ev: Event) {
    const el = ev.target as HTMLImageElement;
    el.src =
      'https://images.unsplash.com/photo-1580281657527-47f249e8f5b2?q=80&w=1920&auto=format&fit=crop';
  }
}
