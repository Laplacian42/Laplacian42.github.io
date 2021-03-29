import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogoverviewComponent } from './blogoverview.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module'

const routes: Routes = [{ path: '', component: BlogoverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FlexLayoutModule],
  exports: [RouterModule]
})
export class BlogoverviewRoutingModule { }
