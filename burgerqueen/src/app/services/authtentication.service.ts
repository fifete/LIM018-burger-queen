import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
// import * as auth from 'firebase/auth';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class  AuthtenticationService {

  constructor(
    public auth: AngularFireAuth,
    public router: Router
    ) {

      this.auth.authState.subscribe((user) => {
        if (user) {
            this.router.navigate(['order'])
        }
      })
    }
  async SignIn(email: string, password:string) {
    try{
      await this.auth.signInWithEmailAndPassword(email, password)
      console.log('logeado');
      // return Promise.resolve("logeado");
      return 'Exito'
    } catch (err: any) {
      if(err.message == 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).')
      return 'Ingrese una contraseña correcta'
      // return Promise.resolve("Ingrese una contraseña correcta");

    }
  }
/*    SignIn(email: string, password:string) {
      return "logeado";
   } */

  async SignOut() {
    await this.auth.signOut()
    await this.router.navigate(['login']);
  }
}
