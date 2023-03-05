import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyNewRoutingModule } from './property-new-routing.module';
import {PropertyNewComponent} from "./property-new.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {MapModule} from "../../components/map/map.module";


@NgModule({
  declarations: [
    PropertyNewComponent
  ],
  imports: [
    CommonModule,
    PropertyNewRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzButtonModule,
    MapModule
  ]
})
export class PropertyNewModule { }
