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
    { name: 'OncoRed', logo: 'assets/partners/onco-red.svg', url: '#' },
    { name: 'Clinimagen', logo: 'assets/partners/clinimagen.svg', url: '#' },
    { name: 'BioLab', logo: 'assets/partners/biolab.svg', url: '#' },
    { name: 'PharmaCo', logo: 'assets/partners/pharmaco.svg', url: '#' },
    { name: 'Seguros A', logo: 'assets/partners/seguros-a.svg', url: '#' },
  ];

  partnersRow2: Partner[] = [
    { name: 'Universidad X', logo: 'assets/partners/univ-x.svg', url: '#' },
    { name: 'Fundación Y', logo: 'assets/partners/fund-y.svg', url: '#' },
    { name: 'Telemed Z', logo: 'assets/partners/telemed-z.svg', url: '#' },
    { name: 'Imágenes Q', logo: 'assets/partners/imagenes-q.svg', url: '#' },
    { name: 'Seguros B', logo: 'assets/partners/seguros-b.svg', url: '#' },
  ];

  // puedes ajustar la velocidad (más alto = más lento)
  row1Speed = '26s';
  row2Speed = '32s';
}
