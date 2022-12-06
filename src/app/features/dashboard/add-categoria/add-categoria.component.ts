import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import { categoria } from 'src/app/core/models/categoria.models';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {

  constructor(
    private categoriaService : GategoriaService
  ) { }

  public form : FormGroup = new FormGroup([]);


  ngOnInit(): void {
    this.formCreate();
  }

  private formCreate() : void{
    this.form = new FormGroup({
    nombre:  new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    })
  }

  public CreateCategorias():void{
    const categoria : categoria = {
      ...this.form.value
    } as categoria;
    this.categoriaService.create(categoria).subscribe(() => {
      console.log(categoria)
    },(data) => {
      console.log(data);
    })
  }

}
