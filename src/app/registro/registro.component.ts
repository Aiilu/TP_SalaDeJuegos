import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  miUsuario: Usuario;
  usuarios: any[];

  constructor(public ruteo:Router) 
  {
    this.miUsuario = new Usuario();
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  }

  registrar(): void
  {
    let i:number;
    let existe = false;

    for(i=0; i<this.usuarios.length; i++)
    {
      if(this.usuarios[i].mailU == this.miUsuario.mailU)
      {
        existe = true;
        alert("Este mail ya existe");
        break;
      }
    }

    if(existe == false)
    {
      this.miUsuario.status = true;
      this.usuarios.push(this.miUsuario);
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      alert("Usuario creado con exito");
      this.ruteo.navigateByUrl("home");
    }
  }
}