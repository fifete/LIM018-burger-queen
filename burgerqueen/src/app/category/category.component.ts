import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/assets/menu';

@Component({
  selector: 'app-category',
  //templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  template: `
  <section>
    <app-menu-item
    *ngFor="let item of menu"
    [item] = "item"
    >
    </app-menu-item>
  </section>
  `
})
/* export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
export class CategoryComponent {
  menu = ITEMS;
}
