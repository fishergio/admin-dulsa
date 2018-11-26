
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PagesComponent, DashboardComponent, Graficas1Component, 
  ProgressComponent, AccountSettingsComponent, PromisesComponent, RxjsComponent
} from './pages.index'

// MODULOS 
import { SharedModule } from '../shared/shared.module'

// ROUTES
import { PAGES_ROUTES } from '../pages/pages.routes';

//temporal 
import { IncrementComponent } from '../components/increment/increment.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
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
    ChartsModule,
    CommonModule,
  ]
})


export class PagesModule {}