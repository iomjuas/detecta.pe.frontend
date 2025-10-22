import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'investigacion', component: InvestigacionComponent },
  { path: 'quimioterapia', component: QuimioterapiaComponent },
  { path: 'laboratorio-de-anatomia-patologica', component: LaboratorioAnatomiaComponent },
  { path: 'laboratorio-clinico', component: LaboratorioClinicoComponent },
  { path: 'hospitalizacion', component: HospitalizacionComponent },
  { path: 'farmacia', component: FarmaciaComponent },
  { path: 'salas-de-operaciones', component: SalasOperacionesComponent },
  { path: 'diagnostico-por-imagenes', component: DiagnosticoImagenesComponent },
  { path: 'oncologia-medica', component: OncologiaComponent },
  { path: 'oncologia-pediatrica', component: PediatricaComponent },
  { path: 'gastroenterologia', component: GastroenterologiaComponent },
  { path: 'psicologia-oncologica', component: PsicologiaOncologicaComponent },
  { path: 'hematologia', component: HematologiaComponent },
  { path: 'nefrologia', component: NefrologiaComponent },
  { path: 'endocrinologia', component: EndocrinologiaComponent },
  { path: 'geriatria', component: GeriatriaComponent },
  { path: 'cirugia-oncologica-de-cabeza-y-cuello', component: CirujiaOncologicaComponent },
  { path: 'urologia-oncologica', component: UrologiaComponent },
  { path: 'ginecologia-oncologica', component: GinecologiaComponent },
  { path: 'mastologia-y-ginecologia-oncologica', component: MastologiaComponent },
  { path: 'traumatologia', component: TraumatologiaComponent },
  { path: 'otorrinolaringologia', component: OtorrinolaringologiaComponent },
  { path: 'odontologia', component: OdontologiaComponent },
  { path: 'neurocirugia', component: NeurocirugiaComponent },
  { path: 'medicina-intensiva', component: MedicinaIntensivaComponent },
  { path: 'cirugia-plastica', component: CirugiaPlasticaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'reservar-cita', component: CitaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
