import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Puntaje } from 'src/app/Clases/puntaje';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {

  abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  private palabras:string[] = ["PROMOCION", "DIEZ", "EXCELENTE", "APROBAR", "PROGRAMACION", "ANGULAR", "CSS", "HTML"];
  seleccionada:any[] = [];
  seleccionada2:any[] = [];
  acertadas:number = 0;
  intentos:number = 6;
  racha:number = 0;
  botones:any [] = [];
  miUsuario:Usuario = new Usuario("", "", ""); //Agregado
  susUsuario:Subscription; //Agregado
  miPuntaje:Puntaje = new Puntaje("", "", "", 0); //Agregado

  constructor(private servUsuario:UsuariosService, private servBase:BasedatosService){
    console.log(this.palabras); //Agregado
    this.seleccion();
    this.susUsuario = this.servUsuario.getActivo.subscribe((data) => this.miUsuario = data); //Agregado
  }

  ngOnDestroy()
  {
    this.susUsuario.unsubscribe(); //Agregado
  }

  seleccion(){
    let indice = Math.floor(Math.random() * (this.palabras.length -1));

    for (let index = 0; index < this.palabras[indice].length; index++) {
      const element= this.palabras[indice].at(index);
      this.seleccionada[index] = element;
      this.seleccionada2[index] = "";
    }
  }

  verificar(letra:string, $event:any){
    let encontro = false;

    this.botones.push($event.explicitOriginalTarget);
    $event.explicitOriginalTarget.disabled = true;
    
    for (let index = 0; index < this.seleccionada.length; index++) {
      const element = this.seleccionada[index];
      if(element == letra){
        this.seleccionada2[index] = letra;
        this.acertadas++; 
        encontro = true;
      }
    }

    if(encontro == false){
      this.intentos--;
      if(this.intentos == 0){
        let fechaHora:string = (((new Date).toLocaleDateString()) + " " + ((new Date).toLocaleTimeString())); //Agregado
        this.miPuntaje.usuario = this.miUsuario.mail; //Agregado
        this.miPuntaje.juego = "Ahorcado"; //Agregado
        this.miPuntaje.fecha = fechaHora; //Agregado
        this.miPuntaje.puntaje = this.racha; //Agregado
        this.servBase.guardar("HighScore", this.miPuntaje); //Agregado
        this.racha = 0;
        Swal.fire(
          'Perdiste D:',
          'Haga click para continuar',
          'error'
        );
        this.recargar(); 
      }
    }else{
      if(this.acertadas == this.seleccionada.length){
        this.racha++;
        Swal.fire(
          'Ganaste :D',
          'Haga click para continuar',
          'success'
        );
        this.recargar();
      }
    }
  }
  
  recargar() {
    this.acertadas = 0;
    this.intentos = 6;
    while (this.botones.length != 0) {
      this.botones.pop().disabled = false;
    }
    this.seleccionada = [];
    this.seleccionada2 = [];
    this.seleccion();
  }
}
