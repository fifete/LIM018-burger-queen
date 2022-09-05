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

}

/* export class MenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
