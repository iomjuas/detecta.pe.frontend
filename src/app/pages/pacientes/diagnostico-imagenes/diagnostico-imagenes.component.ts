import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostico-imagenes',
  standalone: false,
  templateUrl: './diagnostico-imagenes.component.html',
  styleUrl: './diagnostico-imagenes.component.scss'
})
export class DiagnosticoImagenesComponent {
  // en el componente padre
  sliderItems = [
    {
      media: { src: 'assets/img/diag/mamo.jpg', alt: 'Mamografía' },
      title: 'Mamografía 3D con Tomosíntesis — Hologic 3Dimensions™',
      description: 'Detección precoz de cáncer de mama con mayor detalle y menor incomodidad.'
    },
    {
      media: { src: 'assets/img/diag/eco.jpg', alt: 'Ecografía' },
      title: 'Ecografía de Alta Definición — Resona 7 (Mindray)',
      description: 'Imágenes nítidas y confiables para estudios ginecológicos, musculo-esqueléticos y abdominales.'
    },
    {
      media: { src: 'assets/img/diag/tc.jpg', alt: 'Tomografía' },
      title: 'Tomografía Multicorte — United Imaging uCT 528',
      description: 'Alta resolución para oncología, pulmón, abdomen, neurología y traumatología.'
    },
    {
      media: { src: 'assets/img/diag/mamo.jpg', alt: 'Mamografía' },
      title: 'Densitometría Ósea – Hologic DXA',
      description: 'Evaluación segura y precisa de osteoporosis y riesgo de fractura.'
    },
    {
      media: { src: 'assets/img/diag/eco.jpg', alt: 'Ecografía' },
      title: 'Rayos X Digital',
      description: 'Estudios de tórax, columna, extremidades y abdomen con menor radiación y resultados inmediatos.'
    },
    {
      media: { src: 'assets/img/diag/tc.jpg', alt: 'Tomografía' },
      title: 'Arco en C Intraoperatorio – Philips Zenition 70',
      description: 'Visualización en tiempo real para cirugías más seguras y precisas.'
    }
  ];

}
