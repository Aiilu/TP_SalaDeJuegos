import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarios: any[];
  nombre: string;
  usuario: string;

  constructor() 
  {
    this.usuarios = [];
    this.nombre = "";
    this.usuario = "";
  }
  
  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let i:number;

    for(i=0; i<this.usuarios.length; i++)
    {
      if(this.usuarios[i].status == true)
      {
        this.nombre = this.usuarios[i].nombre;
        this.usuario = this.usuarios[i].usuario;
        break;
      }
    }
  }

}
