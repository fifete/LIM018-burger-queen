import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service'; 
@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.css']
})
export class SummaryItemComponent implements OnInit {
  trash= faTrashCan
  itemsFromOrder = this.menuItemService.filteredItems
  @Input() filteredItem;
  
  constructor(public menuItemService : MenuItemServiceTs) {}
  
  ngOnInit(): void { }

  counter(value:string) {
    

    for (const key in this.itemsFromOrder) {
      if (this.itemsFromOrder[key].id === this.itemRow.nativeElement.id) {
        let currentItem = this.itemsFromOrder[key]
        console.log(this.itemsFromOrder[key].quantity);
        
        if(value === 'increase') {
          currentItem.quantity++;
        } else if ( currentItem.quantity > 1) {
          currentItem.quantity--;
        }
      } 
    }
  }

  deleteItem(id:string) {
    delete this.itemsFromOrder[id];
    console.log(this.itemsFromOrder);
    
  }
  
  @ViewChild('itemRow') itemRow: ElementRef;
  
  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
