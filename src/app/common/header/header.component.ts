import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath = '/assets/static/logo.png';
  notifications = [];
  user = JSON.parse(localStorage.getItem('currentUser'));
  constructor(
    private auth: AuthService,
    private router: Router,
    public api: ApiService
  ) {
   }

  ngOnInit() {
  }
  async logout() {
    await this.auth.logout();
    window.location.reload();
  }

}
