import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { news } from 'src/app/core/models/news.models';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  // news!: news[];

  credenciales = {
    correo: null,
    password: null
  }

  async login(correo: string, password: string) {
    const res = await this.authService.login(correo, password).catch(err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o password incorrectos!'
      })
    })
    if (res) {
      console.log('res', res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido al sistema',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/pages/home']);
    }
  }


}
