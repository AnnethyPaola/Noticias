import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { user } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private db: AngularFirestore,
    private router : Router
  ) { }

  

  user: user = {
    uid: '',
    nombre: '',
    rol: "Estandar",
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
      this.router.navigate(['/pages/home']);
    }
  }

}
