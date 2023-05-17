import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MQuienSoyRoutingModule } from './m-quien-soy-routing.module';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';


@NgModule({
  declarations: [
    QuienSoyComponent
  ],
  imports: [
    CommonModule,
    MQuienSoyRoutingModule
  ]
})
export class MQuienSoyModule { }
