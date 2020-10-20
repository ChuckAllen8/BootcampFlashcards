import { Component, OnInit } from '@angular/core';
import { SignedInUserService } from '../../services/signed-in-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: SignedInUserService, private route: Router) { }

  ngOnInit() {
  }

  login(username: string) {
    let result = this.user.validateUser(username);
    if (result) {
      this.route.navigate([""]);
    }
  }

}
