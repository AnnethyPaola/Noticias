import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/core/models/user.models';
import { UserService } from 'src/app/core/services/User/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public User: Array<user> = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  public getUsuarios() {
    this.userService.getList().valueChanges().subscribe(data => {
     this.User = data;
    })
 }

 deleteUser(id: string | undefined){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Desea borrar este usuario?',
    text: "Una vez eliminado el usuario, no sera recuperada",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, borrar usuario!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result: any) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Borrado!',
        'La categoria ha sido borrada correctamente.',
        'success'
      )
      this.userService.delete(id).subscribe(() => {
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
