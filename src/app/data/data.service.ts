import { Injectable } from '@angular/core';
import { User } from './User';
import { Subject, Observable } from 'rxjs';
import { FilterUpdate } from './FilterUpdate';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  observUsers: Observable<User[]>;
  users: User[];
  fullUsersList;
  filterChanged: Subject<FilterUpdate> = new Subject();
  constructor(private store: Store<AppState>) { }

  getData() {
    if (!this.users) {
      this.observUsers = this.store.select('user');
      this.observUsers.subscribe((usersArrived) => {
        this.users = usersArrived;
      });
      // [
      //   new  User(1, 'Shahaf', 'Rehovot', 'S.benn zion', 15),
      //   new  User(2, 'Dana', 'Rehovot', 'S.benn zion', 15),
      //   new  User(3, 'Kfir', 'Rehovot', 'S.benn zion', 15),
      //   new  User(4, 'Roni', 'Rehovot', 'S.benn zion', 29),
      //   new  User(5, 'Ayala', 'Rehovot', 'S.benn zion', 29),
      //   new  User(6, 'ofir', 'Ashdod', 'HaAliya', 2),
      //   new  User(7, 'Hana', 'Ashdod', 'HaAliya', 2),
      //   new  User(8, 'Vered', 'Gan-Yavne', 'Tel-Hai', 12),
      //   new  User(9, 'Avner', 'Gan-Yavne', 'Tel-Hai', 12),
      //   new  User(10, 'Dror', 'Gan-Yavne', 'Tel-Hai', 12),
      //   new  User(0, 'Sufa', 'Gan-Yavne', 'Tel-Hai', 12),
      //   ];
      this.fullUsersList = this.users;
    }
    return this.users;
  }
  updateFilterList(cityList: string[]) {
    const filterUpdate = new FilterUpdate(cityList);
    this.filterChanged.next(filterUpdate);
  }
}
