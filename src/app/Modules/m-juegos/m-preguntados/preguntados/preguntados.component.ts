import { Component } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Pokemon } from 'src/app/Clases/pokemon';
import { Puntaje } from 'src/app/Clases/puntaje';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { HttpService } from 'src/app/Servicios/http.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent {
  obs:Observable<Pokemon[]>;
  racha:number = 0;
  sub:Subscription;
  pokemones:Pokemon[] = [new Pokemon("","")];
  num:number = 0;
  // vidas:number = 3;
  miUsuario:Usuario = new Usuario("", "", ""); //Agregado
  susUsuario:Subscription; //Agregado
  miPuntaje:Puntaje = new Puntaje("", "", "", 0); //Agregado

  constructor(private servHttp:HttpService, private servUsuario:UsuariosService, private servBase:BasedatosService)
  {
    this.obs = this.servHttp.getPokemones;
   
    this.sub = this.servHttp.getPokemones.subscribe((a)=>{
      this.pokemones = a;
    });

    this.armarJuego();

    this.susUsuario = this.servUsuario.getActivo.subscribe((data) => this.miUsuario = data); //Agregado
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.susUsuario.unsubscribe(); //Agregado
  }

  async armarJuego(){
    await this.servHttp.traerpokemones().then((value)=>{
      this.num = Math.floor(3*Math.random());
    });
  }
  
  validarRespuesta(boton:string){
    if(boton == this.pokemones[this.num].nombre){
      Swal.fire(
        'Correcto!',
        'Haga click para continuar',
        'success'
      );
      this.racha++;
    }else{
      Swal.fire(
        'Incorrecto. Puntos finales: ' + this.racha,
        'Haga click para continuar',
        'error'
      );
      let fechaHora:string = (((new Date).toLocaleDateString()) + " " + ((new Date).toLocaleTimeString())); //Agregado
      this.miPuntaje.usuario = this.miUsuario.mail; //Agregado
      this.miPuntaje.juego = "Preguntados"; //Agregado
      this.miPuntaje.fecha = fechaHora; //Agregado
      this.miPuntaje.puntaje = this.racha; //Agregado
      this.servBase.guardar("HighScore", this.miPuntaje); //Agregado
      // this.vidas--;
      // if(this.vidas == 0){
        this.racha = 0;
        // this.vidas = 3;
      // }
    }
    this.armarJuego();
  }
}
