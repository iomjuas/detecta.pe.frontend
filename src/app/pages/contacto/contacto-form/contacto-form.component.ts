import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

type CalDay = { date: Date; currentMonth: boolean; disabled: boolean };

@Component({
  selector: 'app-contacto-form',
  standalone: false,
  templateUrl: './contacto-form.component.html',
  styleUrl: './contacto-form.component.scss'
})
export class ContactoFormComponent implements OnInit {
  // ====== Formulario
  form!: any;        // <- se define, pero se inicializa en el constructor
  submitted = false;
  success = false;

  specialties = ['Oncología', 'Neurocirugía', 'Diagnóstico por Imágenes', 'Anatomía Patológica', 'Farmacia'];

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

  submit() {
    this.submitted = true;
    const validDateTime = !!this.selectedDate && !!this.selectedTime;
    if (this.form.invalid || !validDateTime) return;

    // payload listo para enviar
    const payload = {
      ...this.form.value,
      date: this.selectedDate,
      time: this.selectedTime
    };
    // TODO: POST a tu backend

    this.success = true;
    this.form.reset({ terms: false, specialty: '' });
    this.submitted = false;
    this.selectedDate = undefined;
    this.selectedTime = undefined;
    this.timeSlots = [];
  }
}