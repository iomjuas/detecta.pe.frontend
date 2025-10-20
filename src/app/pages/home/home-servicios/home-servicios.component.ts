import { Component, HostListener, OnInit } from '@angular/core';

interface ServiceCard {
  title: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-home-servicios',
  standalone: false,
  templateUrl: './home-servicios.component.html',
  styleUrl: './home-servicios.component.scss'
})
export class HomeServiciosComponent implements OnInit {

  services: ServiceCard[] = [
    { title: 'Hospitalización en Detecta Clínica', 
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop', 
      link: '/hospitalizacion' },
    { title: 'Salas de operaciones de alta complejidad', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop', link: '/salas-de-operaciones' },
    { title: 'Farmacia especializada', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop', link: '/farmacia' },
    { title: 'Diagnóstico por imágenes', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop', link: '/imagenologia' },
    { title: 'Laboratorio clínico', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop', link: '/laboratorio-clinico' },
    { title: 'Quimioterapia ambulatoria', img: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1600&auto=format&fit=crop', link: '/quimioterapia' },
  ];

  /** cuántas cards por slide según breakpoint */
  itemsPerSlide = 3;

  /** grupos listos para pintar en el carrusel */
  slideGroups: ServiceCard[][] = [];

  ngOnInit(): void {
    this.updateItemsPerSlide();
    this.groupServices();
  }

  @HostListener('window:resize')
  onResize() {
    const prev = this.itemsPerSlide;
    this.updateItemsPerSlide();
    if (prev !== this.itemsPerSlide) this.groupServices();
  }

  private updateItemsPerSlide() {
    const w = window.innerWidth;
    if (w < 768) this.itemsPerSlide = 1;         // < md
    else if (w < 992) this.itemsPerSlide = 2;    // md - lg
    else this.itemsPerSlide = 3;                 // >= lg
  }

  private groupServices() {
    const groups: ServiceCard[][] = [];
    for (let i = 0; i < this.services.length; i += this.itemsPerSlide) {
      groups.push(this.services.slice(i, i + this.itemsPerSlide));
    }
    this.slideGroups = groups;
  }
}