import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  constructor(
    public authService: AuthService,
    private router: Router,
    private http: HttpClient,
    public cartService: CartService
  ) {}

  ngOnInit(): void {}
  goToMyProfile() {
    this.show = false;
    this.router.navigateByUrl('/my-profile');
  }
  goToAdminPage() {
    this.show = false;
    this.router.navigateByUrl('/admin');
  }
  logout() {
    this.show = false;
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
