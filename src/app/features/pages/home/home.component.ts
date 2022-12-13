import { Component, Input, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() News! : news;

  news?: news[];
  contador = [0, 0, 0, 0, 0, 0,0,0,0];
  Deportes: news[] = [];
  Tecnologia: news[] = [];
  Economia: news[] = [];
  Salud: news[] = [];
  Entretenimiento: news[] = [];
  Comedia: news[] = [];
  Politica: news[] = [];
  Redes: news [] = [];
  CarroselNews: news[] = []
  cont= [0];

  constructor(
    private newService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.getNews();
    this.getNewsCarrusel();
  }

  public getNews() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Deportes') {

          this.contador[0] += 1
          if (this.contador[0] <= 6) {

            this.Deportes.push(element);
          }
        }
        if (element.categoria == 'Entretenimiento') {

          this.contador[1] += 1
          if (this.contador[1] <= 6) {
            this.Entretenimiento.push(element);
          }
        }
        if (element.categoria == 'Política') {

          this.contador[2] += 1
          if (this.contador[2] <= 6) {
            this.Politica.push(element);
          }
        }
        if (element.categoria == 'Salud') {

          this.contador[3] += 1
          if (this.contador[3] <= 6) {
            this.Salud.push(element);
          }
        }
        if (element.categoria == 'Tecnología ') {

          this.contador[4] += 1
          if (this.contador[4] <= 6) {
            this.Tecnologia.push(element);
          }
        }
        if (element.categoria == 'Comedia') {

          this.contador[5] += 1
          if (this.contador[5] <= 6) {
            this.Comedia.push(element);
          }
        }
        if (element.categoria == 'Economía') {

          this.contador[6] += 1
          if (this.contador[6] <= 6) {
            this.Economia.push(element);
          }
        }
        if (element.categoria == 'Redes Sociales') {

          this.contador[7] += 1
          if (this.contador[7] <= 6) {
            this.Redes.push(element);
            
          }
        }
      });
    }
    )
  }

  public getNewsCarrusel() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria) {
          this.cont[0] += 1
          if (this.cont[0] <= 8) {
            this.CarroselNews.push(element);
          }
        }
      });
    });
  }
}
