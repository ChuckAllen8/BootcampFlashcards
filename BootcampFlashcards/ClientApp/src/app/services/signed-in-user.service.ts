import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignedInUserService {
  username: string;
  constructor() {
    this.username = '';
  }

  signIn(user: string): void {
    this.username = user;
  }

  validateUser(user: string) {
    if (user != '') {
      this.username = user;
    }
  }
}
