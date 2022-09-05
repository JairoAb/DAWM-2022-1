import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medico/medico.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CitasComponent } from './citas/citas.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "medicos", component: MedicosComponent },
  { path: "medico", component: MedicoComponent },
  { path: "citas", component: CitasComponent },
  { path: "**", redirectTo: "splash" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
