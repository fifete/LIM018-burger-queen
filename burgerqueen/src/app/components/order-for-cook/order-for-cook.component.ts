import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
/* import { MenuItemServiceTs } from 'src/app/services/menu-item.service';*/
@Component({
  selector: 'app-order-for-cook',
  templateUrl: './order-for-cook.component.html',
  styleUrls: ['./order-for-cook.component.css']
})
export class OrderForCookComponent implements OnInit {
  navbarTabs = [ {textS: "PN", text: "Pedidos nuevos", link: "/order-for-cook"}, {textS: "PP", text: "Pedido preparados", link: "/order-cooked"} ]
  orderItems:any =[]

  constructor( 
    //public menuItemService: MenuItemServiceTs,
    public firestore : FirestoreService
    ) { }
  

  ngOnInit(): void { this.listOrdes('creado')}
  
  listOrdes(state:string) {
    this.firestore.getOrdersByState(state).subscribe( doc => {
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

  changeStateToCooking(id:string) {
    this.firestore.updateOrder(id,{ state: 'preparando'})
    .then(() => console.log('estado cambiado') )
  }

}
