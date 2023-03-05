import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentComponent } from './rent.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    RentComponent
  ],
    imports: [
        CommonModule,
        RentRoutingModule,
        NzTableModule,
        NzDividerModule,
        NzButtonModule
    ]
})
export class RentModule { }
