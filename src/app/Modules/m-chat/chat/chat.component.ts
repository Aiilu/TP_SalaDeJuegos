import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensaje:string = "";
  chats:any[] = [];
  barra:any;
  susChat:Subscription;
  susUsuario:Subscription;
  mailUsuario:string = "";

  constructor(private servBase:BasedatosService, private servUsuario:UsuariosService) {
    this.susChat = this.servBase.chat().subscribe(()=>
    {
      this.chats = this.servBase.chats;
      //Que mueva la barra al final, esto lo hace antes de que renderize la data. NO FUNCA!
      // this.barra.scrollTop = this.barra.scrollHeight;
    });

    // this.usuario = this.servUsuario.getActivo;
    this.susUsuario = this.servUsuario.getActivo.pipe(
      map((data)=>{
        this.mailUsuario = data.mail;
      } 
      )
    ).subscribe();
  }

  ngOnDestroy()
  {
    this.susChat.unsubscribe();
    this.susUsuario.unsubscribe();
  }

  // ngOnInit()
  // {
  //   this.barra = document.getElementById("idMensajes");
  // }

  enviar()
  {
    let fechaHora:string = (((new Date).toLocaleDateString()) + " " + ((new Date).toLocaleTimeString()));

    if(this.mensaje.length != 0)
    {
      this.servBase.guardar("Chat", {usuario: this.mailUsuario, fechaHora: fechaHora, mensaje: this.mensaje});
    }
    this.mensaje = "";
  }
}
