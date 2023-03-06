import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentNewComponent} from "./rent-new.component";

const routes: Routes = [
  {
    path: '',
    component: RentNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentNewRoutingModule { }
