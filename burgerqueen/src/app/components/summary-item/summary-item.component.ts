import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { MenuItemServiceTs } from 'src/app/services/menu-item.service'; 
@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.css']
})
export class SummaryItemComponent implements OnInit {
  trash= faTrashCan
  // accumulator = 1;
  @Input() filteredItem;
  
  constructor(public menuItemService : MenuItemServiceTs) {}
  
  ngOnInit(): void { }

  counter(value:string) {
    let itemsFromOrder = this.menuItemService.filteredItems
    
    for (const key in itemsFromOrder) {
      if (itemsFromOrder[key].id === this.itemRow.nativeElement.id) {
        let currentItem = itemsFromOrder[key]
        console.log(itemsFromOrder[key].quantity);
        
        // return currentItem.quantity= this.accumulator
        if(value === 'increase') {
          currentItem.quantity++;
        } else if ( currentItem.quantity > 1) {
          currentItem.quantity--;
            // this.accumulator = ( this.accumulator < 10 ) ?  0 + this.accumulator : this.accumulator;
        }
      } 
    }
    console.log(JSON.stringify(itemsFromOrder));
    
    // currentQuantity = this.accumulator
    // console.log(`${property}: ${object[property]}`);
    // let quantity = this.menuItemService.filteredItems.find(item => item.id === this.itemRow.nativeElement.dataset.id)
  }
  
  @ViewChild('itemRow') itemRow: ElementRef;
  
  
  
/*   getCurrentItem(order){
    for (const key in order) {
      if (order[key].id === this.itemRow.nativeElement.id) {
        let currentItem = order[key]
        console.log(order[key].quantity);
        
        return currentItem.quantity
      } 
    }
  } */
/*   ngAfterViewInit() {
    console.log(this.itemRow.nativeElement.id);
  } */
}
