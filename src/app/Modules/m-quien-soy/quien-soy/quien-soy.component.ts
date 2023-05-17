import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/Servicios/http.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {
  mostrarPerfil:any = {};
  suscripcion:Subscription;

  constructor(private miPerfil:HttpService){ 
    this.suscripcion = Subscription.EMPTY;
  }

  ngOnInit()
  {
    this.suscripcion = this.miPerfil.traerGithub().subscribe((respuesta)=>
    {
      this.mostrarPerfil = respuesta;
    });
  }

  ngOnDestroy()
  {
    this.suscripcion.unsubscribe();
  }
}
