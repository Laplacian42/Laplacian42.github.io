import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MaterialModule } from './../material.module'
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', loadChildren: () => import('./../blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MaterialModule,
  FlexLayoutModule],
  exports: [RouterModule,
    MaterialModule]
})
export class HomeRoutingModule { }
