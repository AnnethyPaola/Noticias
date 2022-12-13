import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { categoria } from 'src/app/core/models/categoria.models';
import { news } from 'src/app/core/models/news.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-edit-new',
  templateUrl: './edit-new.component.html',
  styleUrls: ['./edit-new.component.scss']
})
export class EditNewComponent implements OnInit {

  constructor(
    public newsService: NoticiasService,
    private activeRoute: ActivatedRoute,
    private categoryService: GategoriaService
  ) { }

  @Input() news!: news;

  NewsData!: any;
  // News!: news;
  categoria?: categoria[];
  private image: any;
  private imageOriginal: any;


  ngOnInit(): void {
    // this.getById();
     this.getCategorias();
    //this.imageOriginal = this.News.image;
    //this.initValuesForm();
    //this.image = this.News.image;
  }

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    imagen : new FormControl('', [Validators.required]),
  })

  // private initValuesForm(): void {
  //   this.form.patchValue({
  //     titulo: this.news.titulo,
  //     description: this.news.description,
  //     body: this.news.body,
  //     categoria: this.news.categoria,
  //     autor: this.news.autor,
  //     fecha: this.news.fecha,
      
  //   });
  // }

  getById(){
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
        imagen : this.NewsData.image,
      })//
    })
  }

  EditNews(news: news) {
    // let id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.image === this.imageOriginal) {
      news.image = this.imageOriginal;
      this.newsService.editById(news);
    } else {
      this.newsService.editById(news, this.image);
    }
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
    news.id = id as any
    this.EditNews(news);
    console.log(news);
  }

}
