import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './userdetail.component';
import { UserInfoComponent } from './userinfo.component';
import { NotFoundComponent } from './notfound.component';
import { UserInfoGuard } from './userinfo.guard';

const ROUTES:Routes = [
	{path: '', component: UserComponent },
	{path: 'error', component: NotFoundComponent },
	{path: ':_id', canActivate: [UserInfoGuard], component: UserInfoComponent }
];

@NgModule({
	imports: [ CommonModule, HttpClientModule, RouterModule.forChild(ROUTES) ],
	declarations: [ UserComponent, UserDetailComponent, UserInfoComponent, NotFoundComponent ],
	providers: [ DataService, HttpClient, UserInfoGuard ],
	bootstrap: [ UserComponent ]
})
export class UserModule{
	
}