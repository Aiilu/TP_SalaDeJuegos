export class Puntaje {
    usuario:string
    juego:string
    fecha:string
    puntaje:number

    constructor(usuario:string, juego:string, fecha:string, puntaje:number)
    {
        this.usuario = usuario;
        this.juego = juego;
        this.fecha = fecha;
        this.puntaje = puntaje;
    }
}
