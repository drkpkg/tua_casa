import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyEditComponent } from './property-edit.component';
import { PropertyEditRoutingModule } from './property-edit-routing.module';
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {MapModule} from "../../components/map/map.module";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    PropertyEditComponent
  ],
  imports: [
    CommonModule,
    PropertyEditRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    MapModule,
    NzButtonModule
  ]
})
export class PropertyEditModule { }
