import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../interfaces/Flashcard';
import { SignedInUserService } from './signed-in-user.service';
import { Favorite } from '../interfaces/Favorite';

@Injectable({
  providedIn: 'root'
})
export class FlashCardDataService {

  flashcardUrl: string = 'api/flashcards';
  favoriteUrl: string = 'api/favorites';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private user: SignedInUserService) { }

  getFlashCards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(this.baseUrl + this.flashcardUrl);
  }

  addFlashCard(card: Flashcard): Observable<{}> {
    return this.http.post(this.baseUrl + this.flashcardUrl, card);
  }

  getFavorites(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(this.baseUrl + this.favoriteUrl + `/${this.user.username}`);
  }

  addFavorites(questionID: number): Observable<{}> {
    let url = this.baseUrl + this.favoriteUrl;
    let fav: Favorite = { username: this.user.username, questionID: questionID }
    return this.http.post<Favorite>(url, fav);
  }

  deleteFavorite(question_id: number) {
    return this.http.delete(this.baseUrl + this.favoriteUrl + `/${this.user.username}/${question_id}`);
  }
}
