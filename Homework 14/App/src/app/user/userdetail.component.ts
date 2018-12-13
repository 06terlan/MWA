import { Component, Input } from '@angular/core';


@Component({
	selector: 'user-detail',
	template: `<a href="#" [routerLink]="[_id]"> {{ data.name.first + " " + data.name.last  }} </a>`,
	styles: []
})
export class UserDetailComponent{
	@Input() data;
	@Input() _id:number;
}