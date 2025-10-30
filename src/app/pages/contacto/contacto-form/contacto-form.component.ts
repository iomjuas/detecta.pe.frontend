import { Component, HostListener, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
import localeEs from '@angular/common/locales/es';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { PreloaderService } from '../../../core/preloader.service';

type CalDay = { date: Date; currentMonth: boolean; disabled: boolean };

@Component({
  selector: 'app-contacto-form',
  standalone: false,
  templateUrl: './contacto-form.component.html',
  styleUrl: './contacto-form.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, DatePipe],
})
export class ContactoFormComponent implements OnInit {
  // ====== Formulario
  form!: any;        // <- se define, pero se inicializa en el constructor
  submitted = false;
  success = false;
  specialties: string[] = [
    // Especialidades
    'Oncología Médica',
    'Oncología Pediátrica',
    'Gastroenterología',
    'Psicología Oncológica',
    'Hematología',
    'Nefrología',
    'Endocrinología',
    'Geriatría',
    'Cirugía Oncológica de Cabeza y Cuello',
    'Urología Oncológica',
    'Ginecología Oncológica',
    'Mastología y Ginecología Oncológica',
    'Traumatología',
    'Otorrinolaringología',
    'Odontología',
    'Neurocirugía',
    'Medicina Intensiva',
    'Cirugía Plástica',

    // Servicios
    'Diagnóstico por Imágenes',
    'Anatomía Patológica',
    'Farmacia',
    'Quimioterapia',
    'Hospitalización',
    'Laboratorio Clínico',
    'Salas de Operaciones'
  ].sort();

  // ====== Calendario
  weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  view = new Date();
  monthLabel = '';
  calendarDays: CalDay[] = [];
  selectedDate?: Date;
  selectedTime?: string;
  timeSlots: string[] = [];

  // ====== Reglas de agenda
  /** Fechas bloqueadas (feriados / mantenimiento) en formato YYYY-MM-DD */
  blockedDates = new Set<string>([
    // ejemplos:
    // '2025-12-25', '2025-01-01'
  ]);
  /** Días de la semana bloqueados: 0=Dom,...6=Sáb (ej: cerrar domingos) */
  closedWeekdays = new Set<number>([0]);

  /** Config por especialidad (inicio, fin y paso en minutos) */
  specialtyConfig: Record<string, { start: string; end: string; step: number }> = {
    'Oncología': { start: '08:30', end: '17:30', step: 30 },
    'Neurocirugía': { start: '10:00', end: '16:00', step: 60 },
    'Diagnóstico por Imágenes': { start: '07:30', end: '19:00', step: 30 },
    'Anatomía Patológica': { start: '09:00', end: '15:00', step: 30 },
    'Farmacia': { start: '09:00', end: '18:00', step: 30 },
    '': { start: '09:00', end: '18:00', step: 30 } // default
  };

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private preloader: PreloaderService) {
    // <-- aquí se inicializa, ya existe this.fb
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      reason: [''],
      specialty: [''],
      message: [''],
      terms: [false, Validators.requiredTrue]
    });

    this.buildCalendar(); // seguro: el form ya existe
  }

  private readonly WHATSAPP_NUMBER = '51922335134';

  ngOnInit(): void {
    // Si cambian la especialidad, recomputa los slots del día seleccionado
    this.form.get('specialty')!.valueChanges.subscribe(() => {
      if (this.selectedDate) this.timeSlots = this.generateSlots(this.selectedDate);
    });
  }
  isMobile: boolean = window.innerWidth < 768; // Determina si es móvil o PC

  // Listener para actualizar la imagen al cambiar el tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.updateImageForDevice(width);
  }

  // Función para actualizar la imagen dependiendo del tamaño de la pantalla
  updateImageForDevice(width: number): void {
    this.isMobile = width < 768;
  }

  // ====== Calendario ======
  buildCalendar() {
    const y = this.view.getFullYear();
    const m = this.view.getMonth();
    this.monthLabel = new Date(y, m, 1).toLocaleDateString('es-PE', { month: 'long', year: 'numeric' });

    const first = new Date(y, m, 1);
    const start = new Date(first);
    const startDay = (first.getDay() + 6) % 7; // L=0..D=6
    start.setDate(first.getDate() - startDay);

    this.calendarDays = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(start); d.setDate(start.getDate() + i);
      const currentMonth = d.getMonth() === m;
      const disabled = this.isPast(d) || this.isClosed(d) || this.isBlocked(d);
      this.calendarDays.push({ date: d, currentMonth, disabled });
    }
  }

  isPast(d: Date) {
    const t = new Date(); t.setHours(0, 0, 0, 0);
    const dd = new Date(d); dd.setHours(0, 0, 0, 0);
    return dd < t;
  }
  isClosed(d: Date) { return this.closedWeekdays.has(d.getDay()); }
  isBlocked(d: Date) {
    const id = d.toISOString().slice(0, 10); // YYYY-MM-DD
    return this.blockedDates.has(id);
  }

  canPrevMonth() {
    // No permitir navegar a meses completamente pasados
    const prev = new Date(this.view.getFullYear(), this.view.getMonth() - 1, 1);
    // mientras quede algún día no pasado en el mes anterior, permitimos
    return prev.getFullYear() > new Date().getFullYear() ||
      (prev.getFullYear() === new Date().getFullYear() && prev.getMonth() >= new Date().getMonth() - 1);
  }

  prevMonth() { if (this.canPrevMonth()) { this.view.setMonth(this.view.getMonth() - 1); this.buildCalendar(); } }
  nextMonth() { this.view.setMonth(this.view.getMonth() + 1); this.buildCalendar(); }

  isSelectedDate(d: Date) {
    return !!this.selectedDate && d.toDateString() === this.selectedDate.toDateString();
  }

  selectDate(day: CalDay) {
    if (day.disabled) return;
    this.selectedDate = new Date(day.date);
    this.selectedTime = undefined;
    this.timeSlots = this.generateSlots(this.selectedDate);
  }

  // ====== Slots por especialidad ======
  private getSpecCfg() {
    const spec = this.form.get('specialty')!.value || '';
    return this.specialtyConfig[spec] ?? this.specialtyConfig[''];
  }

  private hhmmToDate(base: Date, hhmm: string) {
    const [h, m] = hhmm.split(':').map(Number);
    const d = new Date(base); d.setHours(h, m, 0, 0);
    return d;
  }

  generateSlots(d: Date) {
    const cfg = this.getSpecCfg();
    const start = this.hhmmToDate(d, cfg.start);
    const end = this.hhmmToDate(d, cfg.end);
    const stepMs = cfg.step * 60 * 1000;

    const now = new Date();
    const slots: string[] = [];

    for (let t = +start; t <= +end; t += stepMs) {
      const cur = new Date(t);
      const label = cur.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
      const isPastToday = d.toDateString() === now.toDateString() && cur <= now;
      if (!isPastToday) slots.push(label);
    }
    return slots;
  }

  selectTime(t: string) {
    if (!this.selectedDate) return;
    this.selectedTime = t;
  }

  // ===== Helpers =====
  private fmtDate(d: Date) {
    return d.toLocaleDateString('es-PE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  }
  private orDash(v: any) { return (v ?? '').toString().trim() || '—'; }

  /** Genera el texto bonito para WhatsApp */
  private buildWhatsAppMessage(payload: any) {
    // const fecha = this.selectedDate ? this.fmtDate(this.selectedDate) : '—';
    // const hora = this.selectedTime ?? '—';

    // Ajusta aquí el encabezado o firma si quieres
    const lines = [
      '*Solicitud de Cita — Detecta Clínica*',
      '',
      'Hola, quiero *agendar una cita*. Estos son mis datos:',
      '',
      '*👤 Datos del paciente*',
      `• Nombre: ${this.orDash(payload.name)}`,
      `• Email: ${this.orDash(payload.email)}`,
      `• Teléfono: ${this.orDash(payload.phone)}`,
      '',
      '*🏥 Especialidad/Servicio*',
      `• Especialidad: ${this.orDash(payload.specialty)}`,
      `• Motivo: ${this.orDash(payload.reason)}`,
      '',
      // '*🗓️ Preferencia de cita*',
      // `• Fecha: ${fecha}`,
      // `• Hora: ${hora}`,
      // '',
      '*📝 Comentarios*',
      `${this.orDash(payload.message)}`,
      '',
      'Gracias 🙌'
    ];

    return lines.join('\n');
  }

  /** Abre WhatsApp con mensaje */
  private openWhatsApp(message: string) {
    const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    // abre en nueva pestaña (mejor UX desde un sitio)
    window.open(url, '_blank');
  }

  submit() {
    this.submitted = true;

    // Permite enviar incluso si no eligió fecha/hora (se muestra — en el mensaje)
    // if (!this.termsOpened) {
    //   // muestra aviso: abre y lee la política primero
    //   Swal.fire({ icon: 'info', title: 'Por favor, revisa la Política de Privacidad', confirmButtonText: 'OK' });
    //   return;
    // }
    if (this.form.invalid) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Completar Formulario',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 1800,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      return;
    };
    // const validDateTime = !!this.selectedDate && !!this.selectedTime;
    // if (this.form.invalid || !validDateTime) {
    //   Swal.fire({
    //     toast: true,
    //     position: 'top-end',
    //     icon: 'warning',
    //     title: 'Seleccionar fecha y hora',
    //     showConfirmButton: false,
    //     showCloseButton: true,
    //     timer: 1800,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer);
    //       toast.addEventListener('mouseleave', Swal.resumeTimer);
    //     }
    //   });
    //   return;
    // }

    this.preloader.show();
    const payload = { ...this.form.value };
    // 1) HTML para el equipo Detecta (interno)
    const htmlAdmin = this.buildClinicEmail(payload);

    // 2) HTML para el paciente (acuse)
    const htmlClient = this.buildClientEmail(payload);

    this.api.sendEmail({
      to: 'informes@detecta.pe',
      // bcc: payload.email || undefined,       // opcional: copia al paciente
      subject: 'Nueva solicitud de contacto — Detecta Clínica',
      html: htmlAdmin
    }).subscribe({
      next: () => {
        // 4) (Opcional) enviar acuse al paciente con otro subject
        if (payload.email) {
          this.api.sendEmail({
            to: payload.email,
            subject: 'Hemos recibido tu solicitud — Detecta Clínica',
            html: htmlClient
          }).subscribe({ complete: () => { } });
        }
        this.preloader.hide()

        // limpiar UI y redirigir
        this.form.reset({ terms: false, specialty: '' });
        this.selectedDate = undefined;
        this.selectedTime = undefined;
        this.timeSlots = [];
        this.success = false;
        this.router.navigateByUrl('/gracias', { replaceUrl: true });
      },
      error: (err) => {
        console.error('Error sending email', err);
        this.success = false;
      }
    });

    // 1) Construye el mensaje lindo
    // const message = this.buildWhatsAppMessage(payload);

    // 2) Abre WhatsApp con el texto
    // this.openWhatsApp(message);

    // 3) (Opcional) muestra feedback en UI
    // 4) Limpia form/estado
  }
  termsOpened = false;

  openPrivacyAndMark() {
    // this.openPrivacy();
    this.termsOpened = true;
  }

  openPrivacy() {
    Swal.fire({
      title: 'Política de Privacidad',
      html: `
        <div class="modal-legal">
          <p><strong>DETECTA CLÍNICA S.A.C.</strong> informa el tratamiento de datos personales según la Ley N.° 29733 y su Reglamento.</p>
  
          <h3>Finalidades del tratamiento</h3>
          <ul>
            <li>Gestionar reservas de citas y atención médica.</li>
            <li>Administrar cuenta y comunicaciones.</li>
            <li>Atender consultas, reclamos o solicitudes.</li>
            <li>Evaluaciones internas de calidad y seguridad.</li>
            <li>Cumplimiento de obligaciones legales.</li>
          </ul>
  
          <h3>Derechos ARCO</h3>
          <p>Puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO), o revocar su consentimiento en:
            <br><a href="mailto:atencionalpaciente@detecta.pe">atencionalpaciente@detecta.pe</a>
            · <a href="mailto:datos@detectaclinica.com.pe">datos@detectaclinica.com.pe</a>.
          </p>
  
          <h3>Transferencias</h3>
          <p>Podremos compartir datos con proveedores, aseguradoras, clínicas asociadas y autoridades cuando la ley lo exija, bajo compromisos de confidencialidad.</p>
  
          <h3>Más información</h3>
          <p>Revise la versión completa en <a href="/politicas-de-privacidad" target="_blank" rel="noopener">Política de Privacidad</a>.</p>
        </div>
      `,
      width: '720px',
      customClass: {
        popup: 'swal-legal-popup',
        htmlContainer: 'swal-legal-body'
      },
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
      focusConfirm: false
    });
  }

  // ===== Helpers de marca Detecta =====
  private readonly DETECTA_LOGO = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/Logo-Detecta-Transparante-1.png';
  private readonly BRAND_GRADIENT = 'linear-gradient(90deg,#3ec9de,#0aaac0)';
  private readonly BRAND_COLOR = '#0aaac0'; // acento
  private readonly BADGE_BG = '#e1e04a';    // amarillo detecta que usaste en flechas

  private escape(x: any): string {
    return String(x ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private formatFecha(d?: Date) {
    if (!d) return '—';
    try {
      return d.toLocaleDateString('es-PE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    } catch { return '—'; }
  }

  private formatHora(h?: string) {
    return h || '—';
  }

  /** Correo para el EQUIPO DETECTA (interno) */
  private buildClinicEmail(v: any) {
    const logo = this.DETECTA_LOGO;
    const nombre = this.escape(v.name);
    const email = this.escape(v.email);
    const phone = this.escape(v.phone);
    const spec = this.escape(v.specialty);
    const reason = this.escape(v.reason);
    const msg = this.escape(v.message || '');

    // si reactivas agenda:
    // const fecha = this.formatFecha(this.selectedDate);
    // const hora  = this.formatHora(this.selectedTime);

    return `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8">
<title>Nueva solicitud de contacto</title>
<meta name="color-scheme" content="light only"></head>
<body style="margin:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <div style="max-width:680px;margin:28px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 10px 28px rgba(2,8,23,.08);">
    <div style="background:${this.BRAND_GRADIENT};padding:18px 22px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td align="left"><img src="${logo}" alt="Detecta Clínica" style="height:46px;display:block"></td>
          <td align="right">
            <span style="display:inline-block;padding:6px 10px;border-radius:999px;background:${this.BADGE_BG};color:#141414;font-weight:700;font-size:12px;letter-spacing:.04em">
              Nueva solicitud
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div style="padding:26px 26px 8px">
      <h1 style="margin:0 0 8px;font-size:20px;color:#0b2530">Datos del contacto</h1>
      <p style="margin:0 0 18px;color:#334155">Un usuario ha enviado el formulario de <b>Contacto</b> desde la web.</p>

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
        <tr>
          <th align="left" style="padding:10px;background:#f8fafc;width:32%;font-size:13px;color:#334155">Nombre</th>
          <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px">${nombre || '—'}</td>
        </tr>
        <tr>
          <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Email</th>
          <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px"><a href="mailto:${email}" style="color:${this.BRAND_COLOR};text-decoration:none">${email || '—'}</a></td>
        </tr>
        <tr>
          <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Teléfono</th>
          <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px"><a href="https://wa.me/${this.WHATSAPP_NUMBER}" style="color:${this.BRAND_COLOR};text-decoration:none">${phone || '—'}</a></td>
        </tr>
        <tr>
          <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Especialidad / Servicio</th>
          <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px">${spec || '—'}</td>
        </tr>
        <tr>
          <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Motivo</th>
          <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px">${reason || '—'}</td>
        </tr>
        <tr>
          <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Mensaje</th>
          <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px;line-height:1.6">${msg || '—'}</td>
        </tr>
      </table>

      <div style="margin:22px 0 6px;text-align:center">
        <a href="https://api.whatsapp.com/send?phone=${this.WHATSAPP_NUMBER}&text=${encodeURIComponent('Hola, soy ' + (nombre || 'un paciente') + ' y deseo agendar.')} " 
           target="_blank" 
           style="display:inline-block;padding:12px 22px;border-radius:10px;background:${this.BRAND_GRADIENT};color:#fff;text-decoration:none;font-weight:700;box-shadow:0 6px 20px rgba(14,170,192,.25)">
           Contactar por WhatsApp
        </a>
      </div>
    </div>

    <div style="background:#f1f5f9;text-align:center;padding:14px 10px;font-size:12px;color:#64748b">
      © ${new Date().getFullYear()} Detecta Clínica
    </div>
  </div>
</body></html>`;
  }

  /** Acuse para el CLIENTE (externo) */
  private buildClientEmail(v: any) {
    const logo = this.DETECTA_LOGO;
    const nombre = this.escape(v.name || 'Paciente');
    const email = this.escape(v.email);
    const phone = this.escape(v.phone);
    const spec = this.escape(v.specialty);
    const reason = this.escape(v.reason);
    const msg = this.escape(v.message || '');

    return `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8">
<title>Hemos recibido tu solicitud</title>
<meta name="color-scheme" content="light only"></head>
<body style="margin:0;background:#f6f9fc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <div style="max-width:680px;margin:28px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 10px 28px rgba(2,8,23,.08);">
    <div style="background:${this.BRAND_GRADIENT};padding:22px;text-align:center">
      <img src="${logo}" alt="Detecta Clínica" style="height:52px;display:inline-block" />
    </div>

    <div style="padding:28px 26px 10px;line-height:1.65">
      <h1 style="margin:0 0 8px;font-size:21px;color:#0b2530">¡Gracias, ${nombre}!</h1>
      <p style="margin:0 0 12px;color:#334155">Hemos recibido tu solicitud y uno de nuestros asesores se pondrá en contacto contigo.</p>

      <div style="margin:16px 0;padding:14px;border:1px solid #e7eef6;border-radius:12px;background:#fbfdff">
        <p style="margin:0 0 4px;font-weight:700;color:#0b2530">Resumen:</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 0;width:32%;color:#475569">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:${this.BRAND_COLOR};text-decoration:none">${email || '—'}</a></td></tr>
          <tr><td style="padding:6px 0;color:#475569">Teléfono</td><td style="padding:6px 0">${phone || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#475569">Especialidad</td><td style="padding:6px 0">${spec || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#475569">Motivo</td><td style="padding:6px 0">${reason || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#475569">Mensaje</td><td style="padding:6px 0">${msg || '—'}</td></tr>
        </table>
      </div>

      <div style="text-align:center;margin:20px 0 8px">
        <a href="https://wa.me/${this.WHATSAPP_NUMBER}" target="_blank"
           style="display:inline-block;padding:12px 22px;border-radius:10px;background:${this.BRAND_GRADIENT};color:#fff;text-decoration:none;font-weight:700;box-shadow:0 6px 20px rgba(14,170,192,.25)">
           Escribir por WhatsApp
        </a>
      </div>

      <p style="margin:16px 0 0;color:#64748b;font-size:12px">
        Si este mensaje no fue solicitado por ti, ignóralo. Protegemos tus datos conforme a la Ley N.º 29733.
      </p>
    </div>

    <div style="background:#f1f5f9;text-align:center;padding:14px 10px;font-size:12px;color:#64748b">
      © ${new Date().getFullYear()} Detecta Clínica
    </div>
  </div>
</body></html>`;
  }

  // <!-- Si activas agenda: --!>
  // <tr>
  //   <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Fecha preferida</th>
  //   <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px">${fecha}</td>
  // </tr>
  // <tr>
  //   <th align="left" style="padding:10px;background:#f8fafc;font-size:13px;color:#334155">Hora preferida</th>
  //   <td style="padding:10px;border-bottom:1px solid #eef2f7;font-size:14px">${hora}</td>
  // </tr>
}