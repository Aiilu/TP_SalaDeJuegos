import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MEncuestaRoutingModule } from './m-encuesta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestaComponent } from './encuesta/encuesta.component';


@NgModule({
  declarations: [
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    MEncuestaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MEncuestaModule { }
