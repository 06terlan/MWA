import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<myUl [strArray]="strArray"></myUl>',
  styles: ['']
})
export class AppComponent {
  strArray:string[] = ["Tarlan", "Oljaz", "Zair"];
}
