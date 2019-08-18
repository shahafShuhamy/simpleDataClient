import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  cityList;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cityList = this.dataService.getData();
    this.cityList = Array.from(
      new Set(this.cityList.map(obj => obj.addressCity)))
      .map(userCity => {
      return {
        city: userCity
      }
    });
    console.log(this.cityList);
  }

  setFilter(event: any,i: any) {
    console.log(i);
    console.log(event);
  }

}
