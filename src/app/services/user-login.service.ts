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

  defaultUsers = [
    {birth: "1986-09-16", city: "Minsk", country: "Belarus", email: "qq@qq.qq", firstName: "Artur", lastName: "Tamashevich", married: "Veronica Tamashevich", password: "qq", phone: "+375298523553", role: "user"},
    {birth: "1999-02-21", city: "Grodnj", country: "Belarus", email: "aa@aa.aa", firstName: "Dima", lastName: "Ivanov", married: null, password: "aa", phone: "+375292834773", role: "user"},
    {birth: "2006-06-18", city: "NY", country: "USA", email: "zz@zz.zz", firstName: "Jon", lastName: "Smit", married: "Meri Smit", password: "zz", phone: "null", role: "user"},
    {birth: "1996-12-16", city: "Moscow", country: "Russia", email: "ww@ww.ww", firstName: "Ivan", lastName: "Petrov", married: null, password: "ww", phone: null, role: "user"},
    { email: "ad@ad.ad", password: "ad", role: "admin", firstName: "Admin"}
      ]


  constructor() { }

  // userFullName$ = new Subject<string>();
  // userFullName = this.userFullName$.asObservable();

  createDefaultUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.defaultUsers));
    }
  }

  // getFirstName() {
  //   this.activeUser = JSON.parse(localStorage.getItem('activeUser') || '')
  //   this.userFullName$.next(this.activeUser.firstName);
  //   return this.activeUser.firstName;
  // }

  checkUserLogin(data: any) {
    const usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '');
    usersdateLocalStorage.forEach((el: any) => {
      if ((el.email === data.email && el.password === data.password)) {
        this.checkLog = true;
        this.activeUser = el;
        localStorage.setItem('activeUser', JSON.stringify(this.activeUser));
      }
    })
    return this.checkLog;
  }

  getActiveUser() {
    if (localStorage.getItem('users')) {
      this.activeUser = JSON.parse(localStorage.getItem('activeUser') || '');
    }
  }

  logOut(){
    localStorage.removeItem('activeUser');
  }





}
