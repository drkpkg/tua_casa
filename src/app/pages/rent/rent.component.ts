import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SupabaseService} from "../../supabase.service";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  dataSet: any[];

  constructor(private router: Router, private supabaseService: SupabaseService) {
    this.dataSet = [];
  }

  ngOnInit(): void {
    this.supabaseService.getTransfers().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        this.dataSet = data ?? [];
      }
    });
  }
}
