import {Component, OnInit} from '@angular/core';
import {UserTokenRepository} from "../../repositories/user-token.repository";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hasUser: boolean;

  constructor(private userTokenRepository: UserTokenRepository) {
    this.hasUser = false;
  }

  ngOnInit(): void {
    if (this.userTokenRepository.getUser()){
      this.hasUser = true;
    }
  }

}
