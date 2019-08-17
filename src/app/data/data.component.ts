import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './User';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit() {}

}
