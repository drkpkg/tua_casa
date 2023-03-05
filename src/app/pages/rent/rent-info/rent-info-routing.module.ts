import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentInfoComponent} from "./rent-info.component";

const routes: Routes = [{
  path: '',
  component: RentInfoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentInfoRoutingModule { }
