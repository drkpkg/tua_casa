import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyInfoRoutingModule } from './property-info-routing.module';
import {PropertyInfoComponent} from "./property-info.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {MapModule} from "../../components/map/map.module";


@NgModule({
  declarations: [
    PropertyInfoComponent
  ],
  imports: [
    CommonModule,
    PropertyInfoRoutingModule,
    NzGridModule,
    NzCardModule,
    NzDividerModule,
    NzButtonModule,
    MapModule
  ]
})
export class PropertyInfoModule { }
