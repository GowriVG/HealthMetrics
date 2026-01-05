import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaloriesComponent } from './dashboard/calories/calories.component';
import { StepsComponent } from './dashboard/steps/steps.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  // PARENT ROUTE
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      // DEFAULT CHILD: Redirect to calories
      { path: '', redirectTo: 'calories', pathMatch: 'full' },
      
      // CHILD ROUTES
      { path: 'calories', component: CaloriesComponent },
      { path: 'steps', component: StepsComponent },

    ]
  }
];