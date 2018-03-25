import { NgModule,Injectable } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate, CanActivateChild } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentComponent } from './investment/investment.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { InterviewComponent } from './interview/interview.component';
import { InsuranceTravelComponent } from './insurance-travel/insurance-travel.component';
import { InsuranceMotorComponent } from './insurance-motor/insurance-motor.component';
import { LoginComponent } from './login/login.component';


//Guard
export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}

export class AlwaysAuthChildrenGuard implements CanActivateChild {
  canActivateChild() {
    console.log("AlwaysAuthChildrenGuard");
    return true;
  }
}

export class UserService {
  isLoggedIn(): boolean {
    return false;
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: UserService, private router: Router) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) { 
      return true;
    } else {
      console.log("You don't have permission to view this page"); 
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'insurance',
    	canActivateChild: [AlwaysAuthChildrenGuard],
		component: InsuranceComponent,
		/*children: [
			{
				path: 'insurance-travel',
				component: InsuranceTravelComponent
			},
			{
				path: 'insurance-motor',
				component: InsuranceMotorComponent
			}
		]*/
	},
	{
		path: 'credit-card',
		component: CreditCardComponent
	},
	{
		path: 'loans',
		component: LoansComponent
	},
	{
		path: 'about/:id',
		component: AboutComponent
	},
	{
		path: 'investment',
		component: InvestmentComponent
	},
	{
		path: 'profile',
    	canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
		component: ProfileComponent
	},
	{
		path: 'interview',
		component: InterviewComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'insurance-travel',
		component: InsuranceTravelComponent
	},
	{
		path: 'insurance-motor',
		component: InsuranceMotorComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AlwaysAuthGuard,
    AlwaysAuthChildrenGuard,
    UserService,
    OnlyLoggedInUsersGuard
  ]
})
export class AppRoutingModule { }
