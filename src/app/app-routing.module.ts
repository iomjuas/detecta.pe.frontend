import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CitaComponent } from './pages/cita/cita.component';
import { InvestigacionComponent } from './pages/investigacion/investigacion.component';
import { QuimioterapiaComponent } from './pages/pacientes/quimioterapia/quimioterapia.component';
import { SalasOperacionesComponent } from './pages/pacientes/salas-operaciones/salas-operaciones.component';
import { LaboratorioAnatomiaComponent } from './pages/pacientes/laboratorio-anatomia/laboratorio-anatomia.component';
import { LaboratorioClinicoComponent } from './pages/pacientes/laboratorio-clinico/laboratorio-clinico.component';
import { HospitalizacionComponent } from './pages/pacientes/hospitalizacion/hospitalizacion.component';
import { FarmaciaComponent } from './pages/pacientes/farmacia/farmacia.component';
import { DiagnosticoImagenesComponent } from './pages/pacientes/diagnostico-imagenes/diagnostico-imagenes.component';
import { OncologiaComponent } from './pages/especialidades/oncologia/oncologia.component';
import { PediatricaComponent } from './pages/especialidades/pediatrica/pediatrica.component';
import { GastroenterologiaComponent } from './pages/especialidades/gastroenterologia/gastroenterologia.component';
import { PsicologiaOncologicaComponent } from './pages/especialidades/psicologia-oncologica/psicologia-oncologica.component';
import { HematologiaComponent } from './pages/especialidades/hematologia/hematologia.component';
import { NefrologiaComponent } from './pages/especialidades/nefrologia/nefrologia.component';
import { EndocrinologiaComponent } from './pages/especialidades/endocrinologia/endocrinologia.component';
import { GeriatriaComponent } from './pages/especialidades/geriatria/geriatria.component';
import { CirujiaOncologicaComponent } from './pages/especialidades/quirurgicas/cirujia-oncologica/cirujia-oncologica.component';
import { UrologiaComponent } from './pages/especialidades/quirurgicas/urologia/urologia.component';
import { GinecologiaComponent } from './pages/especialidades/quirurgicas/ginecologia/ginecologia.component';
import { MastologiaComponent } from './pages/especialidades/quirurgicas/mastologia/mastologia.component';
import { TraumatologiaComponent } from './pages/especialidades/quirurgicas/traumatologia/traumatologia.component';
import { OtorrinolaringologiaComponent } from './pages/especialidades/quirurgicas/otorrinolaringologia/otorrinolaringologia.component';
import { OdontologiaComponent } from './pages/especialidades/quirurgicas/odontologia/odontologia.component';
import { NeurocirugiaComponent } from './pages/especialidades/quirurgicas/neurocirugia/neurocirugia.component';
import { MedicinaIntensivaComponent } from './pages/especialidades/quirurgicas/medicina-intensiva/medicina-intensiva.component';
import { CirugiaPlasticaComponent } from './pages/especialidades/quirurgicas/cirugia-plastica/cirugia-plastica.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';
import { PoliticasDePrivacidadComponent } from './pages/politicas-de-privacidad/politicas-de-privacidad.component';
import { LibroReclamacionesComponent } from './pages/libro-reclamaciones/libro-reclamaciones.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { StaffMedicoComponent } from './pages/staff-medico/staff-medico.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Inicio' } },

  { path: 'investigacion', component: InvestigacionComponent, data: { title: 'Investigación' } },

  // Servicios principales
  { path: 'quimioterapia', component: QuimioterapiaComponent, data: { title: 'Quimioterapia' } },
  { path: 'laboratorio-de-anatomia-patologica', component: LaboratorioAnatomiaComponent, data: { title: 'Laboratorio de Anatomía Patológica' } },
  { path: 'laboratorio-clinico', component: LaboratorioClinicoComponent, data: { title: 'Laboratorio Clínico' } },
  { path: 'hospitalizacion', component: HospitalizacionComponent, data: { title: 'Hospitalización' } },
  { path: 'farmacia', component: FarmaciaComponent, data: { title: 'Farmacia' } },
  { path: 'salas-de-operaciones', component: SalasOperacionesComponent, data: { title: 'Salas de Operaciones' } },
  { path: 'diagnostico-por-imagenes', component: DiagnosticoImagenesComponent, data: { title: 'Diagnóstico por Imágenes' } },

  // Especialidades médicas
  { path: 'oncologia-medica', component: OncologiaComponent, data: { title: 'Oncología Médica' } },
  { path: 'oncologia-pediatrica', component: PediatricaComponent, data: { title: 'Oncología Pediátrica' } },
  { path: 'gastroenterologia', component: GastroenterologiaComponent, data: { title: 'Gastroenterología' } },
  { path: 'psicologia-oncologica', component: PsicologiaOncologicaComponent, data: { title: 'Psicología Oncológica' } },
  { path: 'hematologia', component: HematologiaComponent, data: { title: 'Hematología' } },
  { path: 'nefrologia', component: NefrologiaComponent, data: { title: 'Nefrología' } },
  { path: 'endocrinologia', component: EndocrinologiaComponent, data: { title: 'Endocrinología' } },
  { path: 'geriatria', component: GeriatriaComponent, data: { title: 'Geriatría' } },
  { path: 'cirugia-oncologica-de-cabeza-y-cuello', component: CirujiaOncologicaComponent, data: { title: 'Cirugía Oncológica de Cabeza y Cuello' } },
  { path: 'urologia-oncologica', component: UrologiaComponent, data: { title: 'Urología Oncológica' } },
  { path: 'ginecologia-oncologica', component: GinecologiaComponent, data: { title: 'Ginecología Oncológica' } },
  { path: 'mastologia-y-ginecologia-oncologica', component: MastologiaComponent, data: { title: 'Mastología y Ginecología Oncológica' } },
  { path: 'traumatologia', component: TraumatologiaComponent, data: { title: 'Traumatología' } },
  { path: 'otorrinolaringologia', component: OtorrinolaringologiaComponent, data: { title: 'Otorrinolaringología' } },
  { path: 'odontologia', component: OdontologiaComponent, data: { title: 'Odontología' } },
  { path: 'neurocirugia', component: NeurocirugiaComponent, data: { title: 'Neurocirugía' } },
  { path: 'medicina-intensiva', component: MedicinaIntensivaComponent, data: { title: 'Medicina Intensiva' } },
  { path: 'cirugia-plastica', component: CirugiaPlasticaComponent, data: { title: 'Cirugía Plástica' } },

  // Páginas generales
  { path: 'servicios', component: ServiciosComponent, data: { title: 'Servicios' } },
  { path: 'nosotros', component: NosotrosComponent, data: { title: 'Nosotros' } },
  { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto' } },

  // Legales
  { path: 'terminos-y-condiciones', component: TerminosCondicionesComponent, data: { title: 'Términos y Condiciones' } },
  { path: 'politicas-de-privacidad', component: PoliticasDePrivacidadComponent, data: { title: 'Política de Privacidad' } },

  // Otros
  { path: 'libro-de-reclamaciones', component: LibroReclamacionesComponent, data: { title: 'Libro de Reclamaciones' } },
  // { path: 'reservar-cita', component: CitaComponent, data: { title: 'Reservar Cita' } },
  { path: 'gracias', component: GraciasComponent, data: { title: 'Agradecimiento' } },
  { path: 'nuestros-medicos', component: StaffMedicoComponent, data: { title: 'Nuestros Médicos' } },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
