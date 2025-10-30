import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

type PacienteItem = { label: string; route: string; img: string; alt?: string; class?: string | "" };
type PacienteCategory = { key: string; label: string; items: PacienteItem[]; fallbackImg?: string };

@Component({
  selector: 'app-navbar-2',
  standalone: false,
  templateUrl: './navbar-2.component.html',
  styleUrl: './navbar-2.component.scss'
})
export class Navbar2Component implements OnInit {
  @ViewChild('megaRef') megaRef!: ElementRef<HTMLElement>;
  @ViewChild('megaToggle') megaToggle!: ElementRef<HTMLElement>;
  scrolled = false;
  collapsed = true;
  megaOpen = false;

  isLgUp = window.innerWidth >= 992; // >= lg
  private raf = 0;

  pacientesCategorias: PacienteCategory[] = [
    {
      key: 'servicios',
      label: 'Servicios',
      items: [
        { label: 'Quimioterapia', route: '/quimioterapia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Quimioterapia' },
        { label: 'Salas de Operaciones', route: '/salas-de-operaciones', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Salas de operaciones' },
        { label: 'Laboratorio de Anatomía Patológica', route: '/laboratorio-de-anatomia-patologica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Anatomía Patológica' },
        { label: 'Laboratorio Clínico', route: '/laboratorio-clinico', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Laboratorio Clínico' },
        { label: 'Hospitalización', route: '/hospitalizacion', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Hospitalización' },
        { label: 'Farmacia', route: '/farmacia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Farmacia' },
        { label: 'Diagnóstico por Imágenes', route: '/diagnostico-por-imagenes', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png', alt: 'Diagnóstico por Imágenes' }
      ],
      fallbackImg: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png'
    },
    {
      key: 'staff',
      label: 'Staff Médico',
      items: [
        { label: 'Conoce a nuestro staff', route: '/staff-medico', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/sobredetecta/Fotos-clinica-Detecta-1.jpg' }
      ],
      fallbackImg: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/sobredetecta/Fotos-clinica-Detecta-1.jpg'
    },
    {
      key: 'especialidades',
      label: 'Especialidades Médicas',
      items: [
        { label: 'Oncología Médica', route: '/oncologia-medica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Oncología Pediátrica', route: '/oncologia-pediatrica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        // { label: 'Radioterapia', route: '/cirugia-pediatrica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png'},
        { label: 'Gastroenterología', route: '/gastroenterologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Psicología Oncológica', route: '/psicologia-oncologica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        // { label: 'Reumatología', route: '/cirugia-pediatrica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png'},
        { label: 'Hematología', route: '/hematologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Nefrología', route: '/nefrologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Endocrinología', route: '/endocrinologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Geriatría', route: '/geriatria', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
      ],
      fallbackImg: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png'
    },
    {
      key: 'quirurgicas',
      label: 'Especialidades Quirúrgicas',
      items: [
        { label: 'Cirugía Oncología de Cabeza y Cuello', route: '/cirugia-oncologica-de-cabeza-y-cuello', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Urología Oncología', route: '/urologia-oncologica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Ginecología Oncología', route: '/ginecologia-oncologica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Mastología y Ginecología Oncología', route: '/mastologia-y-ginecologia-oncologica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Traumatología', route: '/traumatologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Otorrinolaringología', route: '/otorrinolaringologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Odontología', route: '/odontologia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Neurocirugía', route: '/neurocirugia', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Medicina Intensiva', route: '/medicina-intensiva', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
        { label: 'Cirugía Plástica y Reparadora', route: '/cirugia-plastica', img: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png' },
      ],
      fallbackImg: 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/mega-menu-banner-Especialidades-Detecta-1.png'
    },
    // {
    //   key: 'promos',
    //   label: 'Promociones',
    //   items: [
    //     { label: 'Rosa', route: '/promociones', img: 'https://detecta.pe/wp-content/uploads/2025/08/Banner-Promos-Detecta.png' },
    //     { label: 'Azul', route: '/promociones', img: 'https://detecta.pe/wp-content/uploads/2025/08/Banner-Promos-Detecta.png' }
    //   ],
    //   fallbackImg: 'https://detecta.pe/wp-content/uploads/2025/08/Banner-Promos-Detecta.png'
    // }
  ];

  activeCat: PacienteCategory = this.pacientesCategorias[0];
  currentPreview: PacienteItem | { img: string; alt?: string } =
    this.pacientesCategorias[0].items[0];
  showTopbar = true;

  // === control de scroll para ocultar/mostrar header
  navHidden = false;
  private lastY = 0;
  private rafScroll = 0;
  private scrollDelta = 10;      // sensibilidad mínima (px) para cambiar de estado
  private hideAfter = 80;        // no ocultar hasta pasar esta posición (px)

  ngOnInit(): void {
    // Ocultar si ya fue cerrada hoy
    try {
      const raw = localStorage.getItem('detecta_topbar_dismissed');
      if (raw) {
        const until = Number(raw);
        // this.showTopbar = Date.now() > until ? true : false;
      }
    } catch { /* no-op */ }
  }

  dismissTopbar() {
    this.showTopbar = false;
    // Recordar por 1 día (ajusta si deseas)
    const oneDayMs = 24 * 60 * 60 * 1000;
    try {
      localStorage.setItem('detecta_topbar_dismissed', String(Date.now() + oneDayMs));
    } catch { /* no-op */ }
  }
  // ====== scroll / resize
  @HostListener('window:scroll')
  onScroll() {
    cancelAnimationFrame(this.raf);
    this.rafScroll = requestAnimationFrame(() => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;

      // sigues usando tu flag de navbar con fondo
      this.scrolled = y > 10;

      const diff = y - this.lastY;

      // Evitar ocultar si hay overlays abiertos (mega o menú móvil desplegado)
      const preventHide = this.megaOpen || !this.collapsed;

      if (!preventHide && Math.abs(diff) > this.scrollDelta) {
        if (y > this.hideAfter && diff > 0) {
          // bajando
          this.navHidden = true;
        } else {
          // subiendo o cerca del top
          this.navHidden = false;
        }
        this.lastY = y;
      }

      // Al llegar al tope superior, siempre mostrar
      if (y <= 0) {
        this.navHidden = false;
        this.lastY = 0;
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isLgUp = window.innerWidth >= 992;
    if (this.isLgUp) this.collapsed = true;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    if (!this.collapsed) this.navHidden = false; // mostrar si abriste menú móvil
    if (this.collapsed === true) { this.scrolled = false; }
    if (this.collapsed === false) { this.scrolled = true; }
  }
  toggleCollapse2() {
    this.pacientesCategorias.forEach((cat, index) => {
      cat.items.forEach(item => item.class = ""); // Remueve clase active de los items
      this.openAccordions.delete(index); // Cierra todos los acordeones al abrir/cerrar el mega
    });
  }

  // ====== Mega: solo click
  toggleMega(ev?: Event) {
    ev?.stopPropagation();
    this.megaOpen = !this.megaOpen;
    if (this.megaOpen) this.navHidden = false;
  }
  openMega() { this.megaOpen = true; this.navHidden = false; }
  closeMega() { this.megaOpen = false; }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    if (!this.megaOpen) return;
    const target = ev.target as Node;

    const clickedInsideMega = this.megaRef?.nativeElement?.contains(target);
    const clickedToggle = this.megaToggle?.nativeElement?.contains(target);

    if (clickedInsideMega || clickedToggle) return; // no cerrar
    this.megaOpen = false; // cerrar solo si fue afuera
  }

  // ====== Interacciones 3 columnas
  selectCategory(cat: PacienteCategory) {
    this.activeCat = cat;
    this.currentPreview = cat.items[0] || { img: cat.fallbackImg || '', alt: cat.label };
  }
  setPreview(item: PacienteItem) {
    this.currentPreview = item;
  }
  gotoItem(item: any, i: any) {
    // al navegar, cierra el mega
    this.closeMega();
    if (i !== null) {
      this.pacientesCategorias.forEach((cat) => {
        cat.items.forEach(it => {
          it.class = (it === item) ? "active" : "";
        });
      });
    }
  }
  openAccordions: Set<number> = new Set<number>();

  // Método para alternar el estado de apertura de un acordeón
  toggleAccordion(index: number) {
    if (this.openAccordions.has(index)) {
      this.openAccordions.delete(index); // Si ya está abierto, se cierra
    } else {
      this.pacientesCategorias.forEach((cat, i) => {
        if (i !== index) {
          this.openAccordions.delete(i); // Cierra otros acordeones
        }
      });
      this.openAccordions.add(index); // Si está cerrado, se abre
    }
  }

  // Método para verificar si un acordeón está abierto
  isAccordionOpen(index: number): boolean {
    return this.openAccordions.has(index);
  }
}
