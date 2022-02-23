import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserLoginService } from 'src/app/services/user-login.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  usersForm = {
    birth: null,
    city: null,
    country: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    phone: null,
    married: null,
    role: 'user'
  };

  hide = true;

  constructor(
    private notificationService: NotificationService,
    private router: Router, private registrationService: RegistrationService,
    private userLoginService: UserLoginService  ) { }

    ngOnInit(): void {
  }

  submitForm() {

    if (this.userLoginService.activeUser.role !== 'admin') {
      this.router.navigate(['/login']);
      this.registrationService.saveUser(this.usersForm);
    } else {
      this.notificationService.success(`User ${this.usersForm.firstName} created.`);
    }

  }


}
