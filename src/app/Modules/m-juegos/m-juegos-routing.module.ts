import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { NotFoundJuegoComponent } from './not-found-juego/not-found-juego.component';

const routes: Routes = [
  {path:'', component:JuegosComponent, children:
   [
    {path: 'ahorcado', loadChildren: () => import('./m-ahorcado/m-ahorcado.module').then(m => m.MAhorcadoModule)},
    {path: 'mayormenor', loadChildren: () => import('./m-maymen/m-maymen.module').then(m => m.MMaymenModule)},
    {path: 'preguntados', loadChildren: () => import('./m-preguntados/m-preguntados.module').then(m => m.MPreguntadosModule)},
    {path: 'propio', loadChildren: () => import('./m-propio/m-propio.module').then(m => m.MPropioModule)},
    {path: 'noLogueado', component:NotFoundJuegoComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MJuegosRoutingModule { }
