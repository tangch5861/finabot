import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentComponent } from './investment/investment.component';
import { ProfileComponent } from './profile/profile.component';
import { InterviewComponent } from './interview/interview.component';
import { InsuranceTravelComponent } from './insurance-travel/insurance-travel.component';
import { InsuranceMotorComponent } from './insurance-motor/insurance-motor.component';
import { LoginComponent } from './login/login.component';
import { ItemHolderComponent } from './item-holder/item-holder.component';


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
    InterviewComponent,
    InsuranceTravelComponent,
    InsuranceMotorComponent,
    LoginComponent,
    ItemHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
