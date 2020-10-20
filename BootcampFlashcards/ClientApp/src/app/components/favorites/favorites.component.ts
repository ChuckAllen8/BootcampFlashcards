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

  favCards: Flashcard[];

  constructor(private data: FlashCardDataService, private user: SignedInUserService, private route: Router) { }

  ngOnInit() {
    if (!this.user.username) {
      this.route.navigate(["login"]);
    }
    this.refreshList();
  }

  refreshList() {
    this.data.getFavorites().subscribe(results => {
      this.favCards = results;
    });
  }

  onRemove(card: Flashcard) {
    this.data.deleteFavorite(card.id).subscribe(() => {
      this.refreshList();
    });
  }

  

}
