import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.css'],
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input('label') labelName = 'no hay, no existe';
  @Input('label2') labelClient = 'no hay, no existe';
  @Input('type') type = 'text';
  @Input('type2') type2 = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
