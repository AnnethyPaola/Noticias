import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private newService: NoticiasService

  ) { }

  news: Array<news> = [];
  CarroselNews: news[] = []
  contador= [0];
  public page = 12;
  public pageSize = 18;

  ngOnInit(): void {
    this.getNews();
    this.getNewsCarrusel();
  }

  getNews() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
    })
  }

  public getNewsCarrusel() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria) {

          this.contador[0] += 1
          if (this.contador[0] <= 6) {

            this.CarroselNews.push(element);
          }
        }
      });
    });
  }
}
