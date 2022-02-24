import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor() { }
  getActiveUserInfo() {
    return JSON.parse(localStorage.getItem('activeUser') || '');
  }

  getUsersInfo() {
    return JSON.parse(localStorage.getItem('users') || '');
  }

  saveUserInfo(data: any): any {

    // console.log(data)
    let usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '')
      .map((el: any) => {
      if ((el.email === data.email && el.password === data.password)) {
        return el = data;
      } else {
        return el;
      }

    });

    localStorage.setItem('users', JSON.stringify(usersdateLocalStorage));
    this.getActiveUserInfo().role !== 'admin'&& localStorage.setItem('activeUser', JSON.stringify(data));
  }

}
