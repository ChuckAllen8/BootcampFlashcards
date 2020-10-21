import { Component, OnInit } from '@angular/core';
import { FlashCardDataService } from '../../services/flash-card-data.service';
import { Flashcard } from '../../interfaces/Flashcard';
import { SignedInUserService } from '../../services/signed-in-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cards: Flashcard[];
  constructor(private data: FlashCardDataService, private user: SignedInUserService) { }

  ngOnInit() {
    this.data.getCards().subscribe(results => this.cards = results);
    this.refreshCards();
  }

  onFavorite(card: Flashcard) {
    this.data.addFavorites(this.user.username, card.id).subscribe(() => this.user.getFavorites());
  }

  onRemove(card: Flashcard) {
    this.data.deleteFavorite(this.user.username, card.id).subscribe(() => {
      this.user.getFavorites();
    });
  }

  refreshCards(): void {
    this.data.refresh();
  }

  onAdd(card: Flashcard) {
    this.data.addFlashCard(card).subscribe(() => this.refreshCards());
  }

  hasFavorite(card: Flashcard): boolean {
    let result = false;
    if (!this.user.username) {
      return false;
    }
    this.user.favorites.forEach((value) => { if (value.id == card.id) { result = true } });
    return result;
  }
}
