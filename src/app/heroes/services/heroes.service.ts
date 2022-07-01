import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';

// No lo importa automaticamente, pues queda a nuestra decision si lo queremos proveer de manera local o global. 
// Con root queda global y es lo recomendable, así podemos inyectarlo en el componente que requiramos.
@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }

  getHeroePorId( id:string ):Observable<Heroe>{
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`)
  }
}
