import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Flashcard } from '../interfaces/Flashcard';
import { SignedInUserService } from './signed-in-user.service';
import { Favorite } from '../interfaces/Favorite';

@Injectable({
  providedIn: 'root'
})
export class FlashCardDataService {
  allCards: Flashcard[];
  flashcardUrl: string = 'api/flashcards';
  favoriteUrl: string = 'api/favorites';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.allCards = [];
    this.refresh();
  }

  refresh() {
    this.getFlashCards().subscribe(results => this.addCardsToList(results));
  }

  addCardsToList(cardList: Flashcard[]) {
    while (this.allCards.length > 0) {
      this.allCards.pop();
    }
    cardList.forEach((value) => this.allCards.unshift(value));
  }

  getCards(): Observable<Flashcard[]> {
    return of(this.allCards);
  }

  getFlashCards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(this.baseUrl + this.flashcardUrl);
  }

  addFlashCard(card: Flashcard): Observable<{}> {
    card.id = -1;
    return this.http.post<Flashcard>(this.baseUrl + this.flashcardUrl, card);
  }

  getFavorites(user: string): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(this.baseUrl + this.favoriteUrl + `/${user}`);
  }

  addFavorites(user: string, questionID: number): Observable<{}> {
    let url = this.baseUrl + this.favoriteUrl;
    let fav: Favorite = { username: user, questionID: questionID }
    return this.http.post<Favorite>(url, fav);
  }

  deleteFavorite(user: string, question_id: number) {
    return this.http.delete(this.baseUrl + this.favoriteUrl + `/${user}/${question_id}`);
  }
}
