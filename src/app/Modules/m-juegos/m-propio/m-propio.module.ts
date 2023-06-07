import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MPropioRoutingModule } from './m-propio-routing.module';
import { PropioComponent } from './propio/propio.component';


@NgModule({
  declarations: [
    PropioComponent
  ],
  imports: [
    CommonModule,
    MPropioRoutingModule
  ]
})
export class MPropioModule { }
