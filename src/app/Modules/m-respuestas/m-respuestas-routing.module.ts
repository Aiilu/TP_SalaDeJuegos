import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { AdministradorGuard } from 'src/app/Guards/administrador.guard';

const routes: Routes = [
  {path:'', component:RespuestasComponent, canActivate:[AdministradorGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MRespuestasRoutingModule { }
