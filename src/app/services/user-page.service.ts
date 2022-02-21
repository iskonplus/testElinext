import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor() { }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('activeUser') || '');
  }
}
