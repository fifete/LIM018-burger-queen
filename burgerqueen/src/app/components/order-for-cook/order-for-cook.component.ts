import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-for-cook',
  templateUrl: './order-for-cook.component.html',
  styleUrls: ['./order-for-cook.component.css']
})
export class OrderForCookComponent implements OnInit {
  navbarTabs = [ {textS: "PN", text: "Pedidos nuevos", link: "/order-for-cook"}, {textS: "PP", text: "Pedido preparados", link: "/order-cooked"} ]

  constructor() { }

  ngOnInit(): void {
  }

}
