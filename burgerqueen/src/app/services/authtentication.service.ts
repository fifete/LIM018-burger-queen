import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class  AuthtenticationService {
  currentUser:any;
  userData:any;

  /* ---- Change file name ----- */
  allItems = []
  filteredItems = {}
  
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    ) {

      this.auth.authState.subscribe((user) => {
        if(user){
          this.userData = user;
          sessionStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
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

  /* ---- Change file name ----- */
  /* addItemToSummaryTable(item:{}) {
    this.allItems.push(item)} */
  addItemToSummaryTable(item:any) {
    this.filteredItems[item.name] = item
  }

}
