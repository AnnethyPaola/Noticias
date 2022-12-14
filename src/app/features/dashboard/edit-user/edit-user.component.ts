import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/core/models/user.models';
import { UserService } from 'src/app/core/services/User/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  user!: any;
  ngOnInit(): void {
    this.getById();
  }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
  })


  getById() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.getById(id).subscribe(data => {
      this.user = data;
      this.form.patchValue({
        nombre: this.user.nombre,
        password: this.user.password,
        correo: this.user.correo,
        userName: this.user.userName,
      })
    })
  }

  EditUser(user: user) {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.update(id, user).subscribe((data: user) => {
      this.user = data;
    })
  }

  submit(Inews: any) {
    this.EditUser(Inews);
    let id = this.activeRoute.snapshot.paramMap.get('id');
    const User: user = {
      ...this.form.value,
    } as unknown as user;
    User.uid = id as any;
    this.EditUser(User);
    Swal.fire({
      title: 'Bien!',
      text: 'Usuario editado correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.router.navigate(['/dashboard/listUser/list-user'])
  }

}
