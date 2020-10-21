import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FlashCardDataService } from './flash-card-data.service';
import { Flashcard } from '../interfaces/Flashcard';

@Injectable({
  providedIn: 'root'
})
export class SignedInUserService {
  username: string;
  favorites: Flashcard[];
  constructor(private data: FlashCardDataService) {
    this.favorites = [];
    this.username = '';
  }

  getFavorites(): void {
    this.data.getFavorites(this.username).subscribe(results => {
      while (this.favorites.length > 0) {
        this.favorites.pop();
      }
      results.forEach((value) => this.favorites.push(value));
    });
  }

  signIn(user: string): void {
    this.username = user;
    this.getFavorites();
  }

  validateUser(user: string): boolean {
    if (user != '') {
      this.signIn(user);
      return true;
    }
    return false;
  }
}
