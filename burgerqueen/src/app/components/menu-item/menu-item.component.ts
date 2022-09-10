import { Component, OnInit, Input, ElementRef, ViewChild , AfterViewInit  } from '@angular/core';
import { Item } from 'src/assets/menu';
/* ---- Change file name ----- */
import { AuthtenticationService } from 'src/app/services/authtentication.service';
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

  /* ---- Change file name ----- */
  constructor(public authService : AuthtenticationService) {}
  getItemInfo (name:string, price:string) {
    let item = {
      name: name,
      price: price
    }
    this.authService.addItemToSummaryTable(item)
  }
}
