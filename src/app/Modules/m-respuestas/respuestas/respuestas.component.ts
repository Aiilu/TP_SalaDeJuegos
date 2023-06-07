import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent {
  susEncuesta: Subscription;
  listaRespuestas: any[] = [];

  constructor(private servBase:BasedatosService)
  {
    this.susEncuesta = this.servBase.traerEncuesta("Encuesta").subscribe((data)=>
    {
      this.listaRespuestas = data;
    });
  }

  ngOnDestroy()
  {
    this.susEncuesta.unsubscribe();
  }
}
