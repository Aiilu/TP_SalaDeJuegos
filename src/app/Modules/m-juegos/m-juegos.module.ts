import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MJuegosRoutingModule } from './m-juegos-routing.module';
import { JuegosComponent } from './juegos/juegos.component';
import { NotFoundJuegoComponent } from './not-found-juego/not-found-juego.component';


@NgModule({
  declarations: [
    JuegosComponent,
    NotFoundJuegoComponent
  ],
  imports: [
    CommonModule,
    MJuegosRoutingModule
  ]
})
export class MJuegosModule { }
