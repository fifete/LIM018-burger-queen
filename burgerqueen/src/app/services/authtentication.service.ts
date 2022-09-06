import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import * as auth from 'firebase/auth';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class  AuthtenticationService {
 /*  userData: any; */

  constructor(
    public auth: AngularFireAuth,
    public router: Router
    ) {  }

  SignIn(email: string, password:string) {
   return this.auth
    .signInWithEmailAndPassword(email, password)
    .then((resp) => {
        this.auth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['order']);
          }
        });
      console.log('usuario logeado')
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}
