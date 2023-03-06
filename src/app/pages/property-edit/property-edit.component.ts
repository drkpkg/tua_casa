import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent {
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  id: number;
  onMapChange: Function;


  constructor(private router: Router, private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.id = 0;
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      address: new FormControl('', [Validators.required]),
      propertyType: new FormControl('', [Validators.required]),
      propertySize: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required]),
    });
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
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.supabaseService.getProperty(this.id).then(({data, error}) => {
        if (error) {
          console.log(error);
        } else {
          this.formGroup.get('address')?.setValue(data ? data[0].address : '');
          this.formGroup.get('propertyType')?.setValue(data ? data[0].property_type : '');
          this.formGroup.get('propertySize')?.setValue(data ? data[0].property_size : '');
          this.formGroup.get('latitude')?.setValue(data ? data[0].latitude : 0);
          this.formGroup.get('longitude')?.setValue(data ? data[0].longitude : 0);
        }
      })
    });
  }

  onCancel() {
    this.router.navigate(['/properties', this.id]);
  }

  onSubmit() {
    this.supabaseService.updateProperty(
      this.id,
      this.formGroup.get('address')?.value,
      this.formGroup.get('propertyType')?.value,
      this.formGroup.get('propertySize')?.value,
      this.formGroup.get('latitude')?.value,
      this.formGroup.get('longitude')?.value
    ).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        this.router.navigate(['/properties', this.id]);
      }
    });
  }
}
