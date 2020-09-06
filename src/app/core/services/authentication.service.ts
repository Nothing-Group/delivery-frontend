import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject(null);
  public user$ = this.userSubject.asObservable();

  constructor(public authFire: AngularFireAuth) {
    const stored = JSON.parse(localStorage.getItem('user') as any);
    this.userSubject.next(stored as User);
    this.authFire.authState.subscribe((user) => {
      if (user) {
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.userSubject.next(null);
        localStorage.removeItem('user');
      }
    });
  }
}
