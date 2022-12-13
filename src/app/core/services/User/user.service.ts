import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { User } from 'firebase/auth';
import { user } from '../../models/user.models';
import { BaseService } from '../base/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<user> {

  constructor(db: AngularFirestore, public storage: AngularFireStorage) {
    super('usuarios', db);
  }
}
