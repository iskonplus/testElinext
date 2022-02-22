import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserPageService } from 'src/app/services/user-page.service';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user = {
    birth: null,
    city: null,
    country: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    phone: null,
    work: null,
    studied: null,
    yearsOfStudy: null,
    yearsOfWork: null,
    married: null,
    role: 'user'
  };

  constructor(private userPageService: UserPageService, private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.userLoginService.getFirstName();
    this.user = this.userPageService.getActiveUserInfo();
  }

  zzz() {
    console.log(this.user.studied);
  }

  submitForm() {
    this.userPageService.saveUserInfo(this.user);
  }

}
