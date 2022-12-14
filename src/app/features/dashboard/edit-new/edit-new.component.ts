import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { categoria } from 'src/app/core/models/categoria.models';
import { news } from 'src/app/core/models/news.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-new',
  templateUrl: './edit-new.component.html',
  styleUrls: ['./edit-new.component.scss']
})
export class EditNewComponent implements OnInit {

  constructor(
    public newsService: NoticiasService,
    private activeRoute: ActivatedRoute,
    private categoryService: GategoriaService,
    private router: Router
  ) { }

  @Input() news!: news;
  News!: news;
  NewsData!: any;
  categoria?: categoria[];
  private image: any;
  private imageOriginal: any;


  ngOnInit(): void {
    this.getById();
    this.getCategorias();
  }

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),

  })


  getById() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.newsService.getById(id).subscribe(data => {
      this.NewsData = data;
      this.form.patchValue({
        titulo: this.NewsData.titulo,
        description: this.NewsData.description,
        body: this.NewsData.body,
        categoria: this.NewsData.categoria,
        autor: this.NewsData.autor,
        fecha: this.NewsData.fecha,
      })
    })
  }

  EditNews(news: news) {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.newsService.update(id, news).subscribe((data: news) => {
      this.news = data;
    })
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }


  getCategorias() {
    this.categoryService.getList().valueChanges().subscribe(data => {
      this.categoria = data;
    })
  }

  submit(Inews: any) {
    this.EditNews(Inews);
    let id = this.activeRoute.snapshot.paramMap.get('id');
    const news: news = {
      ...this.form.value,
    } as unknown as news;
    news.id = id as any;
    this.EditNews(news);
    Swal.fire({
      title: 'Bien!',
      text: 'Noticia editada correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.router.navigate(['/dashboard/listNews/list-news'])
  }

}
