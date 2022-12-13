import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.scss']
})

export class PoliticaComponent implements OnInit {

  constructor(
    private newService: NoticiasService,
    config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  news?: news[];
  Politica: news[] = [];
  contador = [0];
  CarroselPolitica: news[] = []

  ngOnInit(): void {
    this.getPolitica();
    this.getPoliticaCarrusel();
  }


  public getPolitica() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Política')
          this.Politica.push(element)
      })
    })
  }

 public getPoliticaCarrusel(){
  this.newService.getList().valueChanges().subscribe(data => {
    this.news = data;
    data.forEach(element => {
      if (element.categoria == 'Política') {

        this.contador[0] += 1
        if (this.contador[0] <= 3) {

          this.CarroselPolitica.push(element);
        }
      }
    })
  })
 }

}
