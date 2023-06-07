import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../Servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  perfil:string = "";
  constructor(private servUsuario:UsuariosService, private ruteo:Router) {
    this.servUsuario.getActivo.subscribe((data)=>
    {
      this.perfil = data.perfil;
    });
  }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.perfil != "admin")
      {
        this.ruteo.navigateByUrl('errorPerfil');
      }
  
      return true;
  }
}
