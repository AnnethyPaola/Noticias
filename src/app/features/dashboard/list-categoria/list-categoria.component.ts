import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/core/models/categoria.models';
import { GategoriaService } from 'src/app/core/services/categoria/gategoria-service.service';
import Swal from 'sweetalert2';

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
     
    })
 }

 deleteNews(id: string){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Desea borrar esta categoria?',
    text: "Una vez eliminada la categoria no sera recuperada",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, borrar entidad!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result: any) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Borrado!',
        'La categoria ha sido borrada correctamente.',
        'success'
      )
      this.categoriaService.delete(id).subscribe(() => {
      }, () => {
        console.log('error')
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelar',
        'Accion cancelada :)',
        'error'
      )
    }
  })

 }

}
