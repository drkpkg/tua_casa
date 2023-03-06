import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientDocumentComponent} from "./client-document.component";


const routes: Routes = [
  {
    path: '',
    component: ClientDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDocumentRoutingModule { }
