"use strict";(self.webpackChunkTP_SalaDeJuegos=self.webpackChunkTP_SalaDeJuegos||[]).push([[279],{5279:(b,s,c)=>{c.r(s),c.d(s,{MAhorcadoModule:()=>A});var l=c(6895),d=c(1194),p=c(3998),h=c.n(p),t=c(4650);function u(e,a){if(1&e&&(t.TgZ(0,"p",10),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.Oqu(o)}}function m(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(i){const g=t.CHM(o).$implicit,M=t.oxw();return t.KtG(M.verificar(g,i))}),t._uU(1),t.qZA()}if(2&e){const o=a.$implicit;t.xp6(1),t.Oqu(o)}}const f=[{path:"",component:(()=>{class e{constructor(){this.abc=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.palabras=["PROMOCION","DIEZ","EXCELENTE","APROBAR","PROGRAMACION","ANGULAR","CSS","HTML"],this.seleccionada=[],this.seleccionada2=[],this.acertadas=0,this.intentos=6,this.racha=0,this.botones=[],this.seleccion()}seleccion(){let o=Math.floor(Math.random()*(this.palabras.length-1));for(let n=0;n<this.palabras[o].length;n++){const i=this.palabras[o].at(n);this.seleccionada[n]=i,this.seleccionada2[n]=""}}verificar(o,n){let i=!1;this.botones.push(n.explicitOriginalTarget),n.explicitOriginalTarget.disabled=!0;for(let r=0;r<this.seleccionada.length;r++)this.seleccionada[r]==o&&(this.seleccionada2[r]=o,this.acertadas++,i=!0);0==i?(this.intentos--,0==this.intentos&&(this.racha=0,h().fire("Perdiste D:","Haga click para continuar","error"),this.recargar())):this.acertadas==this.seleccionada.length&&(this.racha++,h().fire("Ganaste :D","Haga click para continuar","success"),this.recargar())}recargar(){for(this.acertadas=0,this.intentos=6;0!=this.botones.length;)this.botones.pop().disabled=!1;this.seleccionada=[],this.seleccionada2=[],this.seleccion()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ahorcado"]],decls:12,vars:4,consts:[[1,"contenedor"],[1,"contenedor__imagen"],["src","../../../../../assets/ahorcado.png","alt",""],[1,"contenedor__texto"],[1,"texto__racha"],[1,"texto__intentos"],[1,"texto__palabra"],["class","palabra__letra",4,"ngFor","ngForOf"],[1,"contenedor__teclado"],["class","teclado__letra",3,"click",4,"ngFor","ngForOf"],[1,"palabra__letra"],[1,"teclado__letra",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,u,2,1,"p",7),t.qZA()(),t.TgZ(10,"div",8),t.YNc(11,m,2,1,"button",9),t.qZA()()),2&o&&(t.xp6(5),t.hij("RACHA: ",n.racha,""),t.xp6(2),t.hij("intentos restantes: ",n.intentos,""),t.xp6(2),t.Q6J("ngForOf",n.seleccionada2),t.xp6(2),t.Q6J("ngForOf",n.abc))},dependencies:[l.sg],styles:[".contenedor[_ngcontent-%COMP%]{background-color:red;width:100%;height:100%;display:flex;flex-wrap:wrap}.contenedor__imagen[_ngcontent-%COMP%]{height:80%;width:50%;background-color:#ff0}.contenedor__texto[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:80%;width:50%;justify-content:center;align-items:center;background-color:#0ff}.texto__racha[_ngcontent-%COMP%]{margin-top:-2em;margin-bottom:4em;color:#8a2be2;font-weight:900}.texto__intentos[_ngcontent-%COMP%]{margin-bottom:2em}.texto__palabra[_ngcontent-%COMP%]{display:flex;justify-content:center}.palabra__letra[_ngcontent-%COMP%]{width:1em;margin:0 .5em;border-bottom:.1em solid black}.contenedor__teclado[_ngcontent-%COMP%]{width:100%;height:20%;background-color:#000;display:flex;flex-wrap:wrap;justify-content:center;padding:.2em 6em}.teclado__letra[_ngcontent-%COMP%]{width:1.5em;font-size:1.5em;margin:.1em;background-color:#00f}"]}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(f),d.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,_]}),e})()}}]);