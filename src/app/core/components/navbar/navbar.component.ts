import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent {
  scrolled = false;
  collapsed = true;
  megaOpen = false;

  isLgUp = window.innerWidth >= 992; // >= lg
  private raf = 0;
  @HostListener('window:scroll')
  onScroll() {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      this.scrolled = (window.scrollY || document.documentElement.scrollTop || 0) > 10;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isLgUp = window.innerWidth >= 992;
    if (this.isLgUp) this.collapsed = true; // mata el collapse si vuelves a desktop
  }

  toggleCollapse() { this.collapsed = !this.collapsed; }
  openMega() { this.megaOpen = true; }
  closeMega() { this.megaOpen = false; }
  toggleMega() { this.megaOpen = !this.megaOpen; }
}
