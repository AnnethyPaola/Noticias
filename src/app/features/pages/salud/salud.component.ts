import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent implements OnInit {

  constructor(
    private newService: NoticiasService
  ) { }

  news?: news[];
  Salud: news[] = [];
  contador = [0, 0, 0, 0, 0, 0];
  CarroselSalud: news[] = [];
  public page = 12;
  public pageSize = 9;


  ngOnInit(): void {
    this.getSalud();
    this.getSaludCarrusel();
  }

  
  public getSalud() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if(element.categoria == 'Salud')
        this.Salud.push(element)
      })
    })
  }

  public getSaludCarrusel(){
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Salud') {
  
          this.contador[0] += 1
          if (this.contador[0] <= 3) {
  
            this.CarroselSalud.push(element);
          }
        }
      })
    })
   }


}
