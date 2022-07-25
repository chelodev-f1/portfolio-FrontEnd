import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private TokenService: TokenService) { }

  ngOnInit(): void {
    if (this.TokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  login() {
    this.router.navigate(['/login'])
  }

  onLogOut(): void {
    this.TokenService.logOut();
    window.location.reload();
  }

}