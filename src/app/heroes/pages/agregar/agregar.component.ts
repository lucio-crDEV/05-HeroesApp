import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';


import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img { width: 100%;
        border-radius: 10px;
      }
  `]
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
    private heroesServices: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {


    if (!this.router.url.includes('editar')) {
      return
    }

    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.heroesServices.getHeroePorId(id)))
      .subscribe(heroe => this.heroe = heroe)


  }


  guardar() {

    if (this.heroe.superhero.trim().length === 0 && this.heroe.alt_img === '') { return }


    if (this.heroe.id) {
      // actualizar
      this.heroesServices.editarHeroe(this.heroe)
        .subscribe(heroe => {
          this.mostrarSnakbar('Registro Actualizado')
          // this.router.navigateByUrl(`/heroes/editar/${heroe.id}`)
          // location.reload()
        })
    } else {
      // guardar
      this.heroesServices.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigateByUrl(`/heroes/editar/${heroe.id}`);
          this.mostrarSnakbar('Registro Creado')
        })
    }
  }


borrarHeroe(){

  const dialog = this.dialog.open( ConfirmarComponent, {
    width: '300px',
    data: this.heroe
  } )

  dialog.afterClosed().subscribe(res => {
    
    if( res ){
      this.heroesServices.borrarHeroe( this.heroe.id! )
        .subscribe( res => {
          this.router.navigate(['/heroes'])
        })
    }

  })
}

mostrarSnakbar( mensaje: string ){
  this.snackBar.open(mensaje, 'ok!', {
    duration: 2500
  } )
}



}
