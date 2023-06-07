import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // activo?:Usuario;
  private activo: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(new Usuario("","", ""));
  tipoPerfil:string = "";

  constructor() {
   }

  get getActivo() {
    return this.activo.asObservable();
  }

  set setActivo(usu:Usuario){
    this.activo?.next(usu);
  }

  validarUsuario(array:any[], usuario:Usuario, val:string){
    let existe = false;

    for (let index = 0; index < array.length; index++) {
      const element:Usuario = array[index];

      if(element.mail == usuario.mail){
        if(val == "T"){
          if(element.clave == usuario.clave){
            this.tipoPerfil = element.perfil;
            existe = true;
          }
        }else{
          existe = true;
        }
        break;
      }
    }

    return existe;
  }
}
