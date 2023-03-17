import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleNewRoutingModule } from './vehicle-new-routing.module';
import {VehicleNewComponent} from "./vehicle-new.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  declarations: [
    VehicleNewComponent
  ],
  imports: [
    CommonModule,
    VehicleNewRoutingModule,
    NzCardModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class VehicleNewModule { }
