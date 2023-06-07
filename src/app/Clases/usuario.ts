export class Usuario {
    mail:string;
    clave:string;
    perfil:string;

    constructor(mail:string, clave:string, perfil:string)
    {
        this.mail = mail;
        this.clave = clave;
        this.perfil = perfil;
    }
}
