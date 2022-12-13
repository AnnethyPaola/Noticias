import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { comentarios } from 'src/app/core/models/comentarios.models';
import { news } from 'src/app/core/models/news.models';
import { user } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/Auth/auth-service.service';
import { ComentariosService } from 'src/app/core/services/comentarios/comentarios-service.service';
import { NoticiasService } from 'src/app/core/services/noticias/noticias-service.service';
import { UserService } from 'src/app/core/services/User/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-news-page',
  templateUrl: './details-news-page.component.html',
  styleUrls: ['./details-news-page.component.scss']
})
export class DetailsNewsPageComponent implements OnInit {

  public form: FormGroup = new FormGroup([]);

  @Input() news?: news;
  @Input() user?: user ;
  rol: 'Estandar' | 'Admin' | undefined;
  NoticiasRecientes: news[] = []
  News?: news[];
  
  // comentarios?: comentarios[];
  cont = [0];
  coment: comentarios[] =[];
   comentarios:comentarios[] = [];

  login: boolean = false;

  constructor(
    private newsService: NoticiasService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private auth: AuthService,
    private comentariosService: ComentariosService,
    private userService: UserService,
    private newService: NoticiasService


  ) { 
    this.auth.stateUser().subscribe(res => {
      if (res) {
        this.login = false;
        this.getDatosUser(res.uid)
      } else {
        this.login = true;
      }
    })
  }

  ngOnInit(): void {
    this.getNewsDetails();
    this.formCreate();
    this.getComentario();
    this.getNoticiasRecientes();
  }

  getNewsDetails() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.newsService.getById<news>(id).subscribe(data => {
      this.news = data;
    })
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  private formCreate(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      noticia: new FormControl(id, [Validators.required]),
    })
  }

  public CreateComentario(): void {
    const comentario: comentarios = {
      ...this.form.value
    } as comentarios;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'La categoria ha sido creada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.comentariosService.create(comentario).subscribe(() => {
      console.log(comentario)
    }, (data) => {
      console.log(data);
    })
  }

  

  public getComentario() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.comentariosService.getList().valueChanges().subscribe(data => {
      this.coment = data;
      console.log(data)
      data.forEach(element => {
        if (id == element.idNoticia ) {
          console.log(element.idNoticia)
          console.log(id)

          console.log(element)
          this.cont[0] += 1
          if (this.cont[0] <= 6) {
            this.comentarios.push(element);
            console.log(this.comentarios)
          }
        }
      });
    });
  }

  

  getDatosUser(uid: string) {
    const path = "usuarios";
    const id = uid;
    this.userService.getById<user>(id).subscribe(data => {
      if (data) {
        this.rol = data.rol = "Admin"
        this.user = data;
      }
    })
  }

  public getNoticiasRecientes() {
    this.newService.getList().valueChanges().subscribe(data => {
      this.News = data;
      data.forEach(element => {
        if (element.categoria) {
          this.cont[0] += 1
          if (this.cont[0] <= 9) {
            this.NoticiasRecientes.push(element);
          }
        }
      });
    });
  }

  async detalles(id: any){
    
    await this.router.navigate(['/pages/detalles-news/' + id]  );
    location.reload();
    
  }

}
