import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-contacto',
  standalone: false,
  templateUrl: './home-contacto.component.html',
  styleUrl: './home-contacto.component.scss'
})
export class HomeContactoComponent implements AfterViewInit {
  @ViewChild('bgVideo', { static: true }) bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const v = this.bgVideo.nativeElement;

    // cinturón y tirantes para Safari/iOS
    v.muted = true;
    (v as any).defaultMuted = true;
    (v as any).playsInline = true;
    (v as any).webkitPlaysInline = true;

    const tryPlay = () => v.play().catch(() => {/* silencio: política de autoplay */ });

    if (v.readyState >= 3) {
      // HAVE_FUTURE_DATA: ya tiene datos para comenzar
      tryPlay();
    } else {
      v.addEventListener('canplay', tryPlay, { once: true });
      v.load(); // asegura que comience a cargar
    }

    // cuando vuelve del background
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) tryPlay();
    }, { passive: true });
  }
}
