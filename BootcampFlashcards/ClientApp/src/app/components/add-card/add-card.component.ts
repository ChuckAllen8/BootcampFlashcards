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
  questionError: boolean;
  answerError: boolean;

  @Output() added: EventEmitter<Flashcard> = new EventEmitter();

  constructor() {
    this.questionError = false;
    this.answerError = false;
  }

  ngOnInit() {
    this.newCard();
  }

  newCard() {
    this.card = { question: "", answer: "", id: -1 };
  }

  addCard() {
    if (this.card.answer != '' && this.card.question != '') {
      if (this.card.question.indexOf('?') < 0) {
        this.card.question = this.card.question + '?';
      }
      this.added.emit(this.card);
      this.newCard();
      this.answerError = false;
      this.questionError = false;
    }
    else {
      if (this.card.question == '') {
        this.questionError = true;
      }
      else {
        this.questionError = false;
      }
      if (this.card.answer == '') {
        this.answerError = true;
      }
      else {
        this.answerError = false;
      }
    }
    
  }
}
