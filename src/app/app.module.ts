
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NOTYF, notyfFactory } from '../app/utils/notyf.token';




@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,

  ],
  providers: [
    { provide: NOTYF, useFactory: notyfFactory },
    {provide: HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
