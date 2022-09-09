import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
@Component({
  selector: 'app-order-summary',
  styleUrls: ['./order-summary.component.css'],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  filteredItems = this.auth.filteredItems
  constructor(public auth: AuthtenticationService) { 
    console.log(this.auth.filteredItems);
    
  }
  
  ngOnInit(): void {
    
  }
}
