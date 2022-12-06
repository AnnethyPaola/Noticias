import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  NewsData!: any;
  News!: news;
  categoria?: categoria[];

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
    fecha: new FormControl(Date, [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    })


    getById(){
      let id = this.activeRoute.snapshot.paramMap.get('id');
      this.newsService.getById(id).subscribe(data => {
        this.NewsData = data;
        this.form.setValue({
          titulo: this.NewsData.titulo,
          description: this.NewsData.description,
          body: this.NewsData.body,
          categoria: this.NewsData.categoria,
          autor: this.NewsData.autor,
          fecha: this.NewsData.fecha,
          imagen: this.NewsData.imagen,
        })
      })
    }

    EditNews(News : news){
      let id = this.activeRoute.snapshot.paramMap.get('id');
      this.newsService.update(id, News).subscribe((data: news) => {
        this.News = data;
        
      })
    }

    getCategorias(){
      this.categoryService.getList().valueChanges().subscribe(data => {
        this.categoria = data;
        
       })
    }

    submit(){
      let id = this.activeRoute.snapshot.paramMap.get('id');
      const news: news = {
        ...this.form.value,
      } as unknown as news;
      news.id = id as any
      this.EditNews(news);
      console.log(news);
    }

}
