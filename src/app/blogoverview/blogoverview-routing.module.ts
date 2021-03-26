import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogoverviewComponent } from './blogoverview.component';

const routes: Routes = [{ path: '', component: BlogoverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogoverviewRoutingModule { }
