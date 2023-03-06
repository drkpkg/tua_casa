import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDocumentRoutingModule } from './client-document-routing.module';

import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {ClientDocumentComponent} from "./client-document.component";


@NgModule({
  declarations: [
    ClientDocumentComponent
  ],
  imports: [
    CommonModule,
    ClientDocumentRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    PdfViewerModule,
    NzDividerModule
  ]
})
export class ClientDocumentModule { }
