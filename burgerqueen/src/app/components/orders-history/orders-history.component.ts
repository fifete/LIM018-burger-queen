import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {
  navbarTabs = [ 
    {textS: "RP", text: "Registro de personal", link: "/register"},
    {textS: "HP", text: "Historial de pedidos", link: "/history"}
  ]
  orderItems:any =[]

  constructor(
    public firestore: FirestoreService,
    public menuItemService: MenuItemServiceTs
  ) { }

  ngOnInit(): void { this.listOrdes('finalizado')}

  listOrdes(state:string) {
    this.firestore.getOrdersByState(state).subscribe( doc => {
        this.orderItems = [];
        doc.forEach(document => {
          let docData:any = document.payload.doc.data();
          let finalHour = docData.finalHour
          let initialHour = docData.initialHour
          let timeElapsed = this.getTime(initialHour, finalHour)
          this.orderItems.push({
            timeElapsed: timeElapsed,
            ...this.menuItemService.saveOrder(docData)
          })
        });
      })
  }
  getTime(initial, final) {
    let time;
    let [h, m] = initial.split(':');
    let [hF, mF] = final.split(':');
    const res = (hF*60 + parseInt(mF)) - (h*60 + parseInt(m))
    if(res>60){
      let hours = res/60;
      time = Math.floor(hours)
      let minutes = res-(60*time)
      time = Math.floor(hours).toString() + ':' + minutes + ' hrs'
    } else {
      time = res.toString() + ' min'
    }
    return time
  }
}
