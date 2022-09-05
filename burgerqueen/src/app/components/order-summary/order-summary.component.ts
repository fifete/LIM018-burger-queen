import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  //templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  label = 'Cliente';
  label2 = 'N° de mesa';
  type = 'text';
  type2 = 'number';

  constructor() { }

  ngOnInit(): void {
  }

}
