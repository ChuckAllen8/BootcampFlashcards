import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flashcard } from '../../interfaces/Flashcard';
import { SignedInUserService } from '../../services/signed-in-user.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {
  @Input() card: Flashcard;
  @Input() isFavorite: boolean;
  
  @Output() favorited: EventEmitter<Flashcard> = new EventEmitter();
  @Output() remove: EventEmitter<Flashcard> = new EventEmitter();
  flipped: boolean;

  constructor(private user: SignedInUserService) { }

  ngOnInit() {
    this.flipped = false;
  }

  flip() {
    this.flipped = !this.flipped;
  }

  favorite() {
    this.favorited.emit(this.card);
  }

  removefav() {
    this.remove.emit(this.card);
  }
}
