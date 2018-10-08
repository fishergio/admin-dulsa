import { NgModule } from "@angular/core";
import { BreadcrumbsComponent, HeaderComponent, NopagefoundComponent, SidebarComponent } from './shared.index'

@NgModule({
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
    SidebarComponent
  ],
  imports:[
    
  ]
})

export class SharedModule {}