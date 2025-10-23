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
    { name: 'Facebook', href: 'https://www.facebook.com/DetectaClinica', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/detecta.clinica/?hl=es', icon: 'instagram' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@detecta_clinica.pe', icon: 'tiktok' },
    { name: 'LinkedIn', href: 'https://pe.linkedin.com/company/detecta-clinica', icon: 'linkedin' },
  ];
}
