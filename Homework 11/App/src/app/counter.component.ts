import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </div>
  `,
  styles: []
})
export class CounterComponent {
  @Input() counterValue:number = 0;
  constructor() { }

  increase(){
    this.counterValue++;
  }

  decrease(){
    this.counterValue--;
  }

}
