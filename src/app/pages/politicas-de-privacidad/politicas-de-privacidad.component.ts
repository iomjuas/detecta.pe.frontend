import { Component } from '@angular/core';

@Component({
  selector: 'app-politicas-de-privacidad',
  templateUrl: './politicas-de-privacidad.component.html',
  styleUrls: ['./politicas-de-privacidad.component.scss'],
  standalone: false
})
export class PoliticasDePrivacidadComponent {
  heroImg = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop';

  toc = [
    { id: 'identificacion', label: 'Identificación del Responsable' },
    { id: 'objeto', label: 'Objeto' },
    { id: 'definiciones', label: 'Definiciones' },
    { id: 'alcance', label: 'Alcance' },
    { id: 'principios', label: 'Principios Rectores' },
    { id: 'almacenamiento', label: 'Almacenamiento' },
    { id: 'consentimiento', label: 'Consentimiento y Consecuencias' },
    { id: 'usos', label: 'Uso Autorizado de los Datos' },
    { id: 'transferencias', label: 'Transferencias' },
    { id: 'plazo', label: 'Plazo de Conservación' },
    { id: 'comunicaciones', label: 'Comunicaciones Comerciales' },
    { id: 'videovigilancia', label: 'Videovigilancia' },
    { id: 'menores', label: 'Datos de Menores' },
    { id: 'sensibles', label: 'Datos Sensibles' },
    { id: 'confidencialidad', label: 'Confidencialidad' },
    { id: 'arco', label: 'Derechos ARCO' },
    { id: 'derechos', label: 'Derechos de los Titulares' },
    { id: 'procedimiento', label: 'Procedimiento para Ejercer Derechos' },
    { id: 'facultados', label: 'Personas Facultadas' },
    { id: 'canales', label: 'Canales para Ejercer Derechos' },
    { id: 'responsable', label: 'Responsable de Cumplimiento' },
    { id: 'modificaciones', label: 'Modificaciones' },
  ];
}