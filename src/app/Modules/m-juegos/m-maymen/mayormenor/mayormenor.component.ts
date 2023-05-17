import { Component } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css'],
  animations: [
    trigger('animacion', [
      state('inactive', style({
        transform: 'translatex(-100%)'
      })),
      state('active', style({
        transform: 'translatex(0%)'
      })),
      transition('inactive => active',
        animate('200ms ease-in')),
    ]),
    trigger('animacion2', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.3)',
        color: 'green'
      })),
      transition('inactive => active',
        animate('200ms ease-in')),
      transition('active => inactive',
        animate('200ms ease-out')),
    ]),
    trigger('animacion3', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.3)',
        color: 'red'
      })),
      transition('inactive => active',
        animate('200ms ease-in')),
      transition('active => inactive',
        animate('200ms ease-out')),
    ])
  ]
})
export class MayormenorComponent {
  // cartas:any[] = [];
  // suscripcion:Subscription;
  private cartas:any[] = [
    {image:'https://deckofcardsapi.com/static/img/AH.png', value:1},
    {image:'https://deckofcardsapi.com/static/img/2H.png', value:2},
    {image:'https://deckofcardsapi.com/static/img/3H.png', value:3},
    {image:'https://deckofcardsapi.com/static/img/4H.png', value:4},
    {image:'https://deckofcardsapi.com/static/img/5H.png', value:5},
    {image:'https://deckofcardsapi.com/static/img/6H.png', value:6},
    {image:'https://deckofcardsapi.com/static/img/7H.png', value:7},
    {image:'https://deckofcardsapi.com/static/img/8H.png', value:8},
    {image:'https://deckofcardsapi.com/static/img/9H.png', value:9},
    {image:'https://deckofcardsapi.com/static/img/0H.png', value:10},
    {image:'https://deckofcardsapi.com/static/img/JH.png', value:11},
    {image:'https://deckofcardsapi.com/static/img/QH.png', value:12},
    {image:'https://deckofcardsapi.com/static/img/KH.png', value:13}
  ];
  cartasAux:any[]; 
  mostrarCarta:string = "";
  cartaActual:number = 0;
  cartaSiguiente:number = 0;
  imagenActual:string = "";
  imagenSiguiente:string = "";
  private indice:number = 0;
  vidas:number = 3;
  puntos:number = 0;
  estado:string = 'active';
  estado2:string = 'inactive';
  estado3:string = 'inactive';

  constructor(private servHttp:HttpService){ 
    // this.suscripcion = Subscription.EMPTY;
    // this.suscripcion = this.servHttp.traerCartas().subscribe((respuesta)=>
    // {
    //   this.cartas = respuesta.cards;
    // });
    // this.cartasAux = this.cartas;
    this.cartasAux = [...this.cartas];
    this.indice = Math.floor(Math.random() * (this.cartas.length - 1));
    this.comenzar();
  }

  ngOnInit()
  {
    // this.suscripcion = this.servHttp.traerCartas().subscribe((respuesta)=>
    // {
    //   this.cartas = respuesta.cards;
    // });
    // console.log(this.cartas);
  }

  ngOnDestroy()
  {
    // this.suscripcion.unsubscribe();
  }

  comenzar()
  {
    //Creo que me dio error en un momento, porque indiceAct no taba definido
    // let indiceAct = Math.floor(Math.random() * (this.cartas.length -1));
    // this.imagenActual = this.cartas[indiceAct].image;
    // this.cartaActual = this.cartas[indiceAct].value;
    // this.imagenActual = this.cartas[this.indice].image;
    // this.cartaActual = this.cartas[this.indice].value;
    let aux:any = this.cartasAux.splice(this.indice, 1)[0];

    if(this.cartasAux.length == 0){
      this.cartasAux = [...this.cartas];
    }
    
    this.imagenActual = aux.image;
    this.cartaActual = aux.value;
    this.mostrarCarta = this.imagenActual;
    this.animacion();
    console.log("Carta Actual" + this.cartaActual);

    // let indiceSg = Math.floor(Math.random() * (this.cartas.length -1));
    this.indice = Math.floor(Math.random() * (this.cartasAux.length - 1));

    this.cartaSiguiente = this.cartas[this.indice].value;
    this.imagenSiguiente = this.cartas[this.indice].image;
    console.log("Carta Siguiente" + this.cartaSiguiente);
  }

  comparacion(bandera:boolean)
  {
    if((bandera && this.cartaSiguiente > this.cartaActual) || (!bandera && this.cartaSiguiente < this.cartaActual)){
      // += primero hace el calculo de la derecha, despues suma lo de la derecha y lo de la izquierda y por ulitmo asigna el resultado a lo de la izquierda.
      // =+ primero hace el calculo de la derecha, despues asgina lo de la derecha a lo de la izquierda y por ulitmo suma el resultado a lo de la izquierda.
      this.puntos += 10 * this.vidas;
      this.animacion2(); 
    }else{
      this.vidas--;
      this.animacion3();
      if(this.vidas == 0){
        this.terminar();
      }
    }
    this.comenzar();
  }

  terminar(){
    Swal.fire(
      'Puntos finales: ' + this.puntos,
      'Haga click para continuar',
      'success'
    );
    this.vidas = 3;
    this.puntos = 0;
    this.comenzar();
  }

  animacion(){
    this.estado = this.estado === 'active' ? 'inactive' : 'active';
    setTimeout(() => {
      this.estado = this.estado === 'active' ? 'inactive' : 'active';
    }, 200);    
  }

  animacion2(){
    this.estado2 = this.estado2 === 'active' ? 'inactive' : 'active';
    setTimeout(() => {
      this.estado2 = this.estado2 === 'active' ? 'inactive' : 'active';
    }, 250);  
  }

  animacion3(){
    this.estado3 = this.estado3 === 'active' ? 'inactive' : 'active';
    setTimeout(() => {
      this.estado3 = this.estado3 === 'active' ? 'inactive' : 'active';
    }, 250);  
  }
}
