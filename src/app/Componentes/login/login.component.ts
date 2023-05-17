import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  miUsuario = new Usuario("", "");
  sub:Subscription = Subscription.EMPTY;
  
  constructor(private servBase:BasedatosService, private servUsuario:UsuariosService, private router:Router){

  }

  ngOnInit(){
    this.sub = this.servBase.traer("Usuarios");
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  ingresar(){
    if(this.servUsuario.validarUsuario(this.servBase.array, this.miUsuario, "T")){
      Swal.fire(
        'Ingreso correctamente!',
        'Haga click para continuar',
        'success'
      );
      // this.servUsuario.activo = this.miUsuario;
      this.servUsuario.setActivo = this.miUsuario;
      this.servBase.guardar("Log", {usuario:{mail:this.miUsuario.mail, clave:this.miUsuario.clave}, fecha:(new Date).toString(), accion:"Login"});
      this.router.navigateByUrl("home");
    }else{
      Swal.fire(
        'Datos incorrectos!',
        'Haga click para continuar',
        'error'
      );
    }
  }

  llenar(mail:string, clave:string){
    this.miUsuario.mail = mail;
    this.miUsuario.clave = clave;
  }
}
