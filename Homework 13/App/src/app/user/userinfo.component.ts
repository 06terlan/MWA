import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
	selector: '',
	template: `
	<div *ngIf="userInfo">
		<div>First Name: {{ userInfo.name.first }}</div>
		<div>Last name: {{ userInfo.name.last }}</div>
		<div>Gender: {{ userInfo.gender }}</div>
		<div>Age: {{ userInfo.dob.age }}</div>
	</div>
	`,
	styles: []
})
export class UserInfoComponent{
	private _id;
	private userInfo;
	constructor(private route:ActivatedRoute, private dataService:DataService, private router:Router){}

	ngOnInit(){
		this._id = this.route.snapshot.params['_id'];
		
		this.dataService.getData().then(d=>{
			this.userInfo = d.results[this._id];
		});
	}
}