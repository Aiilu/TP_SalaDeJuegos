"use strict";(self.webpackChunkTP_SalaDeJuegos=self.webpackChunkTP_SalaDeJuegos||[]).push([[256],{9256:(v,u,r)=>{r.r(u),r.d(u,{MRespuestasModule:()=>g});var i=r(6895),a=r(1194),e=r(4650),p=r(1649);function c(s,o){if(1&s&&(e.TgZ(0,"div",3)(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.qZA(),e.TgZ(15,"p"),e._uU(16),e.qZA()()),2&s){const t=o.$implicit;e.xp6(2),e.hij("Usuario - ",t.usuario,""),e.xp6(2),e.hij("* Nombre: ",t.nombre,""),e.xp6(2),e.hij("* Apellido: ",t.apellido,""),e.xp6(2),e.hij("* Edad: ",t.edad,""),e.xp6(2),e.hij("* Telefono: ",t.telefono,""),e.xp6(2),e.hij("* \xbfQue tan divertidos son los juegos? ",t.resp2,""),e.xp6(2),e.hij("* \xbfComo encontraste TP Sala de Juegos? ",t.resp3,""),e.xp6(2),e.hij("* \xbfTienes algo que aportar para la pagina? ",t.resp1,"")}}let d=(()=>{class s{constructor(t){this.servBase=t,this.listaRespuestas=[],this.susEncuesta=this.servBase.traerEncuesta("Encuesta").subscribe(n=>{this.listaRespuestas=n})}ngOnDestroy(){this.susEncuesta.unsubscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(p.j))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-respuestas"]],decls:5,vars:1,consts:[[1,"contenedor"],[1,"contenedor__respuestas"],["class","contenedor__respuestas__respuesta",4,"ngFor","ngForOf"],[1,"contenedor__respuestas__respuesta"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Respuestas Encuesta"),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,c,17,8,"div",2),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",n.listaRespuestas))},dependencies:[i.sg],styles:[".contenedor[_ngcontent-%COMP%]{margin-top:1em;display:flex;flex-direction:column;align-items:center}.contenedor__respuestas[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.contenedor__respuestas__respuesta[_ngcontent-%COMP%]{overflow-y:scroll;border:3px solid #bc21c2;border-radius:10px;width:25em;height:20em;margin:1em .2em 0}"]}),s})();var l=r(5144);const m=[{path:"",component:d,canActivate:[(()=>{class s{constructor(t,n){this.servUsuario=t,this.ruteo=n,this.perfil="",this.servUsuario.getActivo.subscribe(h=>{this.perfil=h.perfil})}canActivate(t,n){return"admin"!=this.perfil&&this.ruteo.navigateByUrl("errorPerfil"),!0}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(l.J),e.LFG(a.F0))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()]}];let f=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[a.Bz.forChild(m),a.Bz]}),s})(),g=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[i.ez,f]}),s})()}}]);