import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RentNewRoutingModule} from './rent-new-routing.module';
import {RentNewComponent} from "./rent-new.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    RentNewComponent
  ],
  imports: [
    CommonModule,
    RentNewRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule
  ]
})
export class RentNewModule {
}
