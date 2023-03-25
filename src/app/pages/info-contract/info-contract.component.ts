import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";

@Component({
  selector: 'app-info-contract',
  templateUrl: './info-contract.component.html',
  styleUrls: ['./info-contract.component.css']
})
export class InfoContractComponent implements OnInit {
  private id: number;
  private contract_id: number;

  constructor(private supabaseService: SupabaseService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = 0;
    this.contract_id = 0;
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.contract_id = params['contract_id'];
      this.loadContract();
    });
  }

  ngOnInit(): void {
  }

  private loadContract() {
    this.supabaseService.getContractById(this.contract_id).then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        console.log(data);
        // this.contract = data ? data[0] : {};
      }
    });
  }
}
