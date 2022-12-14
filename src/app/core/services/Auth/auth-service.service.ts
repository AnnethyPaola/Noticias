import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private autFirebase: AngularFireAuth,
    private db: AngularFirestore, 
    
  ) {

  }

  login(correo: any, Password: any) {
    return this.autFirebase.signInWithEmailAndPassword(correo, Password)
  }

  register(correo: string, Password: string) {
    return this.autFirebase.createUserWithEmailAndPassword(correo, Password);

  }

  singtOut() {
    this.autFirebase.signOut();
  }

  create(User: any, path: any, id: any) {
    const collection = this.db.collection(path);
    return collection.doc(id).set(User);
  }

  stateUser() {
    return this.autFirebase.authState
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== 'token' ? false : true;
  }
}

