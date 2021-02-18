import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(): void {
    localStorage.setItem('user', 'Ganesh');
  }

  checkAuthentication(): boolean {
    return (localStorage.getItem('user') === 'Ganesh');
  }
}
