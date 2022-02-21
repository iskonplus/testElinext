import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor() { }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('users') || '');
  }

  // const usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '');
}
