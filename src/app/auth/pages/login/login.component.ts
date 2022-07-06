import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  login() {
    // Ir al backend
    // Traer un usuario con un servicio

    this.authService.login()
      .subscribe( resp => {

        console.log(resp)

        if(resp){
          this.router.navigate([`./heroes`])
        }


      })



  }

}
