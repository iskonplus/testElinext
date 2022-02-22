import { Component, OnInit } from '@angular/core';
import { UserPageService } from 'src/app/services/user-page.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersInfo: UserInfo[] = [];

  constructor(private userPageService: UserPageService) { }

  ngOnInit(): void {
    this.usersInfo = this.userPageService.getUsersInfo()
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
