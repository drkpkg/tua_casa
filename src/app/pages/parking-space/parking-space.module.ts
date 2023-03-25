import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingSpaceRoutingModule } from './parking-space-routing.module';
import {ParkingSpaceComponent} from "./parking-space.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  declarations: [
    ParkingSpaceComponent
  ],
  imports: [
    CommonModule,
    ParkingSpaceRoutingModule,
    NzGridModule,
    NzDividerModule
  ]
})
export class ParkingSpaceModule { }
