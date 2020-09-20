import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(public authService: AuthenticationService, private router: Router) {}
  canActivate() {
    if (this.authService.isLogged()) {
      return this.router.parseUrl('/orders');
    }
    return true;
  }
}
