import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from './data.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class UserInfoGuard implements CanActivate{
	constructor(private dataService : DataService, private router:Router){}

	canActivate(route: ActivatedRouteSnapshot): boolean{
		const _id = route.params['_id'];
		
		this.dataService.getData().then(d=>{
			const userInfo = d.results[_id];

			if(!userInfo){
				this.router.navigate(['users','error']);
				return false;
			}
			else{
				return true;
			}
		});

		return true;
	}
}