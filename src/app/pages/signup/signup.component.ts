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
      acceptTerms: new FormControl(false, [Validators.requiredTrue])
    });
    this.passwordVisible = false;
    this.passwordConfirmationVisible = false;
    this.errorMessage = '';
    this.error = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.password === this.formGroup.value.passwordConfirm) {
        this.supabaseService.signUp(this.formGroup.value.email, this.formGroup.value.password).then((response) => {
          if (response.error) {
            this.error = true;
            this.errorMessage = response.error.message;
          } else {
            this.router.navigate(['/login']);
          }
        });
      }
    }
  }
}

