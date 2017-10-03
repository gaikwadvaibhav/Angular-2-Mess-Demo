// tslint:disable-next-line:eofline
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './ForgotPass/forgotpass/forgotpass.component';
import { ResetpassComponent } from './ForgotPass/resetpass/resetpass.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'forgotpass', component: ForgotpassComponent},
    { path: 'resetpass', component: ResetpassComponent}
 ];

export const MyRoutingModule = RouterModule.forRoot(routes);
