"use strict";(self.webpackChunkTP_SalaDeJuegos=self.webpackChunkTP_SalaDeJuegos||[]).push([[392],{9392:(f,c,n)=>{n.r(c),n.d(c,{MMaymenModule:()=>p});var m=n(6895),r=n(1194),a=n(7340),h=n(3998),d=n.n(h),t=n(4650),l=n(4051);const u=[{path:"",component:(()=>{class i{constructor(e){this.servHttp=e,this.cartas=[{image:"https://deckofcardsapi.com/static/img/AH.png",value:1},{image:"https://deckofcardsapi.com/static/img/2H.png",value:2},{image:"https://deckofcardsapi.com/static/img/3H.png",value:3},{image:"https://deckofcardsapi.com/static/img/4H.png",value:4},{image:"https://deckofcardsapi.com/static/img/5H.png",value:5},{image:"https://deckofcardsapi.com/static/img/6H.png",value:6},{image:"https://deckofcardsapi.com/static/img/7H.png",value:7},{image:"https://deckofcardsapi.com/static/img/8H.png",value:8},{image:"https://deckofcardsapi.com/static/img/9H.png",value:9},{image:"https://deckofcardsapi.com/static/img/0H.png",value:10},{image:"https://deckofcardsapi.com/static/img/JH.png",value:11},{image:"https://deckofcardsapi.com/static/img/QH.png",value:12},{image:"https://deckofcardsapi.com/static/img/KH.png",value:13}],this.mostrarCarta="",this.cartaActual=0,this.cartaSiguiente=0,this.imagenActual="",this.imagenSiguiente="",this.indice=0,this.vidas=3,this.puntos=0,this.estado="active",this.estado2="inactive",this.estado3="inactive",this.cartasAux=[...this.cartas],this.indice=Math.floor(Math.random()*(this.cartas.length-1)),this.comenzar()}ngOnInit(){}ngOnDestroy(){}comenzar(){let e=this.cartasAux.splice(this.indice,1)[0];0==this.cartasAux.length&&(this.cartasAux=[...this.cartas]),this.imagenActual=e.image,this.cartaActual=e.value,this.mostrarCarta=this.imagenActual,this.animacion(),console.log("Carta Actual"+this.cartaActual),this.indice=Math.floor(Math.random()*(this.cartasAux.length-1)),this.cartaSiguiente=this.cartas[this.indice].value,this.imagenSiguiente=this.cartas[this.indice].image,console.log("Carta Siguiente"+this.cartaSiguiente)}comparacion(e){e&&this.cartaSiguiente>this.cartaActual||!e&&this.cartaSiguiente<this.cartaActual?(this.puntos+=10*this.vidas,this.animacion2()):(this.vidas--,this.animacion3(),0==this.vidas&&this.terminar()),this.comenzar()}terminar(){d().fire("Puntos finales: "+this.puntos,"Haga click para continuar","success"),this.vidas=3,this.puntos=0,this.comenzar()}animacion(){this.estado="active"===this.estado?"inactive":"active",setTimeout(()=>{this.estado="active"===this.estado?"inactive":"active"},200)}animacion2(){this.estado2="active"===this.estado2?"inactive":"active",setTimeout(()=>{this.estado2="active"===this.estado2?"inactive":"active"},250)}animacion3(){this.estado3="active"===this.estado3?"inactive":"active",setTimeout(()=>{this.estado3="active"===this.estado3?"inactive":"active"},250)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.O))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-mayormenor"]],decls:15,vars:6,consts:[[1,"contenedor"],[1,"juego"],[1,"carta"],["src","../../../../../assets/carta.png","alt","fondo-carta",1,"fondo"],["alt","carta",3,"src"],[1,"botones"],[1,"boton",3,"click"],[1,"info"],[1,"info__texto"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3)(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"button",6),t.NdJ("click",function(){return s.comparacion(!0)}),t._uU(7,"Mayor"),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return s.comparacion(!1)}),t._uU(9,"Menor"),t.qZA()()(),t.TgZ(10,"div",7)(11,"h4",8),t._uU(12),t.qZA(),t.TgZ(13,"h4",8),t._uU(14),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("@animacion",s.estado)("src",s.mostrarCarta,t.LSH),t.xp6(7),t.Q6J("@animacion3",s.estado3),t.xp6(1),t.hij("Vidas = ",s.vidas,""),t.xp6(1),t.Q6J("@animacion2",s.estado2),t.xp6(1),t.hij("Puntos = ",s.puntos,""))},styles:[".contenedor[_ngcontent-%COMP%]{background-color:#1d6969;width:100%;height:100%;display:flex;align-items:center;justify-content:space-around}.juego[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.carta[_ngcontent-%COMP%]{margin:2em}.fondo[_ngcontent-%COMP%]{width:226px;height:314px;border-radius:5%}.botones[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:15em}.boton[_ngcontent-%COMP%]{width:4em;height:4em}.info[_ngcontent-%COMP%]{width:20em}.info__texto[_ngcontent-%COMP%]{font-weight:900;color:#fff;padding:1em}"],data:{animation:[(0,a.X$)("animacion",[(0,a.SB)("inactive",(0,a.oB)({transform:"translatex(-100%)"})),(0,a.SB)("active",(0,a.oB)({transform:"translatex(0%)"})),(0,a.eR)("inactive => active",(0,a.jt)("200ms ease-in"))]),(0,a.X$)("animacion2",[(0,a.SB)("inactive",(0,a.oB)({transform:"scale(1)"})),(0,a.SB)("active",(0,a.oB)({transform:"scale(1.3)",color:"green"})),(0,a.eR)("inactive => active",(0,a.jt)("200ms ease-in")),(0,a.eR)("active => inactive",(0,a.jt)("200ms ease-out"))]),(0,a.X$)("animacion3",[(0,a.SB)("inactive",(0,a.oB)({transform:"scale(1)"})),(0,a.SB)("active",(0,a.oB)({transform:"scale(1.3)",color:"red"})),(0,a.eR)("inactive => active",(0,a.jt)("200ms ease-in")),(0,a.eR)("active => inactive",(0,a.jt)("200ms ease-out"))])]}}),i})()}];let g=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.Bz.forChild(u),r.Bz]}),i})(),p=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,g]}),i})()}}]);