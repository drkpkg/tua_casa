import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  styleUrls: ['./parking-space.component.css']
})
export class ParkingSpaceComponent implements OnInit {
  items: any;
  parkingData: any;

  constructor(private supabaseService: SupabaseService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.items = [];
    this.parkingData = [];
  }

  ngOnInit(): void {
    this.supabaseService.getParkingSpaces().then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        this.items = data || [];
        let dataList: any = {}
        this.items.forEach((item: any) => {
          // find if the floor already exists
          const floor = dataList[item.parking_floor];
          if (floor) {
            floor?.parkingList.push({
              id: item.code,
              status: item.status
            });
          } else {
            dataList[item.parking_floor] = {
              parkingFloor: item.parking_floor,
              parkingList: [{
                id: item.code,
                status: item.status
              }]
            };
          }
        });
        this.parkingData = Object.values(dataList);
      }
    });
  }
}
