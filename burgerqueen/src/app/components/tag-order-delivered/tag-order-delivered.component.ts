import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-tag-order-delivered',
  templateUrl: './tag-order-delivered.component.html',
  styleUrls: ['./tag-order-delivered.component.css']
})
export class TagOrderDeliveredComponent implements OnInit {
  navbarTabs = [ {textS: "RP", text: "Realizar pedido", link: "/order"}, {textS: "PE", text: "Pedido por entregar", link: "/deliver"} ]
  orderItems:any =[]
  state = "finalizado"
  buttonAction = "Entregado"
  getOrderTotalTime= this.getOrderTime

  constructor(
    public firestore: FirestoreService,
    public menuItemService: MenuItemServiceTs
  ) { }

  ngOnInit(): void { this.listOrdes('entregado')}

  listOrdes(state:string) {
    this.firestore.getOrdersByState(state).subscribe( doc => {
        this.orderItems = [];
        doc.forEach(document => {
          let docData = document.payload.doc.data();
          this.orderItems.push({
            id: document.payload.doc.id,
            ...this.menuItemService.saveOrder(docData)
          })
        });
      })
  }

/*   getFinalHour() {
    let date = new Date();
    let finalHour = date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
    return finalHour
  } */

  getOrderTime(id:string) {
    let date = new Date();
    let finalHour = date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
    this.firestore.updateOrder(id, { finalHour: finalHour})
  }
}
