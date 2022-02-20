import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})

export class UserLoginComponent implements OnInit {
  hide = true;
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  errorLogIn = 'p_error';
  errorLogInTwo = 'p_error';

  userLoginData = {
    email: '',
    password: '',
  }

  constructor(private router: Router, private userLoginService: UserLoginService) { }

  ngOnInit(): void { }

  onFocus(userForm: any) {
    userForm.controls.input.value.length > 0 ?
      this.errorLogIn = 'p_error' :
      (this.errorLogIn = 'p_error active', this.errorLogInTwo = 'p_error');
  }

  submitLogin(userForm: any) {
    if (userForm.controls.input.value.length < 1) {
      this.errorLogIn = 'p_error active';

    } else {
      this.errorLogIn = 'p_error';

      if (this.userLoginService.userLogin(this.userLoginData)) {
        this.router.navigate(['/', this.userLoginService.role]);
      } else {
              this.errorLogInTwo = 'p_error'
              this.errorLogInTwo = 'p_error two active';
      }

    }
  }

  openRregistration(event: Event) {
    event.preventDefault();
    this.router.navigate(['/', 'registration']);
  }
}


