import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Puntaje } from 'src/app/Clases/puntaje';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  susPuntaje:Subscription;
  // susMayorMenor:Subscription;
  // susPreguntados:Subscription;
  listaAhorcado:Puntaje[] = [];
  listaMayorMenor:Puntaje[] = [];
  listaPreguntados:Puntaje[] = [];
  listaReflejos:Puntaje[] = [];
  miUsuario:Usuario = new Usuario("", "", "");
  susUsuario:Subscription;
  vista:string = "";

  constructor(private servBase:BasedatosService, private servUsuario:UsuariosService)
  {
    this.susUsuario = this.servUsuario.getActivo.subscribe((data)=>{this.miUsuario = data});

    this.susPuntaje = this.servBase.puntuacion().subscribe(()=>
    {
      this.listaAhorcado = this.servBase.ahorcado.filter((ahorcado) => ahorcado.usuario == this.miUsuario.mail);
      this.listaPreguntados = this.servBase.preguntados.filter((preguntados) => preguntados.usuario == this.miUsuario.mail);
      this.listaMayorMenor = this.servBase.mayormenor.filter((mayormenor) => mayormenor.usuario == this.miUsuario.mail);
      this.listaReflejos = this.servBase.reflejos.filter((reflejos) => reflejos.usuario == this.miUsuario.mail);
      // console.log(this.servBase.ahorcado);
      // console.log(this.servBase.mayormenor);
      // console.log(this.servBase.preguntados);
    });

    // this.susMayorMenor = this.servBase.puntuacionMayorMenor().subscribe((data:any[])=>
    // {
    //   this.listaMayorMenor = data;
    //   // this.listaMayorMenor = data.filter((mayormenor) => mayormenor.usuario == this.miUsuario.mail);
    // });

    // this.susPreguntados = this.servBase.puntuacionPreguntados().subscribe((data:any[])=>
    // {
    //   this.listaPreguntados = data;
    //   // this.listaPreguntados = data.filter((preguntados) => preguntados.usuario == this.miUsuario.mail);
    // });
  }

  ngOnDestroy()
  {
    this.susPuntaje.unsubscribe();
    // this.susMayorMenor.unsubscribe();
    // this.susPreguntados.unsubscribe();
    this.susUsuario.unsubscribe();
  }

  cambiarVista(seleccion:string)
  {
    this.vista = seleccion;
  }
}
