import { Component, Input } from '@angular/core';

type MediaType = 'image' | 'video';

@Component({
  selector: 'app-investigacion-hero',
  templateUrl: './investigacion-hero.component.html',
  styleUrls: ['./investigacion-hero.component.scss'],
  standalone: false
})
export class InvestigacionHeroComponent {
  @Input() eyebrow = 'Investigación';
  @Input() title = 'Investigación<br>que transforma vidas';
  @Input() subtitle = 'Estudios clínicos y proyectos que impactan la salud real de nuestros pacientes.';
  @Input() ctaPrimaryLabel = 'Ver estudios';
  @Input() ctaPrimaryLink = '/investigacion/estudios';
  @Input() ctaSecondaryLabel = 'Para investigadores';
  @Input() ctaSecondaryLink = '/investigacion/convocatorias';

  @Input() mediaType: MediaType = 'video';
  @Input() mediaSrc = 'https://detecta.pe/wp-content/uploads/2025/09/Video-Banner-2-Home-Detecta.mp4';
  @Input() mediaPoster = 'https://detecta.pe/wp-content/uploads/2025/08/CTA-Home-Detecta.webp';
  @Input() mediaAlt = 'Equipo de investigadores colaborando';

  // Chips opcionales (puedes pasar [] para ocultarlas)
  @Input() chips: string[] = ['Ensayos clínicos', 'Innovación', 'Ética & seguridad'];
  // Ajusta aquí si cambian rutas o assets.
  readonly videoSrc  = 'https://detecta.pe/wp-content/uploads/2025/09/Video-Banner-2-Home-Detecta.mp4';
  readonly poster    = 'https://detecta.pe/wp-content/uploads/2025/08/CTA-Home-Detecta.webp';
  readonly linkA     = '/investigacion/ensayos';
  readonly linkB     = '/investigacion/observacionales';
}
