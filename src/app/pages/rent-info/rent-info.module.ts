import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentInfoRoutingModule } from './rent-info-routing.module';
import {RentInfoComponent} from "./rent-info.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzModalModule} from "ng-zorro-antd/modal";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";


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
    NzIconModule,
    NzModalModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class RentInfoModule { }
