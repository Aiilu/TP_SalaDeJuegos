import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAhorcadoRoutingModule } from './m-ahorcado-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';


@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    MAhorcadoRoutingModule
  ]
})
export class MAhorcadoModule { }
