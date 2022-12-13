import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-economia',
  templateUrl: './economia.component.html',
  styleUrls: ['./economia.component.scss']
})
export class EconomiaComponent implements OnInit {
  constructor(
    private newService: NoticiasService
  ) { }

  news?: news[];
  Economia: news[] = [];
  contador = [0, 0, 0, 0, 0, 0];
  CarroselEconomia: news[] = []

  ngOnInit(): void {
    this.getTecnologia();
    this.getEconomiaCarrosel();
  }

  
  public getTecnologia() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if(element.categoria == 'Economía')
        this.Economia.push(element)
      })
    })
  }

  
  public getEconomiaCarrosel(){
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Economía') {
  
          this.contador[0] += 1
          if (this.contador[0] <= 3) {
  
            this.CarroselEconomia.push(element);
          }
        }
      })
    })
   }

}
