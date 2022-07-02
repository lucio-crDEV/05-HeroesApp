import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
  
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ]

  constructor(
    private heroesServices: HeroesService
  ) { }

  ngOnInit(): void {
  }


  guardar(){

    if( this.heroe.superhero.trim().length === 0 && this.heroe.alt_img ==='' ){ return }

    this.heroesServices.agregarHeroe( this.heroe )
      .subscribe( res => {
        console.log('Respuesta', res);
        
      } )
    
  }

}
