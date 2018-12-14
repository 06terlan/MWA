import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';

const ROUTES : Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'dashboard', component: DashboardComponent}
];

export const AppRoutes = RouterModule.forRoot(ROUTES);