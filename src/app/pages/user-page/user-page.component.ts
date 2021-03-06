import { Component, Input, OnInit } from '@angular/core';
import { AdminPageService } from 'src/app/services/admin-page.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserPageService } from 'src/app/services/user-page.service';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  @Input('use') use: any;

  activeUser = {
    role: '',
    firstName: '',
    lastName: ''
  }

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

  constructor(private userPageService: UserPageService,
    private userLoginService: UserLoginService,
    private adminPageService: AdminPageService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {

    if (this.use) {
      this.user = this.use;
      this.activeUser = this.userLoginService.activeUser;
    } else {

      this.user = this.userPageService.getActiveUserInfo();
    }
  }

  zzz() {
    console.log(this.user.studied);
    this.notificationService.error('Oops, something went wrong!');
  }

  submitForm() {
    this.notificationService.success(`${this.user.firstName}, information has been changed.`);
    this.userPageService.saveUserInfo(this.user);
  }

  deleteUser(e: any, user: any) {
    if (e.target.innerHTML === "Delete") {
      this.notificationService.natif(`You have deleted a user ${user.firstName}.`)
      e.path[4].remove();
      this.adminPageService.removeUser(user)
    }
  }

}

