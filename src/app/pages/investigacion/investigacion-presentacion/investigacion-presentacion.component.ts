import { Component } from '@angular/core';

@Component({
  selector: 'app-investigacion-presentacion',
  standalone: false,
  templateUrl: './investigacion-presentacion.component.html',
  styleUrl: './investigacion-presentacion.component.scss'
})
export class InvestigacionPresentacionComponent {

  // Cambia rutas si quieres abrir video real o navegar
  readonly poster = 'https://detecta.pe/wp-content/uploads/2025/08/CTA-Home-Detecta.webp';
  readonly video = 'https://detecta.pe/wp-content/uploads/2025/09/Video-Banner-2-Home-Detecta.mp4';

  playVideo(el: HTMLVideoElement) {
    el.play();
    el.setAttribute('controls', 'true');
  }
}
