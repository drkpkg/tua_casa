import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-new-receptionist',
  templateUrl: './new-receptionist.component.html',
  styleUrls: ['./new-receptionist.component.css']
})
export class NewReceptionistComponent {
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  
  constructor(private supabaseService: SupabaseService, private messageService: NzMessageService){
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group(
      {
        name: new FormControl('',[Validators.required]),
        surname: new FormControl('',[Validators.required]),
        lastname: new FormControl('',[Validators.required]),
        identity_document: new FormControl('',[Validators.required])
      }
    )
  }

  ngOnInit(){

  }

  onSubmit(){
    this.supabaseService.createReceptionist(this.formGroup.value.name, this.formGroup.value.surname, this.formGroup.value.lastname,
                                           this.formGroup.value.identity_document, 7, true).then(({data, error}) => {
      if(error)
      {
        console.log(error)
      }else{
        this.messageService.success('Se ha creado el personal correctamente');
      }
    })
  }
}
