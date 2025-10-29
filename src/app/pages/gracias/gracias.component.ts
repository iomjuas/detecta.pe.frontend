import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.scss'],
  standalone: false
})
export class GraciasComponent implements OnInit {
  name?: string | null;
  service?: string | null;
  ticket?: string | null;

  // si quieres mostrar un resumen enviado desde el form:
  // lo puedes pasar por state y caer aquí como fallback de query params.
  recap: any = null;

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit(): void {
    const qp = this.route.snapshot.queryParamMap;
    this.name = qp.get('name');
    this.service = qp.get('service');
    this.ticket = qp.get('ticket');

    // Título SEO
    this.title.setTitle('¡Gracias! | Detecta Clínica');

    // Si usas extras de navegación con state
    const nav = history.state || {};
    if (nav && nav.recap) this.recap = nav.recap;
  }
}
