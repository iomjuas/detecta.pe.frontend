import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-odontologia',
  standalone: false,
  templateUrl: './odontologia.component.html',
  styleUrl: './odontologia.component.scss'
})
export class OdontologiaComponent {
  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: {
      src: 'assets/img/quimio/bomba.jpg',
      alt: 'Equipo quirúrgico',
      side: 'left',
    },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Tratamientos modernos para cuidar, restaurar y transformar tu sonrisa',
    copy: '', copy2: '<br>',
    listCols: 2,
    groups: [
      {
        title: 'Diagnóstico',
        items: [
          'Radiografías panorámicas / periapicales',
          'Tomografía dental (CBCT)',
          'Fotografías intraorales',
          'Exploración clínica detallada',
          'Escaneo 3D digital'
        ]
      },
      {
        title: 'Acompañamiento integral',
        items: [
          'Higiene y profilaxis periódica',
          'Educación en salud oral',
          'Seguimientos y controles regulares'
        ]
      },
      {
        title: 'Tratamientos quirúrgicos y quirúrgicos',
        items: [
          'Endodoncia (tratamiento de conducto)',
          'Periodoncia (limpieza profunda, cirugía de encías)',
          'Extracciones simples y quirúrgicas',
          'Implantes dentales con carga inmediata',
          'Prótesis fijas/removibles y rehabilitación',
          'Ortodoncia con brackets o alineadores',
          'Cirugía oral menor (tercer molar, quistes, frenectomía)',
          'Estética dental (blanqueamientos, carillas, microcontornos)'
        ]
      },
    ],
    cta: {
      label: 'Agendar cita',
      routerLink: ['/contacto']
    }
  };
}
