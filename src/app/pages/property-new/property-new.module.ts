import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyNewRoutingModule } from './property-new-routing.module';
import {PropertyNewComponent} from "./property-new.component";


@NgModule({
  declarations: [
    PropertyNewComponent
  ],
  imports: [
    CommonModule,
    PropertyNewRoutingModule
  ]
})
export class PropertyNewModule { }
