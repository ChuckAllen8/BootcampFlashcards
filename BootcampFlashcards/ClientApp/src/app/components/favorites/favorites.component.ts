import { Component, OnInit } from '@angular/core';
import { FlashCardDataService } from '../../services/flash-card-data.service';
import { SignedInUserService } from '../../services/signed-in-user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private data: FlashCardDataService, private user: SignedInUserService) { }

  ngOnInit() {
  }

}
