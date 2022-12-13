import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  constructor(
    private newService: NoticiasService
  ) { }

  news?: news[];
  Social: news[] = [];
  contador = [0, 0, 0, 0, 0, 0];
  CarroselRedesSociales: news[] = []

  ngOnInit(): void {
    this.getSocial();
    this.getRedesSocialesCarrusel();
  }

  
  public getSocial() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if(element.categoria == 'Redes Sociales')
        this.Social.push(element)
      })
    })

  }
  public getRedesSocialesCarrusel(){
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
      data.forEach(element => {
        if (element.categoria == 'Redes Sociales') {
  
          this.contador[0] += 1
          if (this.contador[0] <= 3) {
  
            this.CarroselRedesSociales.push(element);
          }
        }
      })
    })
   }

}
