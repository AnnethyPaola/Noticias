import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent implements OnInit {

  constructor(
    private newService: NoticiasService,
    config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.getDeportes();
    this.getDeportesCarrusel();
  }

  news?: news[];
  Deportes: news[] = [];
  contador = [0, 0, 0, 0, 0, 0];
  CarroselNewsDeportes: news[] = []
  public page = 12;
  public pageSize = 9;


  public getDeportes() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Deportes')
          this.Deportes.push(element)
      })
    })
  }

  public getDeportesCarrusel() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Deportes') {

          this.contador[0] += 1
          if (this.contador[0] <= 3) {

            this.CarroselNewsDeportes.push(element);
          }
        }
      })
    })
  }
}
