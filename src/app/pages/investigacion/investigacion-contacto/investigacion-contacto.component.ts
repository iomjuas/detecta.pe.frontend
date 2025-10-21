import { Component } from '@angular/core';

@Component({
  selector: 'app-investigacion-contacto',
  templateUrl: './investigacion-contacto.component.html',
  styleUrls: ['./investigacion-contacto.component.scss'],
  standalone: false
})
export class InvestigacionContactoComponent {
  // Ajusta estos datos si lo necesitas
  banner = {
    img: 'assets/img/investigacion/banner-participa.jpg',
    title: 'Tu participación puede cambiar vidas',
    copy: 'Detecta Clínica agradece profundamente a cada voluntario por su compromiso con la investigación. Gracias a ustedes, nuevos tratamientos llegan a más personas y la ciencia avanza.'
  };

  phoneCentral = '01 217-5100, anexo 413';
  whatsapp = '+51 974 211 029';
  email = 'investigacion@detecta.pe';

  goParticipar() { /* routerLink en HTML; deja este hook si luego quieres tracking */ }
}
