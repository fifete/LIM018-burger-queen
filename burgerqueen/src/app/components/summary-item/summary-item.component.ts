import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.css']
})
export class SummaryItemComponent implements OnInit {
  trash= faTrashCan
  accumulator:number = 1;
  @Input() filteredItem;
  
  constructor() { }
  
  ngOnInit(): void { }

  counter(value:string) {
    if(value === 'increase') {
      this.accumulator++;
    } else if ( this.accumulator > 1 && value === 'decrease') {
        this.accumulator--;
    }
  }

}
