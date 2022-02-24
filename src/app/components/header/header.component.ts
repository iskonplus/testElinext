import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = '';

  constructor(private userLoginService: UserLoginService, private router: Router) { }

  ngOnInit(): void {
    this.title = this.userLoginService.activeUser?.firstName;
  }

  clickLogOut() {
    this.userLoginService.logOut();
    this.router.navigate(['/']);
    this.title = '';
  }

  clickLogIn() {
    this.router.navigate(['/', 'login']);
  }

  goHome() {
    this.router.navigate(['/', this.userLoginService.activeUser.role]);
  }


}
