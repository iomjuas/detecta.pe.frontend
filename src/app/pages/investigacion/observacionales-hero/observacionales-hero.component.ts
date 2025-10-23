import { Component } from '@angular/core';

@Component({
  selector: 'app-observacionales-hero',
  templateUrl: './observacionales-hero.component.html',
  styleUrls: ['./observacionales-hero.component.scss'],
  standalone: false
})
export class ObservacionalesHeroComponent {
  // Cambia la ruta por tu asset local si quieres
  readonly img = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Banner-Detecta-Investigacion-V1.2.webp';
}
