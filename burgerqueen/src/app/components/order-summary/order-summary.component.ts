import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-order-summary',
  styleUrls: ['./order-summary.component.css'],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  trash = faTrashCan
  constructor() { }

  ngOnInit(): void {
  }

}
