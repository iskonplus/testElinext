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
    education: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    phone: null,
    studied: null,
    married:null,
    role: 'user'
  };

  // userForm = {
  //   birth: '',
  //   city: '',
  //   country: '',
  //   education: '',
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  //   password: '',
  //   phone: '',
  // };

  constructor(private userPageService: UserPageService) { }

  ngOnInit(): void {
    this.user = this.userPageService.getUserInfo();
  }




}
