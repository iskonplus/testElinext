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
    this.userLoginService.userFullName$.subscribe(name => {
      this.title = name;
    })
  }

  clickLogOut() {
    this.userLoginService.logOut();
    this.router.navigate(['/']);
    this.title = '';
  }

  clickLogIn() {
    this.router.navigate(['/', 'login']);
  }


}
