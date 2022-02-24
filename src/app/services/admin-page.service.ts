import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users') || '');
  }

  removeUser(user: any) {

    let newUsers = JSON.parse(localStorage.getItem('users') || '')
      .filter((el: any) => {
        return el.email !== user.email && el.password !== user.password;
      });
    localStorage.setItem('users', JSON.stringify(newUsers));

  }
}
