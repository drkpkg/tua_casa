import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit{
  loading: boolean;
  property: any;

  constructor(private supabaseService: SupabaseService, private router: Router, private route: ActivatedRoute) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.supabaseService.getProperty(params.id).then(({data, error}) => {
        if (error) {
          console.log(error);
        } else {
          this.property = data ? data[0] : null;
        }
      });
    });
  }

  back() {
    this.router.navigate(['/properties']);
  }

  edit(id: string) {
    this.router.navigate([`/properties/${id}/edit`]);
  }

  documents(id: string) {
    this.router.navigate([`/properties/${id}/documents`]);
  }
}
