import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PerfilComponent } from './perfil/perfil.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';
import { SalirComponent } from './salir/salir.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistroComponent},
  {path:'quienSoy', component:QuienSoyComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'salir', component:SalirComponent},
  {path:'home', component:HomeComponent},
  {path:'homeUsuario', component:HomeUsuarioComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
