import { Component } from '@angular/core';

type Partner = { name: string; logo: string; url: string; };

@Component({
  selector: 'app-home-alianzas',
  standalone: false,
  templateUrl: './home-alianzas.component.html',
  styleUrl: './home-alianzas.component.scss'
})
export class HomeAlianzasComponent {

  // reemplaza con tus logos (ideal: SVG/PNG con fondo transparente)
  partnersRow1: Partner[] = [
    { name: 'Colegio Medicos', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/image-20.png', url: '#' },
    { name: 'Rimac Seguros', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/image-21.png', url: '#' },
    { name: 'Maphre', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/pngegg-1.png', url: '#' },
    { name: 'Corpac', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/image-22.png', url: '#' }
  ];

  // partnersRow2: Partner[] = [
  //   { name: 'Colegio Medicos', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/image-20.png', url: '#' },
  //   { name: 'Rimac Seguros', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/image-21.png', url: '#' },
  //   { name: 'Maphre', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/pngegg-1.png', url: '#' },
  //   { name: 'Corpac', logo: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/home/image-22.png', url: '#' }
  // ];

  // puedes ajustar la velocidad (más alto = más lento)
  row1Speed = '26s';
  row2Speed = '32s';
}
