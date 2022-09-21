import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Input() orderItems
  @Input() state:string
  @Input() buttonAction
  @Input() getOrderTotalTime
  
  constructor( 
    public firestore:FirestoreService
  ) { }

  ngOnInit(): void {
  }

  changeState(id:string, state:string) {
    this.firestore.updateOrder(id,{ state: state})
  }
}
