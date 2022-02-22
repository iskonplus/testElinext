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

    console.log(data)
    let usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '');
    usersdateLocalStorage.forEach((el: any) => {
      if ((el.email === data.email && el.password === data.password)) {
        el = {...data};
        
        localStorage.setItem('users', JSON.stringify(usersdateLocalStorage));
        localStorage.setItem('activeUser', JSON.stringify(data));
      }
    });

  }

}
