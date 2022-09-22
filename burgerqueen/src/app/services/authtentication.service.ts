import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class  AuthtenticationService {
  currentUser:any;
  userData:any;

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    ) {

      this.auth.authState.subscribe((user) => {
        if(user){
          this.userData = user;
          if(user.email === 'admin@gmail.com') {
            this.router.navigate(['register'])
          } else if (user.email.includes('mesero')) {
            this.router.navigate(['order'])
          } else if (user.email.includes('chef')) {
            this.router.navigate(['order-for-cook'])
          }
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

  SignUp(user:any) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

}
