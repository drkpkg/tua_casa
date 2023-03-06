import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rent-new',
  templateUrl: './rent-new.component.html',
  styleUrls: ['./rent-new.component.css']
})
export class RentNewComponent implements OnInit {

  customers: any[];
  properties: any[];
  formGroup: FormGroup;
  formBuilder: FormBuilder;

  constructor(private supabaseService: SupabaseService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.customers = [];
    this.properties = [];
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      propertyId: new FormControl('', [Validators.required]),
      customerId: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.supabaseService.getCustomerViewByCondition([1, 2]).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        this.customers = data ?? [];
      }
    });
    this.supabaseService.getProperties().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        this.properties = data ?? [];
        console.log(this.properties);
      }
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    //startDate: string, endDate: string, customerId: number, propertyId: number, amount: number
    this.supabaseService.createRent(
      this.formGroup.get('startDate')?.value,
      this.formGroup.get('endDate')?.value,
      this.formGroup.get('customerId')?.value,
      this.formGroup.get('propertyId')?.value,
      this.formGroup.get('amount')?.value,
    )
      .then(({data, error}) => {
        if (error) {
          console.log(error);
        } else {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
