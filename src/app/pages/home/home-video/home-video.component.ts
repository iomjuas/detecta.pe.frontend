import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-video',
  standalone: false,
  templateUrl: './home-video.component.html',
  styleUrl: './home-video.component.scss'
})
export class HomeVideoComponent {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  isPlaying = false;

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

  toggleVideo() {
    const v = this.bgVideo.nativeElement;
    if (v.paused) v.play().then(() => this.isPlaying = true);
    else { v.pause(); this.isPlaying = false; }
  }
}
