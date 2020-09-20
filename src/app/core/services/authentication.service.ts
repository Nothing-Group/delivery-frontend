import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth, User } from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

const userKey = 'user';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject(
    JSON.parse(localStorage.getItem(userKey) as any),
  );
  public user$ = this.userSubject.asObservable();

  constructor(public authFire: AngularFireAuth, private router: Router) {
    this.authFire.authState.subscribe((user) => {
      if (user) {
        this.userSubject.next(user);
        localStorage.setItem(userKey, JSON.stringify(user));
      } else {
        this.userSubject.next(null);
        localStorage.removeItem(userKey);
      }
    });
  }

  async signOut() {
    await this.authFire.signOut();
    await this.user$
      .pipe(
        filter((u) => !u),
        take(1),
      )
      .toPromise();
    this.router.navigate(['/auth/login']);
  }

  isLogged() {
    return !!this.userSubject.getValue();
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    await this.authFire.signInWithEmailAndPassword(email, password);
    await this.user$.pipe(filter(Boolean), take(1)).toPromise();
    return this.router.navigate(['/orders']);
  }

  async signInWithGoogle() {
    await this.authFire.signInWithPopup(new auth.GoogleAuthProvider());
    return this.user$.pipe(filter(Boolean), take(1)).toPromise();
  }
}
