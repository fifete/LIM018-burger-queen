import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-make-order',
  templateUrl: './tag-make-order.component.html',
  styleUrls: ['./tag-make-order.component.css']
})
export class TagMakeOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showBreakfast() {
    console.log('mostrando menu')
  }

  showLunch() {
    console.log('mostrando lunch')
  }

  // Get the current date and time as a date-time value.
  today: number = Date.now();
}