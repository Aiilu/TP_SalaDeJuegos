import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  usuario: Observable<Usuario>;

  constructor(private servUsuario:UsuariosService)
  {
    this.usuario = this.servUsuario.getActivo;
  }

  salir()
  {
    Swal.fire(
      'Sesion finalizada!',
      'Haga click para continuar',
      'success'
    );
    this.servUsuario.setActivo = new Usuario("", "", "");
    this.servUsuario.tipoPerfil = "";
  }
}
