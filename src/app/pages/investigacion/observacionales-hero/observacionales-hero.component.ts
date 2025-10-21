import { Component } from '@angular/core';

@Component({
  selector: 'app-observacionales-hero',
  templateUrl: './observacionales-hero.component.html',
  styleUrls: ['./observacionales-hero.component.scss'],
  standalone: false
})
export class ObservacionalesHeroComponent {
  // Cambia la ruta por tu asset local si quieres
  readonly img = 'https://detecta.pe/wp-content/uploads/2025/09/Banner-Detecta-Investigacion-V1.2.webp';
}
