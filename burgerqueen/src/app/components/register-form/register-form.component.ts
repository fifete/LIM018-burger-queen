import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  authService: AuthtenticationService

  constructor() { }

  ngOnInit(): void {
  }

  createUserFirestore(username:string, fullname:string, role:string, email:string, password:string) {
    this.authService.SignUp(email, password)
    .then((result) => {
      console.log(result)
      console.log('cuenta creada')
      //this.authService.setUserData(result.user)
    })
  }

}
