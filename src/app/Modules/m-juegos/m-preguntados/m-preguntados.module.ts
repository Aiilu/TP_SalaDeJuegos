import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MPreguntadosRoutingModule } from './m-preguntados-routing.module';
import { PreguntadosComponent } from './preguntados/preguntados.component';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    MPreguntadosRoutingModule
  ]
})
export class MPreguntadosModule { }
