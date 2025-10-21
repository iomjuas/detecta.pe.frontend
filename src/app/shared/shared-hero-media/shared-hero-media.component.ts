import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

type MediaKind = 'image' | 'video';

@Component({
  selector: 'app-shared-hero-media',
  templateUrl: './shared-hero-media.component.html',
  styleUrls: ['./shared-hero-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class SharedHeroMediaComponent {
  /** Apariencia */
  @Input() bgColor: string = '#e9f6fb';         // color de fondo de la sección
  @Input() overlay: string = 'rgba(0,0,0,.28)'; // velo oscuro sobre la media
  @Input() textColor: string = '#ffffff';       // color de los textos
  @Input() align: 'center' | 'left' | 'right' = 'center';

  /** Media */
  @Input() kind: MediaKind = 'image';
  @Input() imageSrc = '';            // usado si kind === 'image'
  @Input() videoSrc = '';            // usado si kind === 'video'
  @Input() poster = '';              // poster del video (opcional)
  @Input() height: string = 'clamp(280px, 48vw, 520px)';

  /** Contenido */
  @Input() eyebrow = '';             // chip superior (opcional)
  @Input() title = '';
  @Input() subtitle = '';

  /** CTA */
  @Input() ctaLabel = '';
  @Input() ctaRouterLink: any[] | string | null = null; // acepta string o array para routerLink
  @Input() ctaExternalHref: string | null = null;       // si prefieres <a href>

  /** Accesibilidad */
  @Input() mediaAlt = 'Imagen de fondo';

  get hasCTA(): boolean {
    return !!(this.ctaLabel && (this.ctaRouterLink || this.ctaExternalHref));
  }
}
