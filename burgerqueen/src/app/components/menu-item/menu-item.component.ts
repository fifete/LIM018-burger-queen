import { Component, Input} from '@angular/core';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service';
import { Item } from 'src/assets/menu';
@Component({
  selector: 'app-menu-item',
  styleUrls: ['./menu-item.component.css'],
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() item!: Item;

  /* ---- Change file name ----- */
  constructor(public menuItemService : MenuItemServiceTs) {}
  getItemInfo (itemData:Item) {
    this.menuItemService.addItemToSummaryTable(itemData)
  }
}
