"use strict";(self.webpackChunkTP_SalaDeJuegos=self.webpackChunkTP_SalaDeJuegos||[]).push([[368],{1368:(_,c,i)=>{i.r(c),i.d(c,{MRegistroModule:()=>U});var u=i(6895),s=i(1194),n=i(433),d=i(727),g=i(1197),p=i(3998),m=i.n(p),e=i(4650),f=i(1649),h=i(5144);function R(o,a){1&o&&(e.TgZ(0,"small",17),e._uU(1,"El email es requerido"),e.qZA())}function v(o,a){1&o&&(e.TgZ(0,"small",17),e._uU(1,"El email debe tener el formato correspondiente"),e.qZA())}function b(o,a){1&o&&(e.TgZ(0,"small",17),e._uU(1,"El email no puede contener espacios"),e.qZA())}function C(o,a){1&o&&(e.TgZ(0,"small",17),e._uU(1,"La clave es requerida"),e.qZA())}function M(o,a){1&o&&(e.TgZ(0,"small",17),e._uU(1,"La clave no puede contener espacios"),e.qZA())}function y(o,a){1&o&&(e.TgZ(0,"small",17),e._uU(1,"El perfil es requerido"),e.qZA())}const x=[{path:"",component:(()=>{class o{constructor(r,t,l,O){this.fb=r,this.servBase=t,this.servUsuario=l,this.router=O,this.miUsuario=new g.b("","",""),this.sub=d.w0.EMPTY,this.formRegistro=this.fb.group({emailR:["",[n.kI.required,n.kI.email,this.spacesValidator]],claveR:["",[n.kI.required,this.spacesValidator]],perfilR:["",[n.kI.required]]})}ngOnInit(){this.sub=this.servBase.traer("Usuarios")}ngOnDestroy(){this.sub.unsubscribe()}registrar(){if(this.miUsuario.mail=this.formRegistro.value.emailR,this.miUsuario.clave=this.formRegistro.value.claveR,this.miUsuario.perfil=this.formRegistro.value.perfilR,this.servUsuario.validarUsuario(this.servBase.array,this.miUsuario,"R"))m().fire("El usuario ya existe!","Haga click para continuar","error");else{this.servBase.guardar("Usuarios",this.miUsuario),m().fire("El usuario ha sido registrado con exito!","Haga click para continuar","success");let r=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString();this.servUsuario.setActivo=this.miUsuario,this.servBase.guardar("Log",{usuario:{mail:this.miUsuario.mail,clave:this.miUsuario.clave,perfil:this.miUsuario.perfil},fecha:r,accion:"Registro"}),this.servBase.guardar("Log",{usuario:{mail:this.miUsuario.mail,clave:this.miUsuario.clave,perfil:this.miUsuario.perfil},fecha:r,accion:"Login"}),this.router.navigateByUrl("home")}}spacesValidator(r){return r.value.includes(" ")?{containsSpaces:!0}:null}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(n.qu),e.Y36(f.j),e.Y36(h.J),e.Y36(s.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registro"]],decls:35,vars:8,consts:[[1,"wrapper","fadeInDown"],["id","formContent"],[1,"active"],[1,"fadeIn","first"],["src","../../../../assets/registrar.png","id","icon","alt","User Icon",2,"width","30px"],[3,"formGroup","ngSubmit"],["for","emailR"],["type","text","id","emailR","name","registroEmail","placeholder","Ingrese mail","formControlName","emailR",1,"fadeIn","second"],["class","invalid",4,"ngIf"],["for","claveR"],["type","password","id","claveR","name","registroClave","placeholder","Ingrese contrase\xf1a","formControlName","claveR",1,"fadeIn","third"],["for","perfilR"],["id","perfilR","formControlName","perfilR"],["value",""],["value","admin"],["value","empleado"],["type","submit","value","Ingresar",1,"fadeIn","fourth",3,"disabled"],[1,"invalid"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3," Registro "),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.TgZ(6,"form",5),e.NdJ("ngSubmit",function(){return t.registrar()}),e.TgZ(7,"label",6),e._uU(8,"Mail:"),e.qZA(),e._UZ(9,"br")(10,"input",7),e.YNc(11,R,2,0,"small",8),e.YNc(12,v,2,0,"small",8),e.YNc(13,b,2,0,"small",8),e.TgZ(14,"label",9),e._uU(15,"Contrase\xf1a:"),e.qZA(),e._UZ(16,"br")(17,"input",10),e.YNc(18,C,2,0,"small",8),e.YNc(19,M,2,0,"small",8),e._UZ(20,"br"),e.TgZ(21,"label",11),e._uU(22,"Perfil: "),e.qZA(),e._UZ(23,"br"),e.TgZ(24,"select",12)(25,"option",13),e._uU(26,"Seleccione uno"),e.qZA(),e.TgZ(27,"option",14),e._uU(28,"Admin"),e.qZA(),e.TgZ(29,"option",15),e._uU(30,"Empleado"),e.qZA()(),e.YNc(31,y,2,0,"small",8),e._UZ(32,"br")(33,"br")(34,"input",16),e.qZA()()()),2&r&&(e.xp6(6),e.Q6J("formGroup",t.formRegistro),e.xp6(5),e.Q6J("ngIf",(null==t.formRegistro.controls.emailR.errors?null:t.formRegistro.controls.emailR.errors.required)&&t.formRegistro.controls.emailR.touched),e.xp6(1),e.Q6J("ngIf",(null==t.formRegistro.controls.emailR.errors?null:t.formRegistro.controls.emailR.errors.email)&&t.formRegistro.controls.emailR.touched),e.xp6(1),e.Q6J("ngIf",(null==t.formRegistro.controls.emailR.errors?null:t.formRegistro.controls.emailR.errors.containsSpaces)&&t.formRegistro.controls.emailR.touched),e.xp6(5),e.Q6J("ngIf",(null==t.formRegistro.controls.claveR.errors?null:t.formRegistro.controls.claveR.errors.required)&&t.formRegistro.controls.claveR.touched),e.xp6(1),e.Q6J("ngIf",(null==t.formRegistro.controls.claveR.errors?null:t.formRegistro.controls.claveR.errors.containsSpaces)&&t.formRegistro.controls.claveR.touched),e.xp6(12),e.Q6J("ngIf",(null==t.formRegistro.controls.perfilR.errors?null:t.formRegistro.controls.perfilR.errors.required)&&t.formRegistro.controls.perfilR.touched),e.xp6(3),e.Q6J("disabled",t.formRegistro.invalid))},dependencies:[u.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:['@import"https://fonts.googleapis.com/css?family=Poppins";html[_ngcontent-%COMP%]{background-color:#56baed}body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;height:100vh}a[_ngcontent-%COMP%]{color:#92badd;display:inline-block;text-decoration:none;font-weight:400}h2[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-weight:600;text-transform:uppercase;display:inline-block;margin:40px 8px 10px;color:#ccc}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;width:100%;min-height:100%;padding:20px}#formContent[_ngcontent-%COMP%]{border-radius:10px;background:#fff;width:90%;max-width:450px;position:relative;padding:0;box-shadow:0 30px 60px #0000004d;text-align:center}h2.inactive[_ngcontent-%COMP%]{color:#ccc}h2.active[_ngcontent-%COMP%]{color:#0d0d0d;border-bottom:2px solid #5fbae9}input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]{background-color:#56baed;border:none;color:#fff;padding:15px 80px;text-align:center;text-decoration:none;display:inline-block;text-transform:uppercase;font-size:13px;box-shadow:0 10px 30px #5fbae966;border-radius:5px;margin:5px 20px 40px;transition:all .3s ease-in-out}input[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover{background-color:#39ace7}input[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active{transform:scale(.95)}input[type=text][_ngcontent-%COMP%]{background-color:#f6f6f6;border:none;color:#0d0d0d;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:5px;width:85%;border:2px solid #f6f6f6;transition:all .5s ease-in-out;border-radius:5px}input[type=text][_ngcontent-%COMP%]:focus{background-color:#fff;border-bottom:2px solid #5fbae9}input[type=text][_ngcontent-%COMP%]:placeholder{color:#ccc}.fadeInDown[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_fadeInDown;animation-duration:1s;animation-fill-mode:both}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_fadeIn ease-in 1;animation-fill-mode:forwards;animation-duration:1s}.fadeIn.first[_ngcontent-%COMP%]{animation-delay:.4s}.fadeIn.second[_ngcontent-%COMP%]{animation-delay:.6s}.fadeIn.third[_ngcontent-%COMP%]{animation-delay:.8s}.fadeIn.fourth[_ngcontent-%COMP%]{animation-delay:1s}.underlineHover[_ngcontent-%COMP%]:after{display:block;left:0;bottom:-10px;width:0;height:2px;background-color:#56baed;content:"";transition:width .2s}.underlineHover[_ngcontent-%COMP%]:hover{color:#0d0d0d}.underlineHover[_ngcontent-%COMP%]:hover:after{width:100%}*[_ngcontent-%COMP%]:focus{outline:none}#icon[_ngcontent-%COMP%]{width:60%}*[_ngcontent-%COMP%]{box-sizing:border-box}.invalid[_ngcontent-%COMP%]{color:red}']}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(x),s.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,P,n.UX,n.u5]}),o})()}}]);