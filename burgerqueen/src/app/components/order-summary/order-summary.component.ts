import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-order-summary',
  styleUrls: ['./order-summary.component.css'],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  filteredItems:any = this.menuItemService.filteredItems

  @ViewChild('client') client: ElementRef;
  @ViewChild('mesa') mesa: ElementRef;

  constructor (
    public menuItemService : MenuItemServiceTs, 
    public firestore: FirestoreService
  ) { }

  ngOnInit(): void {}

  calcTotal() {
    if (!this.isArrayEmpty()) {
      if (Object.keys(this.filteredItems).length < 2) {
        const targetProduct:any = Object.values(this.filteredItems)[0]
        return targetProduct.quantity * targetProduct.price;
      } else {
        let total = 0
        for (const key in this.filteredItems) {
          let subTotal = this.filteredItems[key].price * this.filteredItems[key].quantity
          total += subTotal
        }
        return total
      }
    } else {
      return 0;
    }
  }

  isArrayEmpty(): boolean {
    return Object.keys(this.filteredItems).length < 1
  }

  sendOrder(client:string,mesa:string){
    this.filteredItems.totalPrice = this.calcTotal()
    let date = new Date();
    let hour = date.getHours() + ' : ' +  date.getMinutes()
    let orderData = {
      client,
      mesa,
      hour,
      ...this.filteredItems
    }
    this.firestore.addMenuOrder(orderData)
    .then(() => console.log('data agregada'))
    this.menuItemService.clearOrder()
    this.client.nativeElement.value = ""
    this.mesa.nativeElement.value = ""
  }

  cancelOrder(){
    this.menuItemService.clearOrder()
  }

}
