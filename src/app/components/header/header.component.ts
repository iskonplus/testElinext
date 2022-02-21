import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = '';


  constructor(private userLoginService: UserLoginService) { }


  ngOnInit(): void {
    // this.userLoginService.getFirstName();
    this.userLoginService.userFullName$.subscribe(name => {
      this.title = name;
    })
  }

}
