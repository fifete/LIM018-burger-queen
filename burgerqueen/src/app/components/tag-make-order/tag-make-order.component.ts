import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-make-order',
  templateUrl: './tag-make-order.component.html',
  styleUrls: ['./tag-make-order.component.css']
})
export class TagMakeOrderComponent implements OnInit {
  navbarTabs = [ {textS: "RP", text: "Realizar pedido", link: "/order"}, {textS: "PE", text: "Pedido por entregar", link: "/deliver"} ]

  constructor() { }

  ngOnInit(): void {
  }
  
  // Get the current date and time as a date-time value.
  today: number = Date.now();

}