import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../data/User';
import { DataService } from '../data.service';
import { FilterUpdate } from '../FilterUpdate';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {
  @Input() users: User[];
  fullUsers: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getData();
    this.fullUsers = this.dataService.getData();
    this.dataService.filterChanged.subscribe((filtersObject: FilterUpdate) => {
      // case of no filters.
      if (filtersObject.filters.length === 0) {
        this.users = this.fullUsers;
        return;
      }
      // any other case => filter according to the cities and merge lists.
      this.users = this.fullUsers.filter((user) => {
        if (filtersObject.filters.includes(user.addressCity)) {
          return user;
        }
      });
    });
  }

}
