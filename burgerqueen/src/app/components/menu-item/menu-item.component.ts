import { Component, OnInit, Input, ElementRef, ViewChild , AfterViewInit  } from '@angular/core';
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

  ngAfterViewInit() {
    console.log(this.additem);
  }
    /* this.button.addEventListener('click', (clickEvent: MouseEvent) => {
      console.log('Click Event Details: ', clickEvent)
    }) */
  /* ngAfterViewInit() {
    console.log(this.addItem.nativeElement);
  } */
  /* constructor() {
    @ViewChild('addItem') button: ElementRef;
    this.button.addEventListener('click', (clickEvent: MouseEvent) => {
      console.log('Click Event Details: ', clickEvent)
    })
    ngAfterViewInit() {
      console.log(this.input.nativeElement);
    }
  } */

  /* ---- Change file name ----- */
  constructor(public menuItemService : MenuItemServiceTs) {}
  getItemInfo (name:string, price:string) {
    let item = {
      name: name,
      price: price
    }
    this.menuItemService.addItemToSummaryTable(item)
  }
}

/* export class MenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
