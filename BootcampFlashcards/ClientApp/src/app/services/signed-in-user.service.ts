import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  validateUser(user: string): boolean {
    if (user != '') {
      this.username = user;
      return true;
    }
    return false;
  }
}
