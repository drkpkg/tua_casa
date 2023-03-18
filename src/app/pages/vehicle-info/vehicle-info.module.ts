import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleInfoRoutingModule } from './vehicle-info-routing.module';
import {VehicleInfoComponent} from "./vehicle-info.component";


@NgModule({
  declarations: [
    VehicleInfoComponent
  ],
  imports: [
    CommonModule,
    VehicleInfoRoutingModule
  ]
})
export class VehicleInfoModule { }
