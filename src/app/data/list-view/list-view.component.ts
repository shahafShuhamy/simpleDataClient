import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { DataService } from '../data.service';
import { FilterUpdate } from '../FilterUpdate';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  title = 'app';

  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Address', field: 'address' },
    { headerName: 'ID', field: 'id' }
  ];

  rowData: User[];
  fullUsers: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fullUsers = this.dataService.getData();
    this.rowData = this.dataService.getData();
    this.dataService.filterChanged.subscribe((filtersObject: FilterUpdate) => {
      // case of no filters.
      if (filtersObject.filters.length === 0) {
        this.rowData = this.fullUsers;
        return;
      }
      // any other case => filter according to the cities and merge lists.
      this.rowData = this.fullUsers.filter((user) => {
        if (filtersObject.filters.includes(user.addressCity)) {
          return user;
        }
      });
    });
  }

}
