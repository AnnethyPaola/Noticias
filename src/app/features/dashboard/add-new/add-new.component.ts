import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { categoria } from 'src/app/core/models/categoria.models';
import { news } from 'src/app/core/models/news.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  constructor(
    public newsService: NoticiasService,
    private categoryService: GategoriaService,
    private router: Router
  ) { }

  public form: FormGroup = new FormGroup([]);
  categoria?: categoria[];
  news!: news;
  contador = 0;
  image: any;

  downloadURL!: Observable<string>;


  ngOnInit(): void {
    this.formCreate();
    this.getCategorias();
  }

  getCategorias() {
    this.categoryService.getList().valueChanges().subscribe(data => {
      this.categoria = data;

    })
  }

  async formCreate() {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
    })
  }


  CreateNews(news: news): void {
    this.newsService.preAddAndUpdatePost(news, this.image);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'La Noticia ha sido creada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.form.reset();
    this.router.navigate(['/dashboard/listNews/list-news'])
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }


}
