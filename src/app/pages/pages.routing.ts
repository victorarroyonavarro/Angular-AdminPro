import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent ,data:{titulo:"Dashboard",menu:"Dashboard"}},
            { path: 'progress', component: ProgressComponent ,data:{titulo:"Progreso",menu:"Dashboard"}},
            { path: 'graficos', component: Grafica1Component ,data:{titulo:"Gráficos",menu:"Dashboard"}},
            { path: 'account-settings', component: AccountSettingsComponent ,data:{titulo:"Configuración",menu:"Dashboard"}},
            { path: 'promesas', component: PromesasComponent,data:{titulo:"Promesas",menu:"Dashboard"} },
            { path: 'rxjs', component: RxjsComponent ,data:{titulo:"Obervables",menu:"Dashboard"}},



        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


