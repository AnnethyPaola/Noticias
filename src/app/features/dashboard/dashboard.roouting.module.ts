import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: 'addNews',
        loadChildren: () => 
        import('./add-new/add.module').then((m) => m.AddNewsModule)
    },

    {
      path: 'addUser',
      loadChildren: () =>
      import('./add-user/add.user.module').then((m) => m.AddUserModule)
    },

    {
      path: 'addCategoria',
      loadChildren: () =>
      import('./add-categoria/add.categoria.module').then((m) => m.AddCategoriaModule)
    },

    {
      path: 'detailsNews',
      loadChildren: () =>
      import('./details-new/details.news.module').then((m) => m.DetailsNewsModule)
    },

    {
      path: 'detailsUser',
      loadChildren: () => 
      import('./details-user/details.user.module').then((m) => m.DetailsUserModule)
    },

    {
      path: 'editNews',
      loadChildren: () => 
      import('./edit-new/edit.news.module').then((m) => m.EditNewsModule)
    },

    {
      path: 'editUser',
      loadChildren: () => 
      import('./edit-user/edit.user.module').then((m) => m.EditUserModule)
    },

    {
      path: 'editCategoria',
      loadChildren: () => 
      import('./edit-categoria/edit.categoria.module').then((m) => m.EditCategoriaModule)
    },

    {
      path: 'listUser',
      loadChildren: () => 
      import('./list-user/list.user.module').then((m) => m.ListUserModule)
    },

    {
      path: 'listNews',
      loadChildren: () => 
      import('./list-news/list.news.module').then((m) => m.ListNewsModule)
    },

    {
      path: 'listCategoria',
      loadChildren: () => 
      import('./list-categoria/list.categoria.module').then((m) => m.ListCategoriaModule)
    },

    {
      path: 'dashboard-admin',
      component: DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRountingModule { }
