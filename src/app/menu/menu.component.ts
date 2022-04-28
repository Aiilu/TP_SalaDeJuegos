import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarios: any[];
  flag: boolean;

  constructor(public ruteo:Router) 
  {
    this.usuarios = [];
    this.flag = false;
  }

  ngOnInit(): void {
    // TRUE va a significar, que alguien esta conectado en este momento a la pagina
    // FALSE va a significar que nadie esta conectado a la pagina
    // Mantenemos la sesion hasta que alguien seleccione SALIR

    console.log("Volvi a entrar al Menu");
    this.usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let i:number;

    for(i=0; i<this.usuarios.length; i++)
    {
      if(this.usuarios[i].status == true)
      {
        this.flag = true;
        break;
      }
    }
    console.log(this.flag);
  }
}
