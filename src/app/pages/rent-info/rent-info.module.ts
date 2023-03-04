import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentInfoRoutingModule } from './rent-info-routing.module';
import {RentInfoComponent} from "./rent-info.component";


@NgModule({
  declarations: [
    RentInfoComponent
  ],
  imports: [
    CommonModule,
    RentInfoRoutingModule
  ]
})
export class RentInfoModule { }
