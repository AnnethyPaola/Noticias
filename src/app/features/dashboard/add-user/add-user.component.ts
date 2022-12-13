import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router : Router
  ) { }

  user: user = {
    uid: '',
    nombre: '',
    rol: '',
    password: '',
    correo: '',
    userName: ''
  }

  ngOnInit(): void {
  }

  async Register(correo: any, password: any) {
    const res = await this.authService.register(correo, password).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o password incorrectos!'
      })

    })
    if (res) {
      const id = res.user?.uid;
      const path = 'usuarios'
      this.user.password = 'null';
       this.user.uid = id;
      this.authService.create(this.user, path, id);
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado correctamente, Bienvenido al sistema',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/dashboard/listUser/list-user'])
    }
  }

 

}
