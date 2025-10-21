import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { CitaComponent } from './pages/cita/cita.component';
import { InvestigacionComponent } from './pages/investigacion/investigacion.component';
import { QuimioterapiaComponent } from './pages/pacientes/quimioterapia/quimioterapia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'investigacion', component: InvestigacionComponent },
  { path: 'quimioterapia', component: QuimioterapiaComponent },
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
