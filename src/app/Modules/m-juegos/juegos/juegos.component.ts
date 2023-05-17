import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  susUsuario:Subscription;
  mailUsuario:string = "";

  constructor(private router:Router, private servUsuario:UsuariosService) {
    this.susUsuario = this.servUsuario.getActivo.pipe(
      map((data)=>{
        this.mailUsuario = data.mail;
      } 
      )
    ).subscribe();
  }

  ngOnDestroy()
  {
    this.susUsuario.unsubscribe();
  }

  navegacion(cadena:string)
  {
    if(this.mailUsuario == "")
    {
      cadena = 'noLogueado';
    }

    this.router.navigateByUrl('juegos/' + cadena);
  }
}
