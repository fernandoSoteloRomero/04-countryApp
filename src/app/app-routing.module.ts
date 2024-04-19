import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/components/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/components/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/components/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'countries/by-capital',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
