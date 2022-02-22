import { Component, OnInit } from '@angular/core';
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

  usersInfo: UserInfo[] = [];


  constructor(private userPageService: UserPageService) { }

  ngOnInit(): void {
    this.user = this.userPageService.getActiveUserInfo();
    this.usersInfo = this.userPageService.getUsersInfo().filter((el: UserInfo) => {
      return el.email !== this.user.email && el.password !== this.user.password;
    });
  }

  zzz() {
    console.log(this.user.studied);
  }

  submitForm() {
    this.userPageService.saveUserInfo(this.user);
  }




}

interface UserInfo {
  birth: string;
  city: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  work: string;
  studied: string;
  yearsOfStudy: string;
  yearsOfWork: string;
  married: string;
  role: string;
}
