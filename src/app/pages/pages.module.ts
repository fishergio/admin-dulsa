
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PagesComponent, DashboardComponent, Graficas1Component, ProgressComponent } from './pages.index'

// MODULOS 
import { SharedModule } from '../shared/shared.module'

// ROUTES
import { PAGES_ROUTES } from '../pages/pages.routes';

//temporal 
import { IncrementComponent } from '../components/increment/increment.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
  ]
})


export class PagesModule {}