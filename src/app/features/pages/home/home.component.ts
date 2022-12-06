import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news?: news[];
  contador=[0,0,0,0,0,0];
  Deportes:news[]=[];
  Tecnología:news[]=[];
  Salud:news[]=[];
  Entretenimiento:news[]=[];
  Comedia:news[]=[];
  Política:news[]=[];

  constructor(
    private newService: NoticiasService
  ) { }

  ngOnInit(): void {
  this.getNews();
  }

  public getNews() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Deportes'){
          console.log(this.contador)
          this.contador[0]+=1
          if (this.contador[0] <= 6){
            console.log(this.contador[0])
            this.Deportes.push(element);
          }
        }
        if (element.categoria == 'Entretenimiento'){
          console.log(this.contador)
          this.contador[1]+=1
          if (this.contador[1] <= 6){
            this.Entretenimiento.push(element);
          }
        }
        if (element.categoria == 'Política'){
          console.log(this.contador)
          this.contador[2]+=1
          if (this.contador[2] <= 6){
            this.Política.push(element);
          }
        }
        if (element.categoria == 'Salud'){
          console.log(this.contador)
          this.contador[3]+=1
          if (this.contador[3] <= 6){
            this.Salud.push(element);
          }
        }
        if (element.categoria == 'Tecnología'){
          console.log(this.contador)
          this.contador[4]+=1
          if (this.contador[4] <= 6){
            this.Tecnología.push(element);
          }
        }
        if (element.categoria == 'Comedia'){
          console.log(this.contador)
          this.contador[5]+=1
          if (this.contador[5] <= 6){
            this.Comedia.push(element);
          }
        }
      });
    }
    )
  }
}
