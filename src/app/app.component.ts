import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'detecta-web';
  logoSrc = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/Logo-Detecta-Color.png';

  constructor(private router: Router, ) {
  }

  mostrarNavHome = true;

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = (event as NavigationEnd).urlAfterRedirects || event.url;
        console.log('URL actual:', url);
        if (url === '/' || url.startsWith('/gracias')) {
          this.mostrarNavHome = true;
        } else {
          this.mostrarNavHome = false;
        }
      });
  }

}
