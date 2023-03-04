import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from '../property/property.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzModalModule} from "ng-zorro-antd/modal";


@NgModule({
  declarations: [
    PropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule
  ]
})
export class PropertyModule { }
