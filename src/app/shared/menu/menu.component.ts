import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';
import { UserService } from 'src/app/core/services/User/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [NgbModalConfig, NgbModal],

})
export class MenuComponent implements OnInit {

  @Input() user?: user ;
  rol: 'Estandar' | 'Admin' | undefined;
  login: boolean = false;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private modalService: NgbModal,
    public authService: AuthService,
    private router: Router,
  ) {

    this.auth.stateUser().subscribe(res => {
      if (res) {
        this.login = true;
        this.getDatosUser(res.uid)
      } else {
        this.login = false;
      }
    })
  }



  ngOnInit(): void {

  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  getDatosUser(uid: string) {
    const path = "usuarios";
    const id = uid;
    this.userService.getById<user>(id).subscribe(data => {
      if (data) {
        // this.rol = data.rol = "Estandar"
        this.user = data;
      }
    })
  }

   singtOut() {
    Swal.fire({
      title: 'Esta seguro de cerrar sesion?',
      text: "una vez cerrada la sesion se tendra que volver a loguear para disfrutar de ciertos privilegios...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesion!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cerrar Sesion!',
          'Cerrando sesion...',
          'success'
        )
        this.authService.singtOut();
        location.reload(); 
      }
    })

  }

}
