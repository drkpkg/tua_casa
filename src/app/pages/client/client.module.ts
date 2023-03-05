import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientComponent} from './client.component';
import {ListClientComponent} from './list-client/list-client.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzFormModule} from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NewClientComponent} from './new-client/new-client.component';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzImageModule} from "ng-zorro-antd/image";


@NgModule({
  declarations: [
    ClientComponent,
    NewClientComponent,
    ListClientComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzMessageModule,
    NzCardModule,
    NzSelectModule,
    NzModalModule,
    NzImageModule,
    FormsModule
  ]
})
export class ClientModule {
}
