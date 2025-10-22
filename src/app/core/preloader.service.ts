import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, filter, timer } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PreloaderService {
  private _visible$ = new BehaviorSubject<boolean>(false);
  visible$: Observable<boolean> = this._visible$.asObservable();

  private router = inject(Router);
  private minDuration = 1000; // ms (ajústalo a gusto)

  constructor() {
    // Muestra el loader en cada navegación
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => {
        // Scroll arriba ni bien empieza la navegación
        try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch { window.scrollTo(0, 0); }
        this.showFor(this.minDuration);
      });

    // Por si la navegación termina antes/errores, mantenemos mínimo 2 s, luego se ocultará solo.
    this.router.events
      .pipe(filter(e => (e instanceof NavigationEnd) || (e instanceof NavigationCancel) || (e instanceof NavigationError)))
      .subscribe(() => {
        // Nada que hacer: showFor ya está corriendo su temporizador mínimo
      });
  }

  show() { this._visible$.next(true); document.documentElement.classList.add('preloader-open'); }
  hide() { this._visible$.next(false); document.documentElement.classList.remove('preloader-open'); }

  /** Muestra el loader al menos `ms` milisegundos */
  showFor(ms = 2000) {
    this.show();
    timer(ms).subscribe(() => this.hide());
  }
}
