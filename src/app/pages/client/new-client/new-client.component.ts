import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SupabaseService } from 'src/app/supabase.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit{
  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(private supabaseService: SupabaseService, private messageService: NzMessageService, private router: Router){
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group(
      {
        name: new FormControl('',[Validators.required]),
        surname: new FormControl('',[Validators.required]),
        lastname: new FormControl('',[Validators.required]),
        identity_document: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
        phone: new FormControl('',[Validators.required]),
        customer_type: new FormControl('0',[Validators.required]),
      }
    )
  }

  ngOnInit(){

  }

  onSubmit(){
    this.supabaseService.createCustomer(
      this.formGroup.value.name,
      this.formGroup.value.surname,
      this.formGroup.value.lastname,
      this.formGroup.value.identity_document,
      this.formGroup.value.phone,
      this.formGroup.value.email,
      this.formGroup.value.customer_type).then(({data, error}) => {
      if(error)
      {
        console.log(error)
      }else{
        this.messageService.success('Se ha creado el cliente correctamente');
        window.location.reload();
      }
    })
  }
}
