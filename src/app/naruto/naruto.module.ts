import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NarutoRoutingModule } from './naruto-routing.module';
import { NarutoComponent } from './naruto.component';


@NgModule({
  declarations: [
    NarutoComponent
  ],
  imports: [
    CommonModule,
    NarutoRoutingModule
  ]
})
export class NarutoModule { }
