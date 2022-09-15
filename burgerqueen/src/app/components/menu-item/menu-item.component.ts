import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';
import { Item } from 'src/assets/menu';
@Component({
  selector: 'app-menu-item',
  styleUrls: ['./menu-item.component.css'],
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() item!: Item;
  @ViewChild("additem") additem: ElementRef;

  /* ---- Change file name ----- */
  constructor(public menuItemService : MenuItemServiceTs) {}
  getItemInfo (itemData:Item) {
    this.menuItemService.addItemToSummaryTable(itemData)
  }
}
