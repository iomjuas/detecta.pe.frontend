import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  year = new Date().getFullYear();

  // Si tienes rutas internas, cambia los href por routerLink
  socials = [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ];
}
