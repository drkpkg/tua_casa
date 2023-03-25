import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  clientId: number;
  vehicleId: number;
  vehicle: any;
  vehicleContractList: any[];
  isVisibleNewContract: boolean;
  formBuilder: FormBuilder;
  formNewContract: FormGroup;

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.clientId = 0;
    this.vehicleId = 0;
    this.vehicle = {};
    this.vehicleContractList = [];
    this.isVisibleNewContract = false;
    this.formBuilder = new FormBuilder();
    //id, start_date, end_date, total_amount, created_at, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document))
    this.formNewContract = this.formBuilder.group({
      start_date: new FormControl(moment().format('YYYY-MM-DD'), [Validators.required]),
      end_date: new FormControl(moment().add(1, 'year').format('YYYY-MM-DD'), [Validators.required]),
      total_amount: new FormControl(0, [Validators.required]),
      contract_type: new FormControl('0', [Validators.required]),
    });
    this.activatedRoute.params.subscribe(params => {
      this.clientId = params['id'];
      this.vehicleId = params['vehicle_id'];
      this.supabaseService.getVehicleById(this.vehicleId).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.vehicle = data ? data[0] : {};
        }
      });
    });
    this.supabaseService.getContractsByVehicleId(this.vehicleId).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.vehicleContractList = data ? data : [];
      }
    });
  }

  ngOnInit(): void {

  }

  showModal(param: string) {

  }

  deactivateContract(id: number) {
    this.supabaseService.deactivateContract(id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.supabaseService.getContractsByVehicleId(this.vehicleId).then(({data, error}) => {
          if (error) {
            console.log('error', error)
          } else {
            this.vehicleContractList = data ? data : [];
          }
        });
      }
    });
  }

  showModalNewContract() {
    this.isVisibleNewContract = true;
  }

  handleCancel() {
    this.isVisibleNewContract = false;
  }

  handleOk() {
    this.supabaseService.createContract(
      this.formNewContract.get('start_date')?.value,
      this.formNewContract.get('end_date')?.value,
      this.formNewContract.get('total_amount')?.value,
      this.clientId,
      this.vehicleId
    ).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.isVisibleNewContract = false;
        this.supabaseService.getContractsByVehicleId(this.vehicleId).then(({data, error}) => {
          if (error) {
            console.log('error', error)
          } else {
            this.vehicleContractList = data ? data : [];
          }
        });
      }
    });
  }
}
