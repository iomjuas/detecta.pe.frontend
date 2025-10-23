import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
    private readonly SUFFIX = 'Detecta Clínica Oncológica en Perú'; // <- cambia si quieres

    constructor(private readonly title: Title) {
        super();
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
        // 1) Si alguna ruta trae data.title, úsalo.
        const fromData = this.buildTitle(snapshot);
        if (fromData) {
            this.title.setTitle(`${fromData} | ${this.SUFFIX}`);
            return;
        }

        // 2) Fallback: construye desde el segmento más profundo del path o un param conocido.
        const deepest = this.getDeepest(snapshot.root);
        const nice = this.guessTitle(deepest, snapshot);
        this.title.setTitle(`${nice} | ${this.SUFFIX}`);
    }

    private getDeepest(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
        while (route.firstChild) route = route.firstChild;
        return route;
    }

    private guessTitle(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): string {
        // a) Si hay un parámetro "slug" o "id" descriptivo, úsalo (title-case).
        const paramCandidate = route.params?.['slug'] ?? route.params?.['title'] ?? route.params?.['name'];
        if (paramCandidate) return this.pretty(paramCandidate);

        // b) Toma el último segmento del URL (sin query/fragment).
        let url = snapshot.url.split('?')[0].split('#')[0];
        url = url.replace(/\/+$/, ''); // quita trailing slash
        const lastSeg = url.substring(url.lastIndexOf('/') + 1) || 'inicio';

        // c) Si el path de la route tiene placeholders (:id), intenta limpiarlos.
        const path = (route.routeConfig?.path ?? lastSeg).split('/').pop() || lastSeg;
        const cleaned = path.replace(/:.+/, '') || lastSeg;

        return this.pretty(cleaned || 'inicio');
    }

    /** "libro-de-reclamaciones" -> "Libro De Reclamaciones" */
    private pretty(raw: string): string {
        const s = raw.replace(/[-_]+/g, ' ').trim();
        return s.replace(/\p{L}+/gu, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    }
}
