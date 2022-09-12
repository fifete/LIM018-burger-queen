import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceTs {
  filteredItems = {}

  constructor() { }

  addItemToSummaryTable(item:any) {
    this.filteredItems[item.name] = item
  }
}
