import { Component } from '@angular/core';
import { ITEMS } from 'src/assets/menu';

@Component({
  selector: 'app-category',
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
export class CategoryComponent {
  menu = ITEMS;
}
