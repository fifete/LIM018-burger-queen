import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.css']
})
export class SummaryItemComponent implements OnInit {
  trash= faTrashCan
  @Input() filteredItem;
  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.filteredItem);
  }

}
