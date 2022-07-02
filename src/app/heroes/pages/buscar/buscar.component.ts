import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
  .container{
    height: 2rem !important;
  }
  `]
})
export class BuscarComponent implements OnInit {

  termino: string = ''
  heroes: Heroe[] = []
  heroeSeleccionado!: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando(){

    this.heroesService.getSugerencias( this.termino.trim() )
      .subscribe( res => this.heroes = res)

  }
  
  // veamos que devuelve de data y de tipado.. aers
  seleccion(evento: MatAutocompleteSelectedEvent ){

    if(!evento.option.value){
      this.heroeSeleccionado = undefined
      return;
    }

    // console.log(evento.option.value);
    // usamos el tipado jejeje
    const heroe: Heroe = evento.option.value
    // asignamos el valor del termino al heroe seleccionado, eso nos devolvera el nombre en el value del input, en vez de [object, object] etc
    this.termino = heroe.superhero

    this.heroesService.getHeroePorId( heroe.id! )
      .subscribe( heroe =>{ this.heroeSeleccionado = heroe }) 
  }
}
