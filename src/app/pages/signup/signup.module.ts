import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import {CheckboxModule} from "primeng/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from "./signup.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    CheckboxModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzAlertModule,
    NzButtonModule,
    NzCheckboxModule
  ]
})
export class SignupModule { }
