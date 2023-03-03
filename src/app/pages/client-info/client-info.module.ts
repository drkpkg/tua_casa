import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientInfoComponent} from "./client-info.component";
import {ClientInfoRoutingModule} from "./client-info-routing.module";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
   ClientInfoComponent
  ],
  imports: [
    CommonModule,
    ClientInfoRoutingModule,
    NzGridModule,
    NzCardModule,
    NzDividerModule,
    NzButtonModule
  ]
})
export class ClientInfoModule { }
