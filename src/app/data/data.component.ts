import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './User';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  users;
  constructor(private dataService: DataService, private store: Store<AppState>) {
    this.users = this.store.select('user');
   }

  ngOnInit() {
  }

}
