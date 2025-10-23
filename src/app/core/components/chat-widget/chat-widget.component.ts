import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss'],
  standalone: false
})
export class ChatWidgetComponent {
  /** Número de WhatsApp: con código de país, sin + (p.ej., 51XXXXXXXXX) */
  @Input() phone = '51922335134';
  /** Título del cabezal */
  @Input() title = 'Detecta Clínica';
  /** Mensaje dentro del globito */
  @Input() welcome = '¡Hola! 👋 Gracias por comunicarte con Detecta Clínica. ¿En qué podemos ayudarte hoy?';
  /** Texto que irá prellenado en WhatsApp */
  @Input() preset = 'Hola, me gustaría hablar con un asesor.';

  /** Estado del panel */
  open = false;

  /** Si quieres que recuerde si lo cerraron (no volver a abrir en esta sesión) */
  private storeKey = 'chat_widget_closed';

  constructor() {
    // si lo cerraron antes en esta sesión, respeta eso
    if (sessionStorage.getItem(this.storeKey) === '1') {
      this.open = false;
    }
  }

  toggle() {
    this.open = !this.open;
    if (!this.open) {
      sessionStorage.setItem(this.storeKey, '1');
    }
  }

  close() {
    this.open = false;
    sessionStorage.setItem(this.storeKey, '1');
  }

  startChat() {
    const url = `https://wa.me/${this.phone}?text=${encodeURIComponent(this.preset)}`;
    // En móvil: abre en misma pestaña; en desktop: nueva
    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    window.open(url, isMobile ? '_self' : '_blank');
  }

  // Cierra con ESC
  @HostListener('document:keydown.escape')
  onEsc() { if (this.open) this.close(); }
}
