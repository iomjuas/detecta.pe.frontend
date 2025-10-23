import { Component } from '@angular/core';

type Valor = { icon: string; title: string; desc: string };
type Hito = { year: string; title: string; desc: string };
type Member = { name: string; role: string; img: string; link?: string };

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
  standalone: false
})
export class NosotrosComponent {
  // Hero
  hero = {
    eyebrow: 'Nosotros',
    title: 'La salud es nuestro compromiso. El trato humano, nuestra diferencia.',
    desc: 'Somos una clínica moderna que integra servicios complejos con una experiencia humana y cercana.'
  };

  // Misión / Visión
  mission = 'Brindar atención segura y resultados confiables con equipos de última generación y un equipo humano excepcional.';
  vision = 'Ser la clínica de referencia en soluciones oncológicas y quirúrgicas complejas en la región.';

  // Valores
  valores: Valor[] = [
    { icon: '❤️', title: 'Humanidad', desc: 'Acompañamos con empatía cada etapa del proceso.' },
    { icon: '🧪', title: 'Excelencia', desc: 'Protocolos rigurosos y mejora continua.' },
    { icon: '⚙️', title: 'Innovación', desc: 'Tecnología útil puesta al servicio del paciente.' },
    { icon: '🤝', title: 'Confianza', desc: 'Transparencia, ética y comunicación clara.' },
  ];

  // Historia / Hitos
  historia: Hito[] = [
    { year: '2019', title: 'Inicio', desc: 'Nacimos con el propósito de hacer la alta complejidad más humana.' },
    { year: '2021', title: 'Expansión Quirúrgica', desc: 'Ampliamos salas y mejoramos circuitos perioperatorios.' },
    { year: '2023', title: 'Oncología Integral', desc: 'Quimioterapia ambulatoria + farmacia especializada.' },
    { year: '2025', title: 'Diagnóstico 360°', desc: 'Ecosistema integrado de laboratorio e imagenología avanzada.' },
  ];

  // Equipo (teaser)
  team: Member[] = [
    { name: 'Dra. Andrea Quispe', role: 'Dirección Médica', img: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dr. Luis Ramírez', role: 'Neurocirugía', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dra. Sofía León', role: 'Oncología', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dr. Marco Rivera', role: 'Anestesiología', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop' },
  ];
}
