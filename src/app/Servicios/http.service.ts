import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, OperatorFunction, Subscription, map } from 'rxjs';
import { Pokemon } from '../Clases/pokemon';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  pokemones:BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([new Pokemon("","")]);

  constructor(private http:HttpClient) { 
    // this.http.post<any>('https://www.deckofcardsapi.com/api/deck/j8jd26za2llb/return/');
  }

  traerGithub():Observable<any>
  {
    return this.http.get<any>('https://api.github.com/users/Aiilu');
  }

  traerpokemones():Promise<string>
  {
    let array:any[] = [];
    let i:number = 0;
    let num:number = 0;

    while (num == 0) {
      num = (Math.floor(900*Math.random()))
    }
    
    while ( i < 4) {
      let sus = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${num}/`).subscribe(
          (pokemon:any)=>{
            array.push({nombre:pokemon.name, foto:pokemon.sprites.other.home.front_default});
            sus.unsubscribe;
          }
          )
      if(num > 10){
        num = (Math.floor(num*Math.random()));
      }else{
        num = (Math.floor((num+10)*Math.random()));
      }
      while (num == 0) {
        num = (Math.floor(900*Math.random()))
      }
      i++;
    
    }

    this.setPokemones = array;
    
    let probar = new Promise<string>((resolve)=>{
      resolve("Hola");
    });

    return probar;
  }

  get getPokemones(){
    return this.pokemones.asObservable();
  }

  private set setPokemones(array:Pokemon[]){
    this.pokemones.next(array);
  }
}
