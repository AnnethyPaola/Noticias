import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/core/models/categoria.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.scss']
})
export class ListCategoriaComponent implements OnInit {

  categoria?: categoria[];

  constructor(
    private categoriaService: GategoriaService,
  ) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  public getCategoria() {
    this.categoriaService.getList().valueChanges().subscribe(data => {
     this.categoria = data;
     console.log(data)
    })
 }

}
