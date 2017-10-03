import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './ForgotPass/forgotpass/forgotpass.component';
import { ResetpassComponent } from './ForgotPass/resetpass/resetpass.component';
import { MyRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    ResetpassComponent,
    HomepageComponent
   ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbModule,
     MaterializeModule,
     MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
