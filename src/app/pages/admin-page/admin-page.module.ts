import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { RegistrationModule } from '../registration/registration.module';





@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    RegistrationModule
  ]
})
export class AdminPageModule { }
