import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.component.html',
  styleUrls: ['./salir.component.css']
})
export class SalirComponent implements OnInit {
  usuarios: any[];
  menu: MenuComponent;

  constructor(public ruteo:Router) 
  {
    this.usuarios = [];
    this.menu = new MenuComponent(ruteo);
  }
  
  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  }
  
  Salir() :void
  {
    let i:number;

    for(i=0; i<this.usuarios.length; i++)
    {
      if(this.usuarios[i].status == true)
      {
        this.usuarios[i].status = false;
        break;
      }
    }

    console.log("Saliendo");

    // Si estoy pisando la lista, deberia de hacerle el PUSH?
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    console.log("Hago el INIT");
    this.menu.ngOnInit();
    console.log("Redirecciono al Home");
    this.ruteo.navigateByUrl("home");
    
  }
}