import { Component, OnInit } from '@angular/core';
import { FlashCardDataService } from '../../services/flash-card-data.service';
import { SignedInUserService } from '../../services/signed-in-user.service';
import { Flashcard } from '../../interfaces/Flashcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private data: FlashCardDataService, private user: SignedInUserService, private route: Router) { }

  ngOnInit() {
    if (!this.user.username) {
      this.route.navigate(["login"]);
    }
    this.refreshList();
  }

  refreshList() {
    this.user.getFavorites();
  }

  onRemove(card: Flashcard) {
    this.data.deleteFavorite(this.user.username, card.id).subscribe(() => {
      this.refreshList();
    });
  }
}
