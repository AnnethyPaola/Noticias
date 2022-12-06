import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { user } from '../../models/user.models';
import * as auth from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        //this.SetUserData(result);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/dashboard/listNews/list-news']);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        console.log(this.SetUserData)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  SetUserData(user: any) {
    // user = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<user>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
    const userRef: AngularFirestoreDocument<user> = this.afs.doc<user>(
      `users/${user.id}`
    );

    const userData: user = {
      id: user.id,
      nombre: user.nombre,
      rol: user.rol,
      password: user.password,
      correo: user.correo,
      imagen: user.imagen,
      emailVerified: false
    };
    return userRef.set(userData, {
      merge: true,

    });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['/dashboard/listNews/list-news']);
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['//dashboard/listNews/list-news']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async SignOut() {
    console.log('funciona');
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/pages/home']);
    console.log('funciona');
  }

  get isLoggedIn(): boolean {
    const user = (localStorage.getItem('user'));
    return (user !== 'null') ? true : false;
    //&& user.emailVerified !== false
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
}

