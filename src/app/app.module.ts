import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentComponent } from './investment/investment.component';
import { ProfileComponent } from './profile/profile.component';
import { InterviewComponent } from './interview/interview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InsuranceComponent,
    CreditCardComponent,
    LoansComponent,
    InvestmentComponent,
    ProfileComponent,
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
