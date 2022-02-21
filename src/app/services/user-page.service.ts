import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor() { }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('activeUser') || '');
  }

  saveUserInfo(data: any): any {

    console.log(data)
    let usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '');
    usersdateLocalStorage.forEach((el: any) => {
      if ((el.email === data.email && el.password === data.password)) {
        el = {...data};
        console.log(el)
        console.log(usersdateLocalStorage)
        localStorage.setItem('users', JSON.stringify(usersdateLocalStorage));
        localStorage.setItem('activeUser', JSON.stringify(data));
      }
    });

    // if (!localStorage.getItem('users')) {
    //   localStorage.setItem('users', JSON.stringify([data]));
    // } else {
    //   const usersLocalStorage = JSON.parse(localStorage.getItem('users') || '');
    //   usersLocalStorage.push(data);
    //   localStorage.setItem('users', JSON.stringify(usersLocalStorage));
    // }

  }





}
