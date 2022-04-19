import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miUsuario: Usuario;
  usuarios :any[];

  constructor(public ruteo:Router) 
  {
    this.miUsuario = new Usuario();
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  }
  
  login(): void
  {
    let i:number;
    let existe = false;

    console.log("Mi usuario es ");
    console.log(this.miUsuario.mailU);

    for(i=0; i<this.usuarios.length; i++)
    {
      console.log(this.usuarios[i].mailU);
      if(this.usuarios[i].mailU == this.miUsuario.mailU)
      {
        if(this.usuarios[i].claveU == this.miUsuario.claveU)
        {
          existe = true;
          alert("Usuario logueado con exito");
          break;
        }
      }
    }

    if(existe == false)
    {
      alert("Los datos cargados son incorrectos. Por favor, verifique");
    }
    else
    {
      this.ruteo.navigateByUrl("home");
    }
  }
}
