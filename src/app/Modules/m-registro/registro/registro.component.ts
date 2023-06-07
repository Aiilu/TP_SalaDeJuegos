import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formRegistro: FormGroup;
  miUsuario = new Usuario("", "", "");
  sub:Subscription = Subscription.EMPTY;

  constructor(private fb: FormBuilder, private servBase:BasedatosService, private servUsuario:UsuariosService, private router:Router) {
    this.formRegistro = this.fb.group({
      'emailR': ['', [Validators.required, Validators.email, this.spacesValidator]],
      'claveR': ['', [Validators.required, this.spacesValidator]],
      'perfilR': ['', [Validators.required]]
    });
  }

  ngOnInit(){
    this.sub = this.servBase.traer("Usuarios");
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  registrar()
  {
    this.miUsuario.mail = this.formRegistro.value.emailR;
    this.miUsuario.clave = this.formRegistro.value.claveR;
    this.miUsuario.perfil = this.formRegistro.value.perfilR;
    
    if(!this.servUsuario.validarUsuario(this.servBase.array, this.miUsuario, "R")){
      this.servBase.guardar("Usuarios", this.miUsuario);
      Swal.fire(
        'El usuario ha sido registrado con exito!',
        'Haga click para continuar',
        'success'
      );
      // this.servUsuario.activo = this.miUsuario;
      let fechaHora:string = (((new Date).toLocaleDateString()) + " " + ((new Date).toLocaleTimeString()));
      this.servUsuario.setActivo = this.miUsuario;
      this.servBase.guardar("Log", {usuario:{mail:this.miUsuario.mail, clave:this.miUsuario.clave, perfil:this.miUsuario.perfil}, fecha:fechaHora, accion:"Registro"});
      this.servBase.guardar("Log", {usuario:{mail:this.miUsuario.mail, clave:this.miUsuario.clave, perfil:this.miUsuario.perfil}, fecha:fechaHora, accion:"Login"});
      this.router.navigateByUrl("home");
    }else{
      Swal.fire(
        'El usuario ya existe!',
        'Haga click para continuar',
        'error'
      );
    }
  }

  private spacesValidator(control: AbstractControl): null | object {
    const valor = <string>control.value;
    const spaces = valor.includes(' ');

    if(spaces)
    {
      return {containsSpaces: true};
    }
    else
    {
      return null;
    }
  }
}
