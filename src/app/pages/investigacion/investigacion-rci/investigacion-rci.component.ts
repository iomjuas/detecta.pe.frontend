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
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/pngfind.com-merck-logo-png-1422747-1.png', alt: 'MSD' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/image-26.png', alt: 'AstraZeneca' },
    { src: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/ICON-plc_idqYIiVdFN_1-1.png', alt: 'ICON' }
  ];
}
