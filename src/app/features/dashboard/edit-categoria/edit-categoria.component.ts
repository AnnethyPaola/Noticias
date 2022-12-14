import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categoria } from 'src/app/core/models/categoria.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.scss']
})
export class EditCategoriaComponent implements OnInit {

    CategoriaData!: any;
    categoria!: categoria;

  constructor(
    private activeRoute: ActivatedRoute,
    private categoryService: GategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getById();
  }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    })

    getById(){
      let id = this.activeRoute.snapshot.paramMap.get('id');
      this.categoryService.getById(id).subscribe(data => {
        this.CategoriaData = data;
        this.form.setValue({
          nombre: this.CategoriaData.nombre,
          description: this.CategoriaData.description,
        })
      })
    }

    EditCategoria(categoria : categoria){
      let id = this.activeRoute.snapshot.paramMap.get('id');
      this.categoryService.update(id, categoria).subscribe((data: categoria) => {
        this.categoria = data;
        
      })
    }

    submit(){
      let id = this.activeRoute.snapshot.paramMap.get('id');
      const categoria: categoria = {
        ...this.form.value,
      } as unknown as categoria;
      categoria.id = id as any
      this.EditCategoria(categoria);
      Swal.fire({
        title: 'Bien!',
        text: 'Noticia editada correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigate(['/dashboard/listCategoria/list-categoria'])
    }
    

}
