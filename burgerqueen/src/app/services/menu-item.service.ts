import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceTs {
  filteredItems = {}
  orderItems:any = []
  constructor( public firestore : FirestoreService ) { }

  addItemToSummaryTable(item:any) {
    this.filteredItems[item.id] = item
  }

  clearOrder() {
    for (let items in this.filteredItems ) delete this.filteredItems[items];
  }

  saveOrder(docData:any) {
    return {
      state: docData['state'],
      client: docData['client'],
      mesa: docData['mesa'],
      hour: docData['hour'],
      total: docData['totalPrice'],
      items: [...Object.values(docData['items'])]
    }
  }

}
