import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertyInfoComponent} from "./property-info.component";

const routes: Routes = [
  {
    path: '',
    component: PropertyInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyInfoRoutingModule { }
