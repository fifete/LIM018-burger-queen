import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.css'],
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input('label') labelName = 'no hay, no existe';
  @Input('type') type = 'text';
  @Input('placeholder') placeholder = '***'

  constructor() { }

  ngOnInit(): void {
  }

}
