import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'insurance',
		component: InsuranceComponent
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
		component: ProfileComponent
	},
	{
		path: 'interview',
		component: InterviewComponent
	},
	{
		path: 'insurance-travel',
		component: InsuranceTravelComponent
	},
	{
		path: 'insurance-motor',
		component: InsuranceMotorComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
