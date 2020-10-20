import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flashcard } from '../../interfaces/Flashcard';
import { FlashCardDataService } from '../../services/flash-card-data.service';

@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {

  card: Flashcard;

  @Output() added: EventEmitter<Flashcard> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.newCard();
  }

  newCard() {
    this.card = { question: "", answer: "", id: -1 };
  }

  addCard() {
    this.added.emit(this.card);
    this.newCard();
  }
}
