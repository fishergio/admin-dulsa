import { Routes, RouterModule } from "@angular/router";
import { PagesComponent, DashboardComponent, 
      ProgressComponent, Graficas1Component} from './pages.index';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)

