import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MRespuestasRoutingModule } from './m-respuestas-routing.module';
import { RespuestasComponent } from './respuestas/respuestas.component';


@NgModule({
  declarations: [
    RespuestasComponent
  ],
  imports: [
    CommonModule,
    MRespuestasRoutingModule
  ]
})
export class MRespuestasModule { }
