import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  constructor(
    public authService : AuthService
  ) { }

  ngOnInit(): void {
  }

}
