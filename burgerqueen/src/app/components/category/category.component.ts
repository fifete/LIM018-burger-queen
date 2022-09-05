import { Component } from '@angular/core';
import { ITEMS } from 'src/assets/menu';

@Component({
  selector: 'app-category',
  styleUrls: ['./category.component.css'],
  templateUrl : './category.component.html',
})
export class CategoryComponent {
  menu = ITEMS;

  showBreakfast(menu: any[]):any {
    return menu.filter(item => item.category === 'desayuno');
  }
}
