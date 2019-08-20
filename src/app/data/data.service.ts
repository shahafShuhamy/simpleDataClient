import { Injectable } from '@angular/core';
import { User } from './User';
import { Subject } from 'rxjs';
import { FilterUpdate } from './FilterUpdate';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users;
  fullUsersList;
  filterChanged: Subject<FilterUpdate> = new Subject();
  constructor() { }

  getData(): User[] {
    if (!this.users) {
      this.users = [
        new  User(1, 'Shahaf', 'Rehovot', 'S.benn zion', 15),
        new  User(2, 'Dana', 'Rehovot', 'S.benn zion', 15),
        new  User(3, 'Kfir', 'Rehovot', 'S.benn zion', 15),
        new  User(4, 'Roni', 'Rehovot', 'S.benn zion', 29),
        new  User(5, 'Ayala', 'Rehovot', 'S.benn zion', 29),
        new  User(6, 'ofir', 'Ashdod', 'HaAliya', 2),
        new  User(7, 'Hana', 'Ashdod', 'HaAliya', 2),
        new  User(8, 'Vered', 'Gan-Yavne', 'Tel-Hai', 12),
        new  User(9, 'Avner', 'Gan-Yavne', 'Tel-Hai', 12),
        new  User(10, 'Dror', 'Gan-Yavne', 'Tel-Hai', 12),
        new  User(0, 'Sufa', 'Gan-Yavne', 'Tel-Hai', 12),
        ];
      this.fullUsersList = this.users;
    }
    return this.users;
  }
// TODO: check if need filter index and state and remove if not.
  updateFilterList(state: boolean, index: number, cityList: string[]) {
    const filterUpdate = new FilterUpdate(state, index, cityList);
    this.filterChanged.next(filterUpdate);
  }
}
