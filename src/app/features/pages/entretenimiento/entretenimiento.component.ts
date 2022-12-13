import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.component.html',
  styleUrls: ['./entretenimiento.component.scss']
})
export class EntretenimientoComponent implements OnInit {

  constructor(
    private newService: NoticiasService
  ) { }

  news?: news[];
  Entretenimiento: news[] = [];
  contador = [0, 0, 0, 0, 0, 0];
  CarroselEntretenimiento: news[] = []


  ngOnInit(): void {
    this.getSalud();
    this.getEntretenimientoCarrusel();
  }

  
  public getSalud() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if(element.categoria == 'Entretenimiento')
        this.Entretenimiento.push(element)
      })
    })
  }

  public getEntretenimientoCarrusel(){
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Entretenimiento') {
  
          this.contador[0] += 1
          if (this.contador[0] <= 3) {
  
            this.CarroselEntretenimiento.push(element);
          }
        }
      })
    })
   }

}
