import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public firestore: AngularFirestore ) { }

  setUserData(user:User, uid:string) {
    const userRef = this.firestore.collection('users').doc(uid)
     return userRef.set(user, {
     merge:true,
     });
   }
 
   getUserByUid(uid:string){
    return this.firestore.collection('users').doc(uid).valueChanges()
   }
   
}
