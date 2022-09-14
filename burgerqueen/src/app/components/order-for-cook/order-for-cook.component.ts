import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-order-for-cook',
  templateUrl: './order-for-cook.component.html',
  styleUrls: ['./order-for-cook.component.css']
})
export class OrderForCookComponent implements OnInit {
  navbarTabs = [ {textS: "PN", text: "Pedidos nuevos", link: "/order-for-cook"}, {textS: "PP", text: "Pedido preparados", link: "/order-cooked"} ]
  orderItems:any =[]

  constructor( public firestore: FirestoreService ) { }

  ngOnInit(): void { this.listOrdes()  }

  listOrdes() {
    this.firestore.getOrders().subscribe( doc => {
      this.orderItems = [];
      doc.forEach(document => {
        let docData = document.payload.doc.data()
        this.orderItems.push({
          client: document.payload.doc.data()['client'],
          mesa: document.payload.doc.data()['mesa'],
          hour: document.payload.doc.data()['hour'],
          total: document.payload.doc.data()['totalPrice'],
          items: [...Object.values(document.payload.doc.data()['items'])]
        })
      });
    })
  }

}
