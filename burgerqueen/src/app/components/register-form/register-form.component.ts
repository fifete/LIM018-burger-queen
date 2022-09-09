import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  username:string;
  fullname:string;
  role:string;
  email:string;
  password:string;

  constructor(
    public authService: AuthtenticationService
  ) { }

  ngOnInit(): void {
  }

  createUserFirestore() {
    let userNewAccount:any = {
      email : this.email,
      password : this.password
    };

    let userData:User = {
      username : this.username,
      fullname : this.fullname,
      email : this.email,
      role : this.role,
    };

    this.authService.SignUp(userNewAccount)
    .then((resp) => {
      let user:any = resp.user;
      this.authService.setUserData(userData, user.uid) 
    })
    .catch(err => {
      console.log(err)
    })
  }

}
