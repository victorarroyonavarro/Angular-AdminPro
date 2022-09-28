import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes:Routes=[
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard','subTitulo':'Dashboard' } },
]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule {}
