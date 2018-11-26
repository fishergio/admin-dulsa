import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Graficas', url: '/graficas1' },
        { title: 'Progress', url: '/progress' },
        { title: 'Promesas', url: '/promises' },
        { title: 'Rxjs Component', url: '/rxjs' },
      ]
    }
  ]

  constructor() { }
}
