import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rent-info',
  templateUrl: './rent-info.component.html',
  styleUrls: ['./rent-info.component.css']
})
export class RentInfoComponent implements OnInit {
  id: number;
  loading: any;
  showModal: boolean = false;
  rent: any;
  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = 0;
    this.loading = false;
    this.formBuilder = new FormBuilder();
    //amount: number, rentalId: number, customerId: number, paymentType: string
    this.formGroup = this.formBuilder.group({
      amount: new FormControl('', [Validators.required]),
      paymentType: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.supabaseService.getRent(params.id).then(({data, error}) => {
        if (error) {
          console.log(error);
        } else {
          this.rent = data ? data[0] : {};
          console.log(this.rent);
        }
      });
    });
  }

  registerPayment(id: number) {
    this.id = id;
    this.showModal = true;
  }

  back() {
    this.router.navigate(['/rents'], {relativeTo: this.activatedRoute});
  }

  handleCancel() {
    this.showModal = false;
  }

  handleOk() {
    this.supabaseService.registerPayment(
      this.formGroup.get('amount')?.value,
      this.id,
      this.rent?.property?.customer?.id,
      this.formGroup.get('paymentType')?.value
    ).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        this.showModal = false;
        this.back();
      }
    });
  }
}
