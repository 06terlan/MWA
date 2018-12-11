import { Component, Input } from '@angular/core';

@Component({
	selector: 'myUl',
	template: 	`<ul>
					<myLi *ngFor="let str of strArray" [data]="str" [isVisible]="true" loggable></myLi>
				</ul>`,
	styles: ['']
})
export class SmartComponent{
	@Input() strArray:string[];
}