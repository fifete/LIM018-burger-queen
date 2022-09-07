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
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async SignOut() {
    await this.auth.signOut()
    await this.router.navigate(['login']);
  }
}
