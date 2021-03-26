import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogoverviewRoutingModule } from './blogoverview-routing.module';
import { BlogoverviewComponent } from './blogoverview.component';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MaterialModule } from './../material.module';

@NgModule({
  declarations: [BlogoverviewComponent],
  imports: [
    CommonModule,
    BlogoverviewRoutingModule,
    ScullyLibModule,
    MaterialModule
  ]
})
export class BlogoverviewModule { }
