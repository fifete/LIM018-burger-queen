import { Component, OnInit} from '@angular/core';
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
  ngOnInit(): void {}
  calcTotal() {
    if (!this.isArrayEmpty()) {
      if (Object.keys(this.filteredItems).length < 2) {
        const targetProduct:any = Object.values(this.filteredItems)[0]
        return targetProduct.quantity * targetProduct.price;
      } else {
        // return this.filteredItems.reduce((a, b) => (a.quantity * a.price) + (b.quantity * b.price));
        // const total = Object.values(this.filteredItems).reduce(({a}, {b}) => (a.quantity * a.price) + (b.quantity * b.price), 0)
        let total = 0
        for (const key in this.filteredItems) {
          console.log(this.filteredItems)
          let subTotal = this.filteredItems[key].price * this.filteredItems[key].quantity
          return total += subTotal
        }
      }
    } else {
      return 0;
    }
  }

  isArrayEmpty(): boolean {
    return Object.keys(this.filteredItems).length < 1
  }
}
