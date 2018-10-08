
import { NgModule } from "@angular/core";
import { PagesComponent, DashboardComponent, Graficas1Component, ProgressComponent } from './pages.index'

// MODULOS 
import { SharedModule } from '../shared/shared.module'

// ROUTES
import { PAGES_ROUTES } from '../pages/pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})


export class PagesModule {}