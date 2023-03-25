import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingSpaceComponent} from "./parking-space.component";

const routes: Routes = [
  {
    path: '',
    component: ParkingSpaceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingSpaceRoutingModule { }
