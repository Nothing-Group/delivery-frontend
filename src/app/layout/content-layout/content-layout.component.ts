import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent {
  constructor(public authService: AuthenticationService, private router: Router) {}

  async handleLogout() {
    this.authService.signOut();
  }
}
