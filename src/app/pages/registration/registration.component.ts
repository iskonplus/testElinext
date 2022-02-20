import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  usersForm = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    education: '',
    phone: '',
    country: '',
    city: '',
    birth: '',
    role: 'user',
    fullName: function () {
    return `${this.firstName} ${this.lastName[0]}.`
    }
  };

  hide = true;

  constructor(private router: Router, private registrationService:RegistrationService) { }

  submitForm() {
    this.registrationService.saveUser(this.usersForm);
    this.router.navigate(['/']);
  }


  ngOnInit(): void {
  }

}
