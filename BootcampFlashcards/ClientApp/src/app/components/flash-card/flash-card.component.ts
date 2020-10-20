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
  @Output() favorited: EventEmitter<Flashcard> = new EventEmitter();
  constructor(private user: SignedInUserService) { }

  ngOnInit() {
  }

  favorite() {
    this.favorited.emit(this.card);
  }
}
