import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BreadcrumbsComponent, HeaderComponent, NopagefoundComponent, SidebarComponent } from './shared.index'
import { RouterModule } from '@angular/router';

@NgModule({
  imports:[
    RouterModule,
    CommonModule,
  ],
  declarations: [
    BreadcrumbsComponent, 
    HeaderComponent, 
    NopagefoundComponent,
    SidebarComponent
  ],
  exports:[
    BreadcrumbsComponent, 
    HeaderComponent, 
    NopagefoundComponent,
    SidebarComponent,
    
  ],
})

export class SharedModule {}