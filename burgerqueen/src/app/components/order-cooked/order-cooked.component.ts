import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
/* import { MenuItemServiceTs } from 'src/app/services/menu-item.service'; */

@Component({
  selector: 'app-order-cooked',
  templateUrl: './order-cooked.component.html',
  styleUrls: ['./order-cooked.component.css']
})
export class OrderCookedComponent implements OnInit {
  navbarTabs = [ {textS: "PN", text: "Pedidos nuevos", link: "/order-for-cook"}, {textS: "PP", text: "Pedido preparados", link: "/order-cooked"} ]
  orderItems:any =[]

  constructor(
    public firestore: FirestoreService,
    //public menuItemService: MenuItemServiceTs,
  ) { }

  ngOnInit(): void { this.listOrdes('preparando')  }
  
  listOrdes(state:string) {
    this.firestore.getOrdersByState(state).subscribe( doc => {
        this.orderItems = [];
        doc.forEach(document => {
          let docData = document.payload.doc.data();
          this.orderItems.push({
            id: document.payload.doc.id,
            state: docData['state'],
            client: docData['client'],
            mesa: docData['mesa'],
            hour: docData['hour'],
            total: docData['totalPrice'],
            items: [...Object.values(docData['items'])]
          })
        });
      })
  }

  changeStateToCooked(id:string) {
    this.firestore.updateOrder(id,{ state: 'entregado'})
    .then(() => console.log('estado cambiado') )
  }

}
