import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
	private data;

	constructor(public http: HttpClient){}

	getData() {
		if(this.data){
			return new Promise((resolve,reject)=>{ resolve(this.data); });
		}
		return this.http.get('https://randomuser.me/api/?results=10').toPromise()
			.then(d=>{ this.data = d; return this.data; });
	}
}