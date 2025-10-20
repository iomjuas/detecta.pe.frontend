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
    HomeAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
