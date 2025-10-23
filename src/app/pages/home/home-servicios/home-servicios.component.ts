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
    {
      title: 'Laboratorio clínico',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Laboratorio-Clinico-en-Lima-Detecta.webp',
      link: '/laboratorio-clinico'
    },
    {
      title: 'Farmacia especializada',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Farmacia-Detecta-Banner-principal-scaled.webp',
      link: '/farmacia'
    },
    {
      title: 'Diagnóstico por imágenes',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Home-Detecta-Banner-2.5-scaled.webp',
      link: '/diagnostico-por-imagenes'
    },
    {
      title: 'Laboratorio de anatomía patológica',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Laboratorio-de-Anatomia-Patologica-Home-Detecta.webp',
      link: '/laboratorio-de-anatomia-patologica'
    },
    {
      title: 'Quimioterapia en Detecta Clínica',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Home-Detecta-Banner-2.2-scaled.webp',
      link: '/quimioterapia'
    },
    {
      title: 'Salas de operaciones para cirugías de alta complejidad',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Home-Detecta-Banner-2.3.webp',
      link: '/salas-de-operaciones'
    },
    {
      title: 'Hospitalización en Detecta Clínica',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Home-Detecta-Banner-2.6-scaled.webp',
      link: '/hospitalizacion'
    },
    {
      title: 'Laboratorio clínico',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Laboratorio-Clinico-en-Lima-Detecta.webp',
      link: '/laboratorio-clinico'
    },
    {
      title: 'Farmacia especializada',
      img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/Farmacia-Detecta-Banner-principal-scaled.webp',
      link: '/farmacia'
    },
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