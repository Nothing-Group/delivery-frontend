import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public authFire: AngularFireAuth,
    public authService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {}

  handleLoginClick() {
    this.authService.signInWithEmailAndPassword('sample4@testfly.com', 'sample4@testfly.com');
  }
}
