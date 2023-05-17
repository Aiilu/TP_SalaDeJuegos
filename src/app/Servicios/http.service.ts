import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 
    // this.http.post<any>('https://www.deckofcardsapi.com/api/deck/j8jd26za2llb/return/');
  }

  traerGithub():Observable<any>
  {
    return this.http.get<any>('https://api.github.com/users/Aiilu');
  }

  traerCartas():Observable<any>
  {
    return this.http.get<any>('https://www.deckofcardsapi.com/api/deck/j8jd26za2llb/draw/?count=8');
  }
}
