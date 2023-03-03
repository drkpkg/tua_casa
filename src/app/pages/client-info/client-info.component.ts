import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  id: number;
  loading: boolean;
  customer: any;

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = 0;
    this.loading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.supabaseService.getCustomerById(this.id).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        } else {
          this.customer = data[0];
          this.loading = false;
        }
      })
    });
  }

  back() {
    this.router.navigate(['/clients']);
  }
}
