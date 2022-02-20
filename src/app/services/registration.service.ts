import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor() { }

  saveUser(data: object): any {

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([data]));
    } else {
      const usersLocalStorage = JSON.parse(localStorage.getItem('users') || '');
      usersLocalStorage.push(data);
      localStorage.setItem('users', JSON.stringify(usersLocalStorage));
    }

  }

}
