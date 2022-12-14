import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  constructor(
    private newService: NoticiasService
  ) { }

  news?: news[];
  Tecnologia: news[] = [];
  contador = [0, 0, 0, 0, 0, 0];
  CarroselTecnologia: news[] = []
  public page = 12;
  public pageSize = 9;

  ngOnInit(): void {
    this.getTecnologia();
    this.getTecnologiaCarrusel();
  }

  
  public getTecnologia() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if(element.categoria == 'Tecnología ')
        this.Tecnologia.push(element)
      })
    })
  }

  public getTecnologiaCarrusel(){
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Tecnología ') {
  
          this.contador[0] += 1
          if (this.contador[0] <= 3) {
  
            this.CarroselTecnologia.push(element);
          }
        }
      })
    })
   }

}
