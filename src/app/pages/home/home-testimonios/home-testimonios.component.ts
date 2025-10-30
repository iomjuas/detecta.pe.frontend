import { Component, HostListener, OnInit } from '@angular/core';

interface Testimonial {
  title: string;
  text: string;
  author: string;
  meta?: string;
}

@Component({
  selector: 'app-home-testimonios',
  standalone: false,
  templateUrl: './home-testimonios.component.html',
  styleUrl: './home-testimonios.component.scss'
})
export class HomeTestimoniosComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      title: 'Pacientes reales, historias reales',
      text: 'Viajé desde Piura con miedo y muchas dudas. El Dr. Gastón Mendoza de Lama me explicó cada paso con calma y palabras sencillas. Hoy sigo en control y sé que estoy en buenas manos.',
      author: 'Carla Ramos', meta: '48 años'
    },
    {
      title: 'No es solo medicina, es cuidado real.',
      text: 'Cuando diagnosticaron a mi esposa con cáncer sentí que el mundo se derrumbaba. El Dr. Víctor Castro nos recibió como familia, nos dio claridad y esperanza. Ahora mi esposa está estable y seguimos con el seguimiento necesario. No nos sentimos solos.',
      author: 'Luis Pérez', meta: '50 años'
    },
    {
      title: 'Claridad en cada consulta.',
      text: 'Estoy muy contenta que me hayan sugerido esta clínica, los médicos son muy acertados y el trato al paciente es muy humano, excelente! La recomiendo',
      author: 'Ingrid Elke Sommerfeld', meta: '51 años'
    },
    {
      title: 'Equipo cercano y humano.',
      text: 'Me diagnosticaron y operaron de cáncer de mama con el Dr. Mendoza Lamas Gastón. La hospitalización fue A1: exámenes e imágenes rápidos y de alta calidad. El radiólogo fue muy profesional y claro. Agendé por teléfono sin problemas. Recomiendo 100% al Dr. Mendoza: excelente médico, profesional y humano. Gracias por tanto.',
      author: 'Marlyn La Roche', meta: '45 años'
    },
    // {
    //   title: 'Claridad en cada consulta.',
    //   text: 'Cuando diagnosticaron a mi esposa, el Dr. Víctor Castro nos dio claridad y esperanza. Seguimos con el seguimiento necesario y no nos sentimos solos.',
    //   author: 'Andrea Gómez', meta: '39 años'
    // },
    // {
    //   title: 'Equipo cercano y humano.',
    //   text: 'Cuando diagnosticaron a mi esposa, el Dr. Víctor Castro nos dio claridad y esperanza. Seguimos con el seguimiento necesario y no nos sentimos solos.',
    //   author: 'Héctor Valdivia', meta: '46 años'
    // }
  ];

  slideGroups: Testimonial[][] = [];
  itemsPerSlide = 3; // xl

  ngOnInit(): void {
    this.updateItemsPerSlide();
    this.groupTestimonials();
  }

  @HostListener('window:resize')
  onResize() {
    const prev = this.itemsPerSlide;
    this.updateItemsPerSlide();
    if (prev !== this.itemsPerSlide) this.groupTestimonials();
  }

  private updateItemsPerSlide() {
    const w = window.innerWidth;
    if (w >= 1200) this.itemsPerSlide = 3;        // ≥ xl
    else if (w >= 992) this.itemsPerSlide = 2;    // ≥ lg
    else this.itemsPerSlide = 1;                  // móvil / tablet chica
  }

  private groupTestimonials() {
    const out: Testimonial[][] = [];
    for (let i = 0; i < this.testimonials.length; i += this.itemsPerSlide) {
      out.push(this.testimonials.slice(i, i + this.itemsPerSlide));
    }
    this.slideGroups = out;
  }
}