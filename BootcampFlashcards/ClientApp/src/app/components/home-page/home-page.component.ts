import { Component, OnInit } from '@angular/core';
import { FlashCardDataService } from '../../services/flash-card-data.service';
import { Flashcard } from '../../interfaces/Flashcard';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cards: Flashcard[];
  constructor(private data: FlashCardDataService) { }

  ngOnInit() {
    this.data.getCards().subscribe(results => this.cards = results);
    this.refreshCards();
  }

  onFavorite(card: Flashcard) {
    this.data.addFavorites(card.id).subscribe();
  }

  refreshCards(): void {
    this.data.getFlashCards().subscribe(results => this.data.addCardsToList(results));
  }

  onAdd(card: Flashcard) {
    this.data.addFlashCard(card).subscribe(() => this.refreshCards());
  }
}
