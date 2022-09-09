import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text:string
  constructor(
    public authService : AuthtenticationService
  ) { }

  ngOnInit(): void {
  }

  signInMessageError(email:string, password:string) {
    this.authService.SignIn(email, password)
    .then(() => {})
    .catch(err => {
      if(err.message == 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).')
      { this.text = 'Ingrese una contraseña correcta' }
      else if(err.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).')
      { this.text = 'Ingrese un correo valido' }
      else this.text = 'Verifique su correo o contraseña'
    })
  }

}
