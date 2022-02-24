import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { RegistrationModule } from '../registration/registration.module';
import { UserPageModule } from '../user-page/user-page.module';





@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    RegistrationModule,
    UserPageModule
  ]
})
export class AdminPageModule { }
