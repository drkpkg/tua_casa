import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentInfoRoutingModule } from './rent-info-routing.module';
import {RentInfoComponent} from "./rent-info.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    RentInfoComponent
  ],
  imports: [
    CommonModule,
    RentInfoRoutingModule,
    NzGridModule,
    NzCardModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class RentInfoModule { }
