import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SupabaseService} from "../../supabase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  passwordVisible: Boolean;
  passwordConfirmationVisible: Boolean;
  errorMessage: string;
  error: boolean;

  constructor(private supabaseService: SupabaseService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      acceptTerms: new FormControl(false, [Validators.required, Validators.requiredTrue]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      customer_type: new FormControl('', [Validators.required]),
    });
    this.passwordVisible = false;
    this.passwordConfirmationVisible = false;
    this.errorMessage = '';
    this.error = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formGroup.valid);
    console.log(this.formGroup.errors);
    if (this.formGroup.valid && this.formGroup.value.password === this.formGroup.value.passwordConfirm) {
      this.supabaseService.createUser(
        this.formGroup.value.email,
        this.formGroup.value.password
      ).then((result) => {
        console.log(result);
        if (result.error) {

        }else{
          // this.supabaseService.createCustomer(
          //   this.formGroup.value.name,
          //   this.formGroup.value.surname,
          //   this.formGroup.value.lastname,
          //   this.formGroup.value.phone,
          //   this.formGroup.value.customer_type,
          //   this.formGroup.value.email
          // ).then((result) => {
          //   if (result.error) {
          //     this.error = true;
          //     this.errorMessage = result.error.message;
          //   } else {
          //     this.router.navigate(['/login']);
          //   }
          // });
        }
      });
    }
  }
}

