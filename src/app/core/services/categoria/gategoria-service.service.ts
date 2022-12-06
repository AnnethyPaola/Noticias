import { Injectable } from '@angular/core';
import { categoria } from '../../models/categoria.models';
import { BaseService } from '../base/base-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class GategoriaService extends BaseService<categoria>{

  constructor(db : AngularFirestore) {
    super('categoria', db);
   }
}
