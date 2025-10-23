import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-investigacion-presentacion',
  standalone: false,
  templateUrl: './investigacion-presentacion.component.html',
  styleUrl: './investigacion-presentacion.component.scss'
})
export class InvestigacionPresentacionComponent implements AfterViewInit {
  @ViewChild('vid') bgVideo!: ElementRef<HTMLVideoElement>;
  isPlaying = false;

  // Cambia rutas si quieres abrir video real o navegar
  readonly poster = 'https://detecta.pe/wp-content/uploads/2025/08/CTA-Home-Detecta.webp';
  readonly video = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/investigacion/Video-Investigacion-1.mp4';

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
