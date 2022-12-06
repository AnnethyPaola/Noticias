import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guard/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ExceptionComponent } from "./exception/exception.component";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [

  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
      component : PagesComponent
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule,
    ), 
    canActivate: [AuthGuard] ,
      component: DashboardComponent
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: ExceptionComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureRoutingModule { }