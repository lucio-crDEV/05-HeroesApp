import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';
// ojo que no sea de prod
import { environment } from 'src/environments/environment';

// No lo importa automaticamente, pues queda a nuestra decision si lo queremos proveer de manera local o global. 
// Con root queda global y es lo recomendable, así podemos inyectarlo en el componente que requiramos.
@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private baseUrl: string = environment.URL_BASE

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`)
  }

  getHeroePorId( id:string ):Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`)
  }

  getSugerencias( termino: string ): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`)
  }

  agregarHeroe( heroe: Heroe ): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }


}
