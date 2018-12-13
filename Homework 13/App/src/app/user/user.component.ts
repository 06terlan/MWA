import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: '',
	template: `
		<ul>
			<li *ngFor="let user of users;let num = index;"> <user-detail [data]="user" [_id]="num"></user-detail> </li>
		</ul>
	`,
	styles: []
})
export class UserComponent{
	private users;
	constructor(private data : DataService){

	}

	ngOnInit(){
		this.data.getData().then(d=>{ this.users = d.results; });
	}
}