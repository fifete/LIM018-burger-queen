import { Component, OnInit, Input, ElementRef, ViewChild , AfterViewInit  } from '@angular/core';
import { Item } from 'src/assets/menu';

@Component({
  selector: 'app-menu-item',
  styleUrls: ['./menu-item.component.css'],
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() item!: Item;
  @ViewChild("additem") additem: ElementRef;

  ngAfterViewInit() {
    console.log(this.additem);
  }
}
