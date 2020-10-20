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
    this.data.getFlashCards().subscribe(results => {
      this.cards = results;
    });
  }

  onFavorite(card: Flashcard) {
    this.data.addFavorites(card.id).subscribe();
  }
}
