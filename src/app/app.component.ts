import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'detecta-web';
  logoSrc = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/Logo-Detecta-Color.png';
}
