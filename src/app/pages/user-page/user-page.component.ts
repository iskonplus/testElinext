import { Component, OnInit } from '@angular/core';
import { UserPageService } from 'src/app/services/user-page.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user = {
    birth: "",
city: "",
country: "",
education: "",
email: "",
firstName: "",
lastName: "",
password: "",
phone: "",
role: "user",
  };

  constructor(private userPageService: UserPageService ) { }

  ngOnInit(): void {

      this.user = this.userPageService.getUserInfo()[0];
      console.log(this.userPageService.getUserInfo()[0]);

    }




}
