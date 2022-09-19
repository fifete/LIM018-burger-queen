import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceTs {
  filteredItems = {}
  orderItems:any = []
  constructor() { }

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
