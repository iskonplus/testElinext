import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserLoginService {

  checkLog = false;
  activeUser = {
    role: '',
    firstName: '',
    lastName: '',
  }

  constructor() { }

  userFullName$ = new Subject<string>();
  userFullName = this.userFullName$.asObservable();

  getFirstName() {
    this.userFullName$.next(this.activeUser.firstName);
    return this.activeUser.firstName;
  }

  checkUserLogin(data: any) {
    const usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '');
    usersdateLocalStorage.forEach((el: any) => {
      if ((el.email === data.email && el.password === data.password)) {
        this.checkLog = true;
        this.activeUser = el;
        this.getFirstName();
        localStorage.setItem('activeUser', JSON.stringify(this.activeUser));
      }
    })
    return this.checkLog;
  }





}
