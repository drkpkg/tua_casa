import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoContractRoutingModule } from './info-contract-routing.module';
import {InfoContractComponent} from "./info-contract.component";


@NgModule({
  declarations: [
    InfoContractComponent
  ],
  imports: [
    CommonModule,
    InfoContractRoutingModule
  ]
})
export class InfoContractModule { }
