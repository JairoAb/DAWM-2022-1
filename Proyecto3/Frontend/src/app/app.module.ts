import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DoctorComponent } from './shared/doctor/doctor.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MedicoComponent } from './medico/medico.component';
import { CitasComponent } from './citas/citas.component';
import { CitaComponent } from './shared/cita/cita.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    HomeComponent,
    MedicosComponent,
    PerfilComponent,
    DoctorComponent,
    MedicoComponent,
    CitasComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ScrollingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
