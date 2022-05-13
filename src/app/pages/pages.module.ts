import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
  ,exports:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
  ]
})
export class PagesModule { }
