import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MapModule} from "../../components/map/map.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MapModule
    ]
})
export class HomeModule { }
