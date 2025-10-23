import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

type Opt = { value: string; label: string };
type Ubigeo = {
  dpto: string;
  prov: string;
  dist: string[];
};

@Component({
  selector: 'app-libro-reclamaciones',
  templateUrl: './libro-reclamaciones.component.html',
  styleUrls: ['./libro-reclamaciones.component.scss'],
  standalone: false
})
export class LibroReclamacionesComponent {
  heroImg = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Identificación del reclamante
      docType: ['', Validators.required],
      docNumber: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      sexo: [''],
      dpto: ['', Validators.required],
      prov: ['', Validators.required],
      dist: ['', Validators.required],
      address: ['', Validators.required],
      reference: [''],

      // Servicio contratado
      tipo: ['reclamo', Validators.required], // reclamo | queja
      servicio: ['', Validators.required],

      // Detalle
      descripcion: ['', [Validators.required, Validators.minLength(12)]],
      acepta: [false, Validators.requiredTrue],
    });
  }

  form!: FormGroup;
  submitted = false;
  success = false;

  // Catálogos
  docTypes: Opt[] = [
    { value: 'dni', label: 'DNI' },
    { value: 'ce', label: 'Carné de Extranjería' },
    { value: 'pas', label: 'Pasaporte' },
    { value: 'ruc', label: 'RUC' },
  ];
  sexOptions: Opt[] = [
    { value: 'f', label: 'Femenino' },
    { value: 'm', label: 'Masculino' },
    { value: 'x', label: 'Otro / Prefiero no decirlo' },
  ];
  servicios: Opt[] = [
    { value: 'oncologia', label: 'Oncología' },
    { value: 'neurocirugia', label: 'Neurocirugía' },
    { value: 'imagen', label: 'Diagnóstico por Imágenes' },
    { value: 'laboratorio', label: 'Laboratorio Clínico' },
    { value: 'hospitalizacion', label: 'Hospitalización' },
    { value: 'farmacia', label: 'Farmacia' },
    { value: 'otros', label: 'Otros' },
  ];

  // Ubigeo simplificado de ejemplo (reemplaza por tu fuente real)
  ubigeo: Ubigeo[] = [
    { dpto: 'Lima', prov: 'Lima', dist: ['Surquillo', 'San Borja', 'Miraflores', 'Santiago de Surco'] },
    { dpto: 'Lima', prov: 'Callao', dist: ['Bellavista', 'La Perla', 'La Punta'] },
    { dpto: 'Cusco', prov: 'Cusco', dist: ['Cusco', 'San Sebastián', 'San Jerónimo'] },
  ];
  dptos = Array.from(new Set(this.ubigeo.map(u => u.dpto)));
  provs: string[] = [];
  dists: string[] = [];

  onDptoChange() {
    const dpto = this.form.value.dpto;
    this.provs = Array.from(new Set(this.ubigeo.filter(u => u.dpto === dpto).map(u => u.prov)));
    this.form.patchValue({ prov: '', dist: '' });
    this.dists = [];
  }
  onProvChange() {
    const { dpto, prov } = this.form.value;
    this.dists = this.ubigeo.find(u => u.dpto === dpto && u.prov === prov)?.dist ?? [];
    this.form.patchValue({ dist: '' });
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) return;

    // Aquí envías al backend
    // const payload = this.form.value;

    this.success = true;
    this.form.reset({ tipo: 'reclamo', acepta: false });
    this.submitted = false;
    this.provs = [];
    this.dists = [];
  }
}
