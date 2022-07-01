import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
      margin: 1rem 0;
      min-width: 195px;
      min-height: 55rem;
    }
    @media(max-width: 1280px){
        mat-card{        
        min-height: 770px;
      }   
    }
    @media(max-width: 1024px){
        mat-card{        
        min-height: 740px;
      }   
    }
    @media(max-width: 400px){
        mat-card{        
        min-height: 725px;
      }   
    }
    @media(max-width: 350px){
        mat-card{        
        min-height: 650px;
      }   
    }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(resp => this.heroes = resp
      )
    // .subscribe( console.log )
    // es lo mismo... dejar solo
  }

}
