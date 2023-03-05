import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  dataSet: any[];
  isVisible: boolean;


  constructor(private supabaseService: SupabaseService) {
    this.dataSet = [];
    this.isVisible = false;
  }

  showModal(id: number): void {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.supabaseService.getProperties().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else if (data) {
        this.dataSet = data;
      } else {
        console.log("No data")
      }
    });
  }
}
