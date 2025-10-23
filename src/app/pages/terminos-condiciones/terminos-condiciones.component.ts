import { Component } from '@angular/core';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss'],
  standalone: false
})
export class TerminosCondicionesComponent {
  // Cambia aquí la imagen del hero si quieres
  heroImg = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop';

  // Para el índice (ids deben coincidir con los de cada <section>)
  toc = [
    { id: 'aceptacion', label: 'Aceptación de Términos' },
    { id: 'declaraciones', label: 'Declaraciones del Usuario' },
    { id: 'finalidad', label: 'Finalidad del Sitio Web' },
    { id: 'condiciones', label: 'Condiciones de Uso' },
    { id: 'cuenta', label: 'Cuenta de Usuario' },
    { id: 'disponibilidad', label: 'Disponibilidad del Servicio' },
    { id: 'reservas', label: 'Reservas y Reprogramaciones' },
    { id: 'cancelaciones', label: 'Cancelaciones y Devoluciones' },
    { id: 'responsabilidad', label: 'Límites de Responsabilidad' },
    { id: 'enlaces', label: 'Enlaces Externos' },
    { id: 'propiedad', label: 'Propiedad Intelectual' },
    { id: 'indemnidad', label: 'Indemnidad' },
    { id: 'datos', label: 'Protección de Datos Personales' },
    { id: 'ley', label: 'Ley Aplicable y Jurisdicción' },
    { id: 'modificaciones', label: 'Modificaciones' },
  ];
}
