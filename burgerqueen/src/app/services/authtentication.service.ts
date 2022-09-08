import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
// import * as auth from 'firebase/auth';
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})

export class  AuthtenticationService {

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
    ) {

      this.auth.authState.subscribe((user) => {
        if(user){
          if(user.email === 'admin@gmail.com') {
            this.router.navigate(['register'])
          } else {
            this.router.navigate(['order'])
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

  setUserData(user:User, uid:string) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${uid}`
    );
    /* const userData: User = {
      uid: user.uid,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      role: user.role
    } */
    return userRef.set(user, {
      merge:true,
    });
  }


}
