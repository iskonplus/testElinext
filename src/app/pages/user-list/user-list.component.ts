import { Component, Input, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserPageService } from 'src/app/services/user-page.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input('user') user:any;

  usersInfo: UserInfo[] = [];

  constructor(private userPageService: UserPageService, private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    // this.userLoginService.createDefaultUsers();
    if (this.user) {
      this.usersInfo = this.userPageService.getUsersInfo().filter((el: UserInfo) => {
        return el.email !== this.user.email && el.password !== this.user.password && el.role !== 'admin';
      });
    } else {
      this.usersInfo = this.userPageService.getUsersInfo();
    }
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
