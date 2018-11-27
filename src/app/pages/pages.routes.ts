import { Routes, RouterModule } from "@angular/router";
import { PagesComponent, DashboardComponent, 
      ProgressComponent, Graficas1Component, 
      AccountSettingsComponent, PromisesComponent, RxjsComponent} from './pages.index';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
      { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes del tema' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)

