import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserListComponent } from './pages/user-list/user-list.component';


const routes: Routes = [
	{ path: '', component: UserListComponent},
	{ path: 'login', component: UserLoginComponent},
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'user', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
