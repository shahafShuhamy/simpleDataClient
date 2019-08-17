import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  users: User[];
  title = 'app';

    columnDefs = [
        {headerName: 'Name', field: 'name' },
        {headerName: 'City', field: 'city' },
        {headerName: 'ID', field: 'id'}
    ];

    rowData: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getData();
    this.rowData = this.users;
  }

}
