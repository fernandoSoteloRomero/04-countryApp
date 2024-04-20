import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinerComponent
  ]
})
export class SharedModule { }
