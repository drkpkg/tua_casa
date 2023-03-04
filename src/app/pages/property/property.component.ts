import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  dataSet: any[];
  isVisible: boolean;


  constructor() {
    this.dataSet = [];
    this.isVisible = false;
  }

  showModal(id:number): void {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
  }
}
