import { Component, OnDestroy, OnInit } from '@angular/core';

interface Slide {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-investigacion-equipo',
  templateUrl: './investigacion-equipo.component.html',
  styleUrls: ['./investigacion-equipo.component.scss'],
  standalone: false
})
export class InvestigacionEquipoComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Quimio-4-Detecta.webp', alt: 'Equipo de investigación 1' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Investigacion-Mamografo-Detecta.webp', alt: 'Equipo de investigación 2' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Mastologia-Detecta-Banner-V1.4.webp', alt: 'Equipo de investigación 3' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/equipo-1-Detecta-scaled.webp', alt: 'Equipo de investigación 3' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Banner-Detecta-Investigacion-V1.1.webp', alt: 'Equipo de investigación 3' },
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
