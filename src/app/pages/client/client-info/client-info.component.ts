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

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = 0;
    this.loading = true;
    this.dataSetContracts = [];
    this.dataSetVehicles = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.supabaseService.getCustomerById(this.id).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.customer = data ? data[0] : {};
          this.loading = false;
        }
      });
      this.supabaseService.getVehiclesByCustomerId(this.id).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.dataSetVehicles = data ? data : [];
        }
      });
      this.supabaseService.getContractsByCustomerId(this.id).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.dataSetContracts = data ? data : [];
        }
      });
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
    this.router.navigate(['/contracts', id]);
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

  registerIngress(vehicleId: number, customerId: number) {
    this.supabaseService.registerIngress(vehicleId, customerId, 15.0).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        console.log('data', data)
      }
    });
  }

  registerEgress(vehicleId: number) {
    this.supabaseService.registerEgress(vehicleId).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        console.log('data', data)
      }
    });
  }
}
