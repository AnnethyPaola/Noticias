import { Injectable } from '@angular/core';

import { FileI, news } from '../../models/news.models'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BaseService } from '../base/base-service.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService extends BaseService<news>{

  private filePath!: string;
  private downloadURL!: Observable<string>;
  contador = 0;


  constructor(db: AngularFirestore, public storage: AngularFireStorage) {
    super('news', db);
  }

  public uploadFile(news: news, image: any): void {

    const metadata = {
      contentType: 'image/jpg',
    };

    this.filePath = `images/${image.name}` + this.contador++;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.SaveNotice(news)
            console.log(this.downloadURL)
          });
        })
      ).subscribe();

  }

  private SaveNotice(news: news) {
    const newsObj = {
      titulo: news.titulo,
      description: news.description,
      body: news.body,
      categoria: news.categoria,
      autor: news.autor,
      fecha: news.fecha,
      image: this.downloadURL
    }
    if (news.id) {
      return this.db.doc(news.id).update(newsObj);
    } else {
      return this.create(newsObj);
    }
  }

  public preAddAndUpdatePost(news: news, image: any): void {
    this.uploadFile(news, image);
  }

  public editById(news: news, newImage?: FileI)  {
    if (newImage) {
      this.uploadFile(news, newImage);
    } else {
       this.db.doc(news.id).update(news);
    }
  }
}
