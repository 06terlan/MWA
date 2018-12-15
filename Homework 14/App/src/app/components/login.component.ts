import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDataServcie } from '../services/userdata.service';

@Component({
	selector: '',
	templateUrl: './login.component.html',
	styles: []
})
export class LoginComponent{
	loginForm:FormGroup;
	loginError:boolean = false;

	constructor(formBuilder:FormBuilder, private userDataServcie:UserDataServcie){
		this.loginForm = formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
	}

	onSubmit(){
		this.userDataServcie.loginUser(this.loginForm.value)
			.then((d)=>{
				this.loginError = false;
				console.log(d);
			})
			.catch(err=>{
				this.loginError = true;
			});
	}
}