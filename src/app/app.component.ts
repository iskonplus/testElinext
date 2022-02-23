import { Component } from '@angular/core';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testElinext';

  constructor(private userLoginService: UserLoginService) { }
  ngOnInit(): void {
    this.userLoginService.createDefaultUsers();
    this.userLoginService.getActiveUser();
    

  }
}
