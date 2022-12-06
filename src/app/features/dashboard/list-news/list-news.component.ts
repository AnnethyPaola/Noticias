import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  news?: news[];

  constructor(
    private newService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  public getNews() {
     this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
     })
  }

   deleteNews(id: string) {
    this.newService.delete(id).subscribe(() =>{
    }, () =>{
      console.log('error')
    });
  }

}
