import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleInfoRoutingModule } from './vehicle-info-routing.module';
import {VehicleInfoComponent} from "./vehicle-info.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  declarations: [
    VehicleInfoComponent
  ],
  imports: [
    CommonModule,
    VehicleInfoRoutingModule,
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class VehicleInfoModule { }
