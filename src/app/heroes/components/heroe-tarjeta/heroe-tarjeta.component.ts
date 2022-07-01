import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin: 1rem 0;
      min-width: 195px;
      min-height: 655px;
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
export class HeroeTarjetaComponent  {

  @Input() heroe!: Heroe; 

}
