import { Component, Input } from '@angular/core'

@Component({
	selector: 'myLi',
	template: '<li>{{data}}</li>',
	styles: [],
})
export class DumpComponent{
	@Input() data:string;
}