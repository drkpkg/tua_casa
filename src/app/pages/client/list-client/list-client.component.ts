import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/models/customer.model';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  dataSet: Customer[] = [];
  isVisible: boolean;
  customerId: number;
  selectedType: string = "all";
  dataSetProperties: any[];

  constructor(private supabaseService: SupabaseService) {
    this.isVisible = false;
    this.customerId = 0;
    this.dataSetProperties = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  handleCancel() {
    this.isVisible = false;
    this.customerId = 0;
  }

  handleOk() {
    this.supabaseService.deleteCustomer(this.customerId).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.isVisible = false;
        this.loadData();
      }
    });
  }

  showModal(id: number) {
    this.isVisible = true;
    this.customerId = id;
  }

  private loadData() {
    let condition = this.selectedType === "all" ? {} : {customer_type: this.selectedType};
    this.supabaseService.getCustomerView(condition).then(({data, error}) => {
      let dataValue: any = data;
      if (error) {
        console.log('error', error)
      } else {
        console.log(dataValue);
        this.dataSet = Customer.fromJsonList(dataValue);
      }
    });
  }

  filterTable() {
    this.loadData();
  }
}
