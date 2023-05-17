import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMaymenRoutingModule } from './m-maymen-routing.module';
import { MayormenorComponent } from './mayormenor/mayormenor.component';


@NgModule({
  declarations: [
    MayormenorComponent
  ],
  imports: [
    CommonModule,
    MMaymenRoutingModule
  ]
})
export class MMaymenModule { }
