import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { PagesModule } from './features/pages/pages.module';
import { AddUserComponent } from './features/dashboard/add-user/add-user.component';
import { EditUserComponent } from './features/dashboard/edit-user/edit-user.component';
import { AddCategoriaComponent } from './features/dashboard/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './features/dashboard/edit-categoria/edit-categoria.component';
import { AuthService } from './core/services/Auth/auth-service.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';



@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    AddCategoriaComponent,
    EditCategoriaComponent,
    
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    FeaturesModule,
    SharedModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireStorageModule
  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppChildModule { }
