import { Component, Input, OnInit } from '@angular/core';
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
  @Input() news?: news;

  ngOnInit(): void {
   this.getNewsDetails();
  }

  getNewsDetails() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.newsService.getById<news>(id).subscribe(data => {
      this.news = data;
    })
  }
   
}
