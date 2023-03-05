import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-property-new',
  templateUrl: './property-new.component.html',
  styleUrls: ['./property-new.component.css']
})
export class PropertyNewComponent implements OnInit {
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  customers: any[];
  onMapChange: Function;

  constructor(private router: Router, private supabaseService: SupabaseService, private httpClient: HttpClient) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      address: new FormControl('', [Validators.required]),
      propertyType: new FormControl('', [Validators.required]),
      propertySize: new FormControl('', [Validators.required]),
      customerId: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required]),
    });
    this.customers = [];
    this.onMapChange = (lat: number, lng: number) => {
      this.formGroup.get('latitude')?.setValue(lat);
      // set as touched to show error message
      this.formGroup.get('latitude')?.markAsTouched();
      this.formGroup.get('longitude')?.setValue(lng);
      // set as touched to show error message
      this.formGroup.get('longitude')?.markAsTouched();
      this.httpClient
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=es`)
        .subscribe((data: any) => {
          this.formGroup.get('address')?.setValue(data.display_name);
        });
    }
  }

  ngOnInit(): void {
    this.supabaseService.getCustomerView({customer_type: "0"}).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else if (data) {
        this.customers = data;
      } else {
        console.log("No data")
      }
    });
  }

  onSubmit() {

  }
}
