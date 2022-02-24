import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users') || '');
  }
}
