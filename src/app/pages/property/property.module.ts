import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    PropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class PropertyModule { }
