import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin: 1rem 0;
      
      min-height: auto;
    }
    
  `]
})
export class HeroeTarjetaComponent  {

  @Input() heroe!: Heroe; 

}
