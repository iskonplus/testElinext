import { Component, OnInit } from '@angular/core';
import { UserPageService } from 'src/app/services/user-page.service';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user = {
    birth: String,
    city: String,
    country: String,
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    phone: String,
    work: String,
    studied: String,
    yearsOfStudy: String,
    yearsOfWork: String,
    married: String,
    role: 'user'
  };


  constructor(private userPageService: UserPageService) { }

  ngOnInit(): void {
    this.user = this.userPageService.getUserInfo();
  }

  zzz() {
    // this.user.studied.push('');
    console.log(this.user.studied);
  }

  submitForm() {
    this.userPageService.saveUserInfo(this.user);
  }




}
