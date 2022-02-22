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

  constructor(private router: Router, private registrationService: RegistrationService) { }

  submitForm() {
    this.registrationService.saveUser(this.usersForm);
    this.router.navigate(['/']);
  }


  ngOnInit(): void {
  }

}