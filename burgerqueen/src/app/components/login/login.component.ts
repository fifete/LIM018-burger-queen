import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text: Promise<string | undefined>;
  constructor(
    public authService : AuthtenticationService
  ) { }

  ngOnInit(): void {
  }

  // signin(): void {
  //   this.authService.SignIn(userName.value, userPassword.value)
  // }
}
