import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </div>
  `,
  styles: [`.counter{padding:5px;border:1px solid red;display: inline-block;}`]
})
export class CounterComponent {
  @Input() counterValue:number = 5;
  @Output() counterChange:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(){
    this.counterChange.emit(this.counterValue);
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

}
