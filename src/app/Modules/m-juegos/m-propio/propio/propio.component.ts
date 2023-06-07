import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Puntaje } from 'src/app/Clases/puntaje';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propio',
  templateUrl: './propio.component.html',
  styleUrls: ['./propio.component.css']
})
export class PropioComponent {
  top:number = 0;
  left:number = 0;
  display:string = "none";
  displayB:string = "";
  tiempo:number = 0;
  vidas:number = 3;
  puntos:number = 0;
  interval:any = 0;
  miUsuario:Usuario = new Usuario("", "", ""); //Agregado
  susUsuario:Subscription; //Agregado
  miPuntaje:Puntaje = new Puntaje("", "", "", 0); //Agregado

  constructor(private servUsuario:UsuariosService, private servBase:BasedatosService)
  {
    this.susUsuario = this.servUsuario.getActivo.subscribe((data) => this.miUsuario = data); //Agregado
  }

  ngOnDestroy(){
    clearInterval(this.interval);
    this.susUsuario.unsubscribe(); //Agregado
  }

  empezar(){
    this.displayB = "none";
    this.click();
  }

  click(){
    clearInterval(this.interval);
    this.puntos += Math.floor(this.tiempo/0.23);
    this.tiempo = 60;
    this.display = "none";
    this.top = (Math.random()*77);
    this.left = (Math.random()*88);

    setTimeout(()=>{
      this.display = "";
      this.interval = setInterval(()=>{
                        this.calcular();
                      },1);
    }, (Math.random()*4000));
  }

  calcular(){
    this.tiempo= this.tiempo - 1;
    // console.log(this.tiempo);
    if(this.tiempo == 0){
      clearInterval(this.interval);
      this.vidas--;
      if(this.vidas > 0){
        this.click();
      }else{
        Swal.fire(
          'Puntos finales: ' + this.puntos,
          'Haga click para continuar',
          'error'
        );
        let fechaHora:string = (((new Date).toLocaleDateString()) + " " + ((new Date).toLocaleTimeString())); //Agregado
        this.miPuntaje.usuario = this.miUsuario.mail; //Agregado
        this.miPuntaje.juego = "Reflejos"; //Agregado
        this.miPuntaje.fecha = fechaHora; //Agregado
        this.miPuntaje.puntaje = this.puntos; //Agregado
        this.servBase.guardar("HighScore", this.miPuntaje); //Agregado
        this.displayB = "";
        this.display = "none";
        this.vidas = 3;
        this.puntos = 0;
      }
    }
  }
}
