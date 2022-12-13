import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/core/models/news.models';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  public news: Array<news> = [];
  contador = 0;
  public page = 9;
  public pageSize = 8;

  constructor(
    private newService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  public getNews() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.news = data;
    })
  }

  deleteNews(id: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Desea borrar esta noticia?',
      text: "Una vez eliminada la noticia no sera recuperada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar entidad!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'La noticia ha sido borrada correctamente.',
          'success'
        )
        this.newService.delete(id).subscribe(() => {
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
