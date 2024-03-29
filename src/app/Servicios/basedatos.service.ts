import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { orderBy } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  array:any[] = [];
  chats:any[] = [];
  ahorcado:any[] = [];
  preguntados:any[] = [];
  mayormenor:any[] = [];
  reflejos:any[] = [];
  
  constructor(private firestore: AngularFirestore) {
    // const col = this.firestore.collection<Usuario>("Usuarios");
    // this.nani = col.snapshotChanges().subscribe((actions:any) => {return actions.map((a:any)=>{
    //   const data = a.payload.doc.data() as Usuario;
    //   console.log("data");
    //   console.log(data);
    // })});
  }

  traer(db:string){
    const col =  this.firestore.collection(db);
    return col.valueChanges().subscribe((data:any) => {this.array = data});
  }

  traerEncuesta(db:string){
    const col =  this.firestore.collection(db);
    return col.valueChanges();
  }

  guardar(db:string, obj:any)
  {
    const col = this.firestore.collection(db);

    const aux:any = {};
    for (const key in obj) {
        aux[key] = obj[key];
    }
    col.add(aux);
  }

  chat()
  {
    //El servicio se instancia cuando este es INYECTADO.
    //Tambien al realizar al traer una coleccion, como segundo parametro podemos usar QUERYS. A ese QUERY lo limitamos.
    const col =  this.firestore.collection("Chat", ref=> ref.orderBy("fechaHora", "desc").limit(50));
    //El PIPE nos permite transformar un dato. Este acepta MAP, FILTER, etc.
    return col.valueChanges().pipe(
      //El MAP trabaja con la respuesta de un observable, la transforma y vuelve a regresar un nuevo observable con los valores transformados, por ende nos podemos suscribir. Entonces el MAP se ejecuta cuando me suscribo.
      map((data)=>
      {
        // this.chats = data;
        this.chats = [];
        for(let m of data)
        {
          //Vuelvo a crear el elemento de chats, para que me traiga los ultimos 10 mensajes. Pero a a partir del ultimo. Porque si pones ASC el primer de todos es el numero 1, y de ahi agarra 10. Pero si pones DESC el ultimo de todos es de los primeros.
          //No vamos a usar un PUSH porque sino el elemento se inserta como se inserta habitualmente, y en este caso queremos insertarlo en la primera posicion siempre. 
          //UNSHIFT inserta nuevos elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
          this.chats.unshift(m);
        }
      })
    );
  }

  puntuacion()
  {
    // const col =  this.firestore.collection("HighScore", ref=> (ref.orderBy("puntaje", "desc"), ref.where("juego", "==", "Ahorcado")).limit(10));
    // return col.valueChanges();
    const col =  this.firestore.collection("HighScore", ref=> ref.orderBy("puntaje", "desc"));
    return col.valueChanges().pipe(map((data:any[])=>{
      this.ahorcado = [];
      this.mayormenor = [];
      this.preguntados = [];
      this.reflejos = [];
      for(let d of data)
      {
        switch(d.juego)
        {
          case 'Ahorcado':
            // console.log(d.puntaje);
            this.ahorcado.push(d);
            break;
          case 'Mayor Menor':
            // console.log(d.puntaje);
            this.mayormenor.push(d);
            break;
          case 'Preguntados':
            // console.log(d.puntaje);
            this.preguntados.push(d);
            break;
          case 'Reflejos':
            // console.log(d.puntaje);
            this.reflejos.push(d);
            break;
        }
      }
    }));
  }

  // puntuacionMayorMenor()
  // {
  //   const col =  this.firestore.collection("HighScore", ref=> (ref.orderBy("puntaje", "desc"), ref.where("juego", "==", "Mayor Menor")).limit(10));
  //   return col.valueChanges();
  // }

  // puntuacionPreguntados()
  // {
  //   const col =  this.firestore.collection("HighScore", ref=> (ref.orderBy("puntaje", "desc"), ref.where("juego", "==", "Preguntados")).limit(10));
  //   return col.valueChanges();
  // }
}

