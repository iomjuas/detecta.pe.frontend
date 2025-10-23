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
      media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/servicios/diagnosticoporimagenes/Diagnostico-por-imagenes-Detecta-Banner-V1.2-1.webp', alt: 'Mamografía' },
      title: 'Mamografía 3D con Tomosíntesis — Hologic 3Dimensions™',
      description: 'Detección precoz de cáncer de mama con mayor detalle y menor incomodidad.'
    },
    {
      media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/servicios/diagnosticoporimagenes/Diagnostico-por-imagenes-Detecta-Banner-V1.3-1.webp', alt: 'Ecografía' },
      title: 'Ecografía de Alta Definición — Resona 7 (Mindray)',
      description: 'Imágenes nítidas y confiables para estudios ginecológicos, musculo-esqueléticos y abdominales.'
    },
    {
      media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/servicios/diagnosticoporimagenes/Diagnostico-por-imagenes-Detecta-Banner-V1.4-2.webp', alt: 'Tomografía' },
      title: 'Tomografía Multicorte — United Imaging uCT 528',
      description: 'Alta resolución para oncología, pulmón, abdomen, neurología y traumatología.'
    },
    {
      media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/servicios/diagnosticoporimagenes/Rectangle-5-1.webp', alt: 'Mamografía' },
      title: 'Densitometría Ósea – Hologic DXA',
      description: 'Evaluación segura y precisa de osteoporosis y riesgo de fractura.'
    },
    {
      media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/servicios/diagnosticoporimagenes/Diagnostico-por-imagenes-Detecta-Banner-V1.6.webp', alt: 'Ecografía' },
      title: 'Rayos X Digital',
      description: 'Estudios de tórax, columna, extremidades y abdomen con menor radiación y resultados inmediatos.'
    },
    {
      media: { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/servicios/diagnosticoporimagenes/Diagnostico-por-imagenes-Detecta-Banner-V1.7-2.webp', alt: 'Tomografía' },
      title: 'Arco en C Intraoperatorio – Philips Zenition 70',
      description: 'Visualización en tiempo real para cirugías más seguras y precisas.'
    }
  ];

}
