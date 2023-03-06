import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../../supabase.service";


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  id: number;
  loading: boolean;
  customer: any;
  dataSetProperties: any[];

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = 0;
    this.loading = true;
    this.dataSetProperties = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.supabaseService.getCustomerById(this.id).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.customer = data ? data[0] : {};
          this.loading = false;
        }
      });
      this.supabaseService.getPropertiesByCustomerId(this.id).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.dataSetProperties = data ?? [];
        }
      });
    });
  }

  back() {
    this.router.navigate(['/clients']);
  }

  viewProperty(id: number) {
    this.router.navigate(['/properties', id]);
  }
}
