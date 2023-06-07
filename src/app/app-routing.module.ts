import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ErrorPerfilComponent } from './Componentes/error-perfil/error-perfil.component';
import { AdministradorGuard } from './Guards/administrador.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'registro', loadChildren: () => import('./Modules/m-registro/m-registro.module').then(m => m.MRegistroModule)},
  {path: 'quienSoy', loadChildren: () => import('./Modules/m-quien-soy/m-quien-soy.module').then(m => m.MQuienSoyModule)},
  {path: 'juegos', loadChildren: () => import('./Modules/m-juegos/m-juegos.module').then(m => m.MJuegosModule)},
  {path: 'chat', loadChildren: () => import('./Modules/m-chat/m-chat.module').then(m => m.MChatModule)},
  {path: 'puntuacion', loadChildren: () => import('./Modules/m-listado/m-listado.module').then(m => m.MListadoModule)},
  {path: 'encuesta', loadChildren: () => import('./Modules/m-encuesta/m-encuesta.module').then(m => m.MEncuestaModule)},
  {path: 'respuestas', loadChildren: () => import('./Modules/m-respuestas/m-respuestas.module').then(m => m.MRespuestasModule)},
  {path: 'errorPerfil', component:ErrorPerfilComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
