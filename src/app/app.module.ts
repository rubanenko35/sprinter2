import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRouter } from './app.router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './shared/services/firebase.service';
import { AppPreloadingStrategy } from './utils/app.preloading-strategi';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseAuthService } from './shared/services/firebase-auth.service';
import { HeaderComponent } from 'app/components/header/header.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    FirebaseAuthService,
    FirebaseService,
    AppPreloadingStrategy,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
