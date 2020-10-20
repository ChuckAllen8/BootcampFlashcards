import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../../interfaces/Flashcard';
import { FlashCardDataService } from '../../services/flash-card-data.service';

@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {

  card: Flashcard;

  constructor(private data: FlashCardDataService) {

  }

  ngOnInIt() {
    this.card = { question: "", answer: "", id: null };
  }

  addCard() {
    this.data.addFlashCard(this.card).subscribe();    
  }
}
