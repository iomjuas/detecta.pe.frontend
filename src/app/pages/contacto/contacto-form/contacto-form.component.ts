import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
import localeEs from '@angular/common/locales/es';
import Swal from 'sweetalert2'

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

  constructor(private fb: FormBuilder) {
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
    const fecha = this.selectedDate ? this.fmtDate(this.selectedDate) : '—';
    const hora = this.selectedTime ?? '—';

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
      '*🗓️ Preferencia de cita*',
      `• Fecha: ${fecha}`,
      `• Hora: ${hora}`,
      '',
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
    if (!this.termsOpened) {
      // muestra aviso: abre y lee la política primero
      Swal.fire({ icon: 'info', title: 'Por favor, revisa la Política de Privacidad', confirmButtonText: 'OK' });
      return;
    }
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
    const validDateTime = !!this.selectedDate && !!this.selectedTime;
    if (this.form.invalid || !validDateTime) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Seleccionar fecha y hora',
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
    }

    const payload = {
      ...this.form.value,
      date: this.selectedDate,
      time: this.selectedTime
    };

    // 1) Construye el mensaje lindo
    const message = this.buildWhatsAppMessage(payload);

    // 2) Abre WhatsApp con el texto
    this.openWhatsApp(message);

    // 3) (Opcional) muestra feedback en UI
    this.success = true;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Formulario enviado!',
      text: 'Serás redirigido a WhatsApp para completar tu solicitud.',
      showConfirmButton: false,
      showCloseButton: true,
      timer: 1800,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    setTimeout(() => {
      this.success = false;
    }, 2000);
    // 4) Limpia form/estado
    this.form.reset({ terms: false, specialty: '' });
    this.selectedDate = undefined;
    this.selectedTime = undefined;
    this.timeSlots = [];
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
}