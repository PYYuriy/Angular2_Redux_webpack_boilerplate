import { Routes, RouterModule } from '@angular/router';

import { DataResolver } from '../services/app.resolver';
import { DetailComponent } from '../containers/+detail/detail.component';
import { AboutComponent } from '../containers/about/about.component';
import { HomeComponent } from '../containers/home/home.component';
import { NoContentComponent } from '../multiple-components/no-content/no-content.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**',    component: NoContentComponent },
];
export class AppRoutingModule {}
