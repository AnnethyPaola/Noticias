import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { DetailsNewComponent } from '../dashboard/details-new/details-new.component';
import { DetailsNewsPageComponent } from './details-news-page/details-news-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'menu',
    component: MenuComponent,
  },

  {
    path: 'deportes',
    loadChildren: () =>
      import('./deportes/deportes.module').then((m) => m.DeportesModule),
  },

  {
    path: 'entretenimiento',
    loadChildren: () =>
      import('./entretenimiento/entretenimiento.module').then((m) => m.EntretenimientoModule)
  },

  {
    path: 'global',
    loadChildren: () =>
      import('./global/global.module').then((m) => m.GlobalsModule)
  },

  {
    path: 'news',
    loadChildren: () =>
      import('./news/news.module').then((m) => m.NewsModule)
  },

  {
    path: 'politica',
    loadChildren: () =>
      import('./politica/politica.module').then((m) => m.PoliticaModule)
  },

  {
    path: 'salud',
    loadChildren: () =>
      import('./salud/salud.module').then((m) => m.SaludModule)
  },

  {
    path: 'economia',
    loadChildren: () =>
      import('./economia/economia.module').then((m) => m.EconomiaModule)
  },

  {
    path: 'tecnologia',
    loadChildren: () =>
      import('./tecnologia/tecnologia.module').then((m) => m.TecnologiaModule)
  },


  {
    path: 'social',
    loadChildren: () =>
      import('./social/social.module').then((m) => m.SocialModule)
  },

  {
    path: 'detalles-news/:id',
    component : DetailsNewsPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRountingModule { }
