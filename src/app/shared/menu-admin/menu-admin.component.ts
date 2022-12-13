import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  constructor(
    public authService : AuthService,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }
  
  singtOut(){
    this.authService.singtOut();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Session finalizada',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['/pages/home']);
  }
}
