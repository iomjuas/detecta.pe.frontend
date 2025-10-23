import { Component, Input, ChangeDetectionStrategy, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

type MediaKind = 'image' | 'video';

@Component({
  selector: 'app-shared-hero-media',
  templateUrl: './shared-hero-media.component.html',
  styleUrls: ['./shared-hero-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class SharedHeroMediaComponent implements AfterViewInit {
  @ViewChild('vid') bgVideo!: ElementRef<HTMLVideoElement>;
  isPlaying: boolean | null = null;
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

  playVideo(el: HTMLVideoElement) {
    el.play();
    el.setAttribute('controls', 'true');
  }

  ngAfterViewInit() {
    const v = this.bgVideo.nativeElement;
    // Asegura flags en tiempo de ejecución (iOS es quisquilloso)
    v.muted = true;
    (v as any).playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.controls = false;

    const tryPlay = () => v.play()
      .then(() => this.isPlaying = true)
      .catch(() => this.isPlaying = false);

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener('loadeddata', () => tryPlay(), { once: true });
    }

    // Si cambia la visibilidad, reintenta reproducción al volver
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && this.isPlaying === false) {
        tryPlay();
      }
    });
  }
}
