import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { comentarios } from '../../models/comentarios.models';
import { BaseService } from '../base/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService extends BaseService<comentarios> {

  constructor(db: AngularFirestore, public storage: AngularFireStorage) {
    super('comentarios', db);
  }
}
