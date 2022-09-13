import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceTs {
  filteredItems = {}
  constructor() { }

  addItemToSummaryTable(item:any) {
    this.filteredItems[item.id] = item
  }

  clearOrder() {
    for (let items in this.filteredItems ) delete this.filteredItems[items];
  }

  
}
