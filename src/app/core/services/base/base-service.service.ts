import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IFirestoreService } from '../../models/firesabe.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> implements IFirestoreService<T> {

  collection!: string;

  constructor(
    @Inject('pages') public collectionName: string, public db: AngularFirestore,
  
  ) {
    if (!collectionName) {
      throw new Error('Firestore called with no collection name');
    }
    this.collection = collectionName;
  }

  create(item: T): Observable<any> {
    const itemToAdd = JSON.parse(JSON.stringify(item));
    itemToAdd.id = this.db.createId();
    const ref = this.db.doc<T>(`${this.collection}/${itemToAdd.id}`);
    return from(ref.set(itemToAdd));
  }

  update(id: any, item: Partial<T>): any {
      const itemToUpdate = this.db.doc<T>(`${this.collection}/${id}`);
      return from(itemToUpdate.update(item));
  }

  getList(): AngularFirestoreCollection<T> {
    return this.db.collection(`${this.collection}`);
  }

  getById(id: any) {
    return this.db.collection(`${this.collection}`).doc(id).valueChanges();
  }

  delete(id: any): Observable<void> {
    return from(this.db.doc(`${this.collection}/${id}`).delete());
  }

  

}
