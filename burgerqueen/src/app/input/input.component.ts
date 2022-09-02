import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  //templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  template: `
    <label>{{labelName}}</label>
    <input type={{type}} />
    
    <label>{{labelClient}}</label>
    <input type={{type}} />
  `
})
export class InputComponent implements OnInit {
  @Input('label') labelName = 'no hay, no existe';
  @Input('label2') labelClient = 'no hay, no existe';
  @Input('type') type = 'password';

  constructor() { }

  ngOnInit(): void {
  }

}
