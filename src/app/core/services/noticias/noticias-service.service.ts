import { Injectable } from '@angular/core';

import { news } from '../../models/news.models'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BaseService } from '../base/base-service.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService extends BaseService<news>{

  constructor(db: AngularFirestore, public storage: AngularFireStorage) {
    super('news', db);
  }

  uploadFile(file: any, path: string, nombre: string): Promise<string> {
    return new Promise(resolve => {
      // const file = event.target?.files[0];
      const filePath = path + '/' + nombre;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
     

      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res => {
            const downloadURL = res;
            resolve(downloadURL);
            return;
          });
        })
      )
        .subscribe()

    })

  }
}
