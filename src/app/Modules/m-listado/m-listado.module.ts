import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MListadoRoutingModule } from './m-listado-routing.module';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    MListadoRoutingModule
  ]
})
export class MListadoModule { }
