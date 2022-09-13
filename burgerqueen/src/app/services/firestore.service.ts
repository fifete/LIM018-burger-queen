import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  productsRef = this.firestore.collection('orders')

  constructor( public firestore: AngularFirestore ) {  }

  setUserData(user:User, uid:string) {
    const userRef = this.firestore.collection('users').doc(uid)
     return userRef.set(user, {
     merge:true,
     });
   }
 
   getUserByUid(uid:string){
    return this.firestore.collection('users').doc(uid).valueChanges()
   }

   addMenuOrder(order:{}) {
   return this.productsRef.add(order)
   }
   
}
