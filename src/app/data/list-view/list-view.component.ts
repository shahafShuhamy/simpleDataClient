import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  title = 'app';

    columnDefs = [
        {headerName: 'Name', field: 'name' },
        {headerName: 'City', field: 'city' },
        {headerName: 'ID', field: 'id'}
    ];

    rowData = [
        { name: 'Shahaf', city: 'Rehovot', id: 1 },
        { name: 'Asaf', city: 'Kiryat-Gat', id: 2 },
        { name: 'Dor', city: 'Beer-Yaakov', id: 3 },
        { name: 'Shay', city: 'Rehovot', id: 4 },
        { name: 'Boaz', city: 'Herzelya', id: 5 },
        { name: 'Uzi', city: 'Tel-Aviv', id: 6 },
        { name: 'Avi', city: 'Tel-Aviv', id: 7 },
    ];

  constructor() { }

  ngOnInit() {
  }

}
