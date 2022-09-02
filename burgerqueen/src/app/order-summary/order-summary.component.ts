import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  //templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  template: `
    <div>
      <app-input
      [label] = "label"
      [label2] = "label2"
      [type] = "type"
      [type2] = "type2"
      >{{label}}</app-input>
      <table>
          <tr>
            <th>Producto</th>
            <th>Unidades</th>
            <th>s./</th>
          </tr>
          <tr>
              <td>cafe</td>
              <td>  
                  <span>+</span>
                  <p>1</p>
                  <span>-</span> 
              </td>
              <td>5.90</td>
          </tr>
          <tr>
              <td>Total</td>
              <td></td>
              <td>$5.90</td>
          </tr>
      </table>
  </div>
  `
})
export class OrderSummaryComponent implements OnInit {
  label = 'Cliente';
  label2 = 'N° de mesa';
  type = 'text';
  type2 = 'number';
  
  constructor() { }

  ngOnInit(): void {
  }

}
