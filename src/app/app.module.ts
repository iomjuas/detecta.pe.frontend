import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importa aquí TODOS tus componentes
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { CitaComponent } from './pages/cita/cita.component';
import { HomeHeroComponent } from './pages/home/home-hero/home-hero.component';
import { SafePipe } from './safe.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HomeSplitComponent } from './pages/home/home-split/home-split.component';
import { HomeServiciosComponent } from './pages/home/home-servicios/home-servicios.component';
import { HomeVideoComponent } from './pages/home/home-video/home-video.component';
import { HomeAlianzasComponent } from './pages/home/home-alianzas/home-alianzas.component';
import { HomeTestimoniosComponent } from './pages/home/home-testimonios/home-testimonios.component';
import { HomeContactoComponent } from './pages/home/home-contacto/home-contacto.component';
import { HomeAppComponent } from './pages/home/home-app/home-app.component';
import { InvestigacionComponent } from './pages/investigacion/investigacion.component';
import { InvestigacionHeroComponent } from './pages/investigacion/investigacion-hero/investigacion-hero.component';
import { InvestigacionPresentacionComponent } from './pages/investigacion/investigacion-presentacion/investigacion-presentacion.component';
import { InvestigacionRciComponent } from './pages/investigacion/investigacion-rci/investigacion-rci.component';
import { InvestigacionEquipoComponent } from './pages/investigacion/investigacion-equipo/investigacion-equipo.component';
import { InvestigacionContactoComponent } from './pages/investigacion/investigacion-contacto/investigacion-contacto.component';
import { ObservacionalesHeroComponent } from './pages/investigacion/observacionales-hero/observacionales-hero.component';
import { ObservacionalesPatroPremiosComponent } from './pages/investigacion/observacionales-patro-premios/observacionales-patro-premios.component';
import { SharedHeroMediaComponent } from './shared/shared-hero-media/shared-hero-media.component';
import { ObservacionalesPatrocinadosComponent } from './pages/investigacion/observacionales-patrocinados/observacionales-patrocinados.component';
import { SharedHeroComponent } from './shared/shared-hero/shared-hero.component';
import { QuimioterapiaComponent } from './pages/pacientes/quimioterapia/quimioterapia.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureSectionComponent } from './shared/feature-section/feature-section.component';
import { ProcessStepsComponent } from './shared/process-steps/process-steps.component';
import { FaqAccordionComponent } from './shared/faq-accordion/faq-accordion.component';
import { SalasOperacionesComponent } from './pages/pacientes/salas-operaciones/salas-operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServiciosComponent,
    AcercaComponent,
    CitaComponent,
    HomeHeroComponent,
    SafePipe,
    HomeAboutComponent,
    HomeSplitComponent,
    HomeServiciosComponent,
    HomeVideoComponent,
    HomeAlianzasComponent,
    HomeTestimoniosComponent,
    HomeContactoComponent,
    HomeAppComponent,
    InvestigacionComponent,
    InvestigacionHeroComponent,
    InvestigacionPresentacionComponent,
    InvestigacionRciComponent,
    InvestigacionEquipoComponent,
    InvestigacionContactoComponent,
    ObservacionalesHeroComponent,
    ObservacionalesPatroPremiosComponent,
    SharedHeroMediaComponent,
    ObservacionalesPatrocinadosComponent,
    SharedHeroComponent,
    QuimioterapiaComponent,
    FeatureSectionComponent,
    ProcessStepsComponent,
    FaqAccordionComponent,
    SalasOperacionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
