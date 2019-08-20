import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  cityList;
  filterList = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cityList = this.dataService.getData();
    this.cityList = Array.from(
      new Set(this.cityList.map(obj => obj.addressCity)))
      .map(userCity => {
      return userCity;
    });
    console.log(this.cityList);
  }

  setFilter(inputBool: boolean, i: number) {
    if (inputBool) {
      this.filterList.push(this.cityList[i]);
    } else {
      this.filterList = this.filterList.filter((cityObj) => {
         if (cityObj !== this.cityList[i]) {
           return cityObj;
         }
      });
    }
    // TODO: remove inputBool and index
    this.dataService.updateFilterList(inputBool, i, this.filterList);
  }

}
