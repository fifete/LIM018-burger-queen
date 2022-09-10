import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})

export class  AuthtenticationService {
  currentUser:any;
  userData:any;
  /* ---- Change file name ----- */
  /* allItems = []
  filteredItems = [] */
  filteredItems = {}
  
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
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

  setUserData(user:User, uid:string) {
   const userRef = this.firestore.collection('users').doc(uid)
    return userRef.set(user, {
    merge:true,
    });
  }

  getUserByUid(uid:string){
   return this.firestore.collection('users').doc(uid).valueChanges()
  }

  /* ---- Change file name ----- */
  addItemToSummaryTable(item:any) {
    // console.log('agr. item: ' + JSON.stringify(item))
    // const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
    /* this.allItems.push(item)
    let set= new Set( this.allItems.map(i => JSON.stringify(i) ) )
    let arr = Array.from( set ).map( i => JSON.parse(i));
    console.log(set);
    console.log(arr);
    
    console.log(this.filteredItems.push(...arr));
    return this.filteredItems.push(arr) */

    this.filteredItems[item.name] = item

    /* Argument of type '(text: string, reviver?: (this: any, key: string, value: any) => any) => any' 
    is not assignable to parameter of type '(value: string, index: number, array: string[]) => any'. */
    // this.filteredItems = new Set(this.allItems)
    // return this.filteredItems
    // return this.products
  }

}
