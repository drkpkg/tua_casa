import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-rent-info',
  templateUrl: './rent-info.component.html',
  styleUrls: ['./rent-info.component.css']
})
export class RentInfoComponent implements OnInit {
  id: number;
  loading: any;
  rent: any;

  constructor(private supabaseService: SupabaseService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = 0;
    this.loading = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.supabaseService.getRent(params.id).then(({data, error}) => {
        if (error) {
          console.log(error);
        } else {
          this.rent = data ? data[0] : {};
        }
      });
    });
  }

  registerPayment(id: number) {

  }

  back() {
    this.router.navigate(['/rents'], {relativeTo: this.activatedRoute});
  }
}
