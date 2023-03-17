import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehicleNewComponent} from "./vehicle-new.component";

const routes: Routes = [
  {
    path: '',
    component: VehicleNewComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleNewRoutingModule { }
