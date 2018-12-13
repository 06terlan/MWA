import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="['users']">Users</a>
  <div>
  	<router-outlet></router-outlet>
  </div>
  `,
  styles: ['']
})
export class AppComponent {
  
}
