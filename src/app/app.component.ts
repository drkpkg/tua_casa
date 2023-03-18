import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "./supabase.service";
import {Router} from "@angular/router";
import {UserTokenRepository} from "./repositories/user-token.repository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  hasUser: boolean = false;

  constructor(private supabaseService: SupabaseService, private router: Router, private userTokenRepository: UserTokenRepository) {
    this.hasUser = false;
    this.checkUser();
  }

  private checkUser() {
    if (sessionStorage.getItem('token') != null) {
      let token = JSON.parse(sessionStorage.getItem('token') as string);
      this.supabaseService.signInWithToken(token.refresh_token).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          sessionStorage.setItem('token', JSON.stringify(data.session));
          this.userTokenRepository.updateUserToken(JSON.stringify(data.session))
          this.hasUser = true;
        }
      });
    } else {
      if (this.router.url == '/terms') {
        this.router.navigate(['/terms']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnInit(): void {
    this.checkUser();
  }
}
