import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.css']
})
export class SummaryItemComponent implements OnInit {
  trash= faTrashCan
  accumulator = 1;
  @Input() filteredItem;
  
  constructor() { }
  
  ngOnInit(): void { }

  counter(value:string) {
    switch(value){
      case 'increase':
        this.accumulator++;
        break
      case 'decrease':
        this.accumulator--
        break;
      default:
        this.accumulator = 1;
        break;

    }
  }

}
