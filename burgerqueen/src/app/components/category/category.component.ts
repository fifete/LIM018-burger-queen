import { Component } from '@angular/core';
import { ITEMS } from 'src/assets/menu';

@Component({
  selector: 'app-category',
  styleUrls: ['./category.component.css'],
  templateUrl : './category.component.html',
})
export class CategoryComponent {
  menu = ITEMS;
  items:any = this.menu.filter(item => item.category === 'desayuno');

  showItems(value:string, menu:any[]) {
    if(value === 'desayuno') {
      this.items = menu.filter(item => item.category === 'desayuno');
    } else {
      this.items = menu.filter(item => item.category != 'desayuno');
    }
  }
}
