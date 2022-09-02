import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/assets/menu';

@Component({
  selector: 'app-menu-item',
  //templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  template: `
  <div>
    <div>
        <p>{{item.name}}</p>
        <p>{{item.price}}</p>
        <button>Agregar item</button>
    </div>
  </div>
  `
})
export class MenuItemComponent {
  @Input() item!: Item;
}

/* export class MenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
/* export class 
@Input() hero!: Hero; */