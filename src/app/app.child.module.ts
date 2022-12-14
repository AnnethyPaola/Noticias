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
import { AuthService } from './core/services/Auth/auth-service.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FeaturesModule,
    SharedModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireStorageModule,
    CommonModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppChildModule { }
