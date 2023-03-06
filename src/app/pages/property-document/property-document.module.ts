import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDocumentRoutingModule } from './property-document-routing.module';
import {PropertyDocumentComponent} from "./property-document.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  declarations: [
    PropertyDocumentComponent
  ],
  imports: [
    CommonModule,
    PropertyDocumentRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    PdfViewerModule,
    NzDividerModule
  ]
})
export class PropertyDocumentModule { }
