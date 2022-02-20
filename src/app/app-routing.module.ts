import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { RegistrationComponent } from './pages/registration/registration.component';


const routes: Routes = [
	{ path: '', component: UserLoginComponent},
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'user', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
