import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Inicio', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Gráficos', url: 'graficos' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'rxjs', url: 'rxjs' },
      ],
    },
  ];

  constructor() {}
}
