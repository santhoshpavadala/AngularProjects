import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // logout() {
  //   localStorage.removeItem('token');
  // }

  constructor(
    private authService: AuthService,
    private router: Router
) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
