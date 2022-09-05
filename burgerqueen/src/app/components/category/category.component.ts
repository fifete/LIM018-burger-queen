import { Component } from '@angular/core';
import { ITEMS } from 'src/assets/menu';

@Component({
  selector: 'app-category',
  styleUrls: ['./category.component.css'],
  templateUrl : './category.component.html',
})
export class CategoryComponent {
  menu = ITEMS;
}
