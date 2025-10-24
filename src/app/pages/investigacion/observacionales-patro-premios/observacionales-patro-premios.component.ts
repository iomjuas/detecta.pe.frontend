import { Component, OnDestroy, OnInit } from '@angular/core';

interface Slide {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-observacionales-patro-premios',
  standalone: false,
  templateUrl: './observacionales-patro-premios.component.html',
  styleUrl: './observacionales-patro-premios.component.scss'
})
export class ObservacionalesPatroPremiosComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Dr.-Gaston-Mendoza.webp', alt: 'Equipo de investigación 3' },
    // { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/equipo-invest-5.webp', alt: 'Equipo de investigación 1' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/equipo-invest-1.webp', alt: 'Equipo de investigación 2' },
    // { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/equipo-invest-4.webp', alt: 'Equipo de investigación 3' },
  ];

  index = 0;
  autoplayMs = 4500;
  private timer: any;

  ngOnInit() { this.start(); }
  ngOnDestroy() { this.stop(); }

  prev() { this.index = (this.index - 1 + this.slides.length) % this.slides.length; }
  next() { this.index = (this.index + 1) % this.slides.length; }

  go(i: number) { this.index = i; }

  start() {
    this.stop();
    this.timer = setInterval(() => this.next(), this.autoplayMs);
  }
  stop() {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }
}
