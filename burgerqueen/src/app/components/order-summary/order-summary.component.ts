import { Component, OnInit } from '@angular/core';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';
@Component({
  selector: 'app-order-summary',
  styleUrls: ['./order-summary.component.css'],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  filteredItems:any = this.menuItemService.filteredItems
  constructor(public menuItemService : MenuItemServiceTs) { 
    console.log(this.menuItemService.filteredItems);
    
  }
  
  ngOnInit(): void { }

  /*
   <!-- *ngFor="let filteredItem of filterdItems() "
      [filteredItem] = "filteredItem" --> 
  filterdItems() {
   let set = new Set( this.auth.allItems.map(i => JSON.stringify(i) ) )
   return Array.from(set).map( i => JSON.parse(i))
  } */

}
