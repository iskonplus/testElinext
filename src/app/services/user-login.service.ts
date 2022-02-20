import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class UserLoginService {

  role = '';
  checkLog = false;

  constructor() { }

  userLogin(data: any) {
    const usersdateLocalStorage = JSON.parse(localStorage.getItem('users') || '');
    usersdateLocalStorage.forEach((el:any) => {
     if ((el.email === data.email && el.password === data.password)===true) {
       this.checkLog = true;
       this.role = el.role;
      }
   })
    return this.checkLog;
  }

}
