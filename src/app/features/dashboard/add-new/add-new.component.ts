import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categoria } from 'src/app/core/models/categoria.models';
import { news } from 'src/app/core/models/news.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  constructor(
    public newsService: NoticiasService,
    private categoryService: GategoriaService
  ) { }

  public form : FormGroup = new FormGroup([]);
   categoria?: categoria[];
   news!: news;

  ngOnInit(): void {
    this.formCreate();
    this.getCategorias();
  }

  getCategorias(){
    this.categoryService.getList().valueChanges().subscribe(data => {
      this.categoria = data;
      
     })
  }

  private formCreate() : void{
    this.form = new FormGroup({
    titulo:  new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    categoria : new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    })
  }


  CreateNews():void{
    const News : news = {
      ...this.form.value
    } as news;
    this.newsService.create(News).subscribe(() => {
     
    },(data) => {
      console.log(data)
    })
  }

  async newImageUpload(event: any){
    const name = this.news.titulo;
    const path = 'Noticias';
    const file = event.target.files[0];
 

    const res = await this.newsService.uploadFile(file, path, name);
    this.news.image = res;
  }

  
}
