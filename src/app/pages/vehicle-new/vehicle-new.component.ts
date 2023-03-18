import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.css']
})
export class VehicleNewComponent implements OnInit {
  formGroup: FormGroup;
  formBuilder: FormBuilder;
  customerId: number;
  brands: any[];

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      plate: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      brand_id: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.customerId = 0;
    this.brands = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = params['id'];
      this.supabaseService.getBrands().then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.brands = data ? data : [];
        }
      });
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.supabaseService.addVehicle(
        this.formGroup.get('plate')?.value,
        this.formGroup.get('color')?.value,
        this.formGroup.get('brand_id')?.value,
        this.formGroup.get('description')?.value,
        this.customerId
      ).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          console.log('data', data)
          //this.router.navigate(['/vehicle-info', data?.id]);
        }
      });
    }
  }
}
