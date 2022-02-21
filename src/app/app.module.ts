import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components//header/header.component';
import { FooterComponent } from './components//footer/footer.component';
import { MainComponent } from './components//main/main.component';
import { UserLoginModule } from './pages/user-login/user-login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationModule } from './pages/registration/registration.module';
import { UserPageModule } from './pages/user-page/user-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginModule,
    BrowserAnimationsModule,
    RegistrationModule,
    UserPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
