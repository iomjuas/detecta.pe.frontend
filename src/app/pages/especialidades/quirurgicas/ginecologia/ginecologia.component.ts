import { Component } from '@angular/core';
import { FeatureSectionConfig } from '../../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-ginecologia',
  standalone: false,
  templateUrl: './ginecologia.component.html',
  styleUrl: './ginecologia.component.scss'
})
export class GinecologiaComponent {

  featureOncHeadNeck: FeatureSectionConfig = {
    background: '#f1fcff',
    media: {
      src: 'assets/img/quimio/bomba.jpg',
      alt: 'Equipo quirúrgico',
      side: 'right',
    },
    eyebrow: 'Servicios y procedimientos disponibles',
    title: 'Tecnología y experiencia en cada etapa de tu tratamiento',
    copy: '',
    listCols: 2,
    groups: [
      {
        title: 'Diagnóstico',
        items: [
          'Papanicolau / citología vaginal',
          'Colposcopia con biopsia',
          'Ultrasonido transvaginal / pélvico',
          'Marcadores tumorales: CA-125, CA-19-9, HE4',
          'TAC, resonancia magnética, PET-CT para estadiaje',
          'Biopsias (endometrio, vulva, vagina)'
        ]
      },
      {
        title: 'Tratamientos quirúrgicos',
        items: [
          'Histerectomía radical (útero + estructuras vecinas)',
          'Salpingo-ooforectomía (ovarios y trompas)',
          'Cirugía de estadiaje (extirpación de ganglios, tejidos)',
          'Cirugía laparoscópica / mínimamente invasiva',
          'Cirugía reconstructiva en casos vulvovaginales'
        ]
      },
      {
        title: 'Tratamientos complementarios',
        items: [
          'Quimioterapia adyuvante',
          'Radioterapia / braquiterapia',
          'Terapias hormonales o dirigidas',
          'Tratamientos paliativos'
        ]
      },
      {
        title: 'Acompañamiento integral',
        items: [
          'Seguimiento periódico',
          'Apoyo emocional y psicológico',
          'Rehabilitación del suelo pélvico',
          'Orientación reproductiva (cuando aplica)'
        ]
      }
    ],
    cta: {
      label: 'Agenda una evaluación',
      routerLink: ['/contacto']
    }
  };
}
