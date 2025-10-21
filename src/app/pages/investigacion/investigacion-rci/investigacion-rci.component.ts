import { Component } from '@angular/core';

@Component({
  selector: 'app-investigacion-rci',
  templateUrl: './investigacion-rci.component.html',
  styleUrls: ['./investigacion-rci.component.scss'],
  standalone: false
})
export class InvestigacionRciComponent {
  // Reemplaza las rutas de logos por tus assets locales
  readonly logos = [
    { src: 'assets/img/logos/msd.svg', alt: 'MSD' },
    { src: 'assets/img/logos/astrazeneca.svg', alt: 'AstraZeneca' },
    { src: 'assets/img/logos/icon.svg', alt: 'ICON' }
  ];
}
