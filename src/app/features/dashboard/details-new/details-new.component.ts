import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-details-new',
  templateUrl: './details-new.component.html',
  styleUrls: ['./details-new.component.scss']
})
export class DetailsNewComponent implements OnInit {
  constructor(
    public newsService: NoticiasService,
    private activeRoute: ActivatedRoute
  ) { }

  NewsData!: any;

  ngOnInit(): void {
    this.ListNews();
  }

 
    form = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    })


ListNews(){
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
}
