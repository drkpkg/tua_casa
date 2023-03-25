import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../../supabase.service";
import * as moment from "moment";


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  id: number;
  loading: boolean;
  customer: any;
  dataSetContracts: any[];
  dataSetVehicles: any[];
  dataSetParkingHistory: any[];

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = 0;
    this.loading = true;
    this.dataSetContracts = [];
    this.dataSetVehicles = [];
    this.dataSetParkingHistory = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.loadCustomer();
      this.loadVehicles();
      this.loadContracts();
      this.loadParkingHistory();
    });
  }

  loadCustomer() {
    this.supabaseService.getCustomerById(this.id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.customer = data ? data[0] : {};
        this.loading = false;
      }
    });
  }

  loadVehicles() {
    this.supabaseService.getVehiclesByCustomerId(this.id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.dataSetVehicles = data ? data : [];
      }
    });
  }

  loadContracts() {
    this.supabaseService.getContractsByCustomerId(this.id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.dataSetContracts = data ? data : [];
        // console.log('data', this.dataSetContracts);
      }
    });
  }

  loadParkingHistory() {
    this.supabaseService.getParkingHistoryByCustomerId(this.id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.dataSetParkingHistory = data ? data : [];
      }
    });
  }

  back() {
    this.router.navigate(['/clients']);
  }

  viewProperty(id: number) {
    this.router.navigate(['/properties', id]);
  }

  documents(id: number) {
    this.router.navigate(['/clients', id, 'documents']);
  }

  viewContract(id: number) {
    this.router.navigate([`/clients/${this.id}/contracts/${id}`]);
  }

  addVehicle() {
    this.router.navigate([`/clients/${this.id}/vehicles/new`]);
  }

  addContract() {
    this.router.navigate([`/clients/${this.id}/contracts/new`]);
  }

  viewVehicle(id: number) {
    this.router.navigate([`/clients/${this.id}/vehicles/${id}`]);
  }

  registerIngress() {
    this.supabaseService.registerIngress(this.customer?.id, 15.0).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.loadParkingHistory()
      }
    });
  }

  registerEgress() {
    this.supabaseService.registerEgress(this.customer?.id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.loadParkingHistory()
      }
    });
  }
}
