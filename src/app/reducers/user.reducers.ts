import { Action } from '@ngrx/store';
import { User } from './../data/User'
import * as UserActions from './../actions/user.actions';

const initialState: User[] = [
    new User(1, 'Shahaf', 'Rehovot', 'S.benn zion', 15),
    new User(2, 'Dana', 'Rehovot', 'S.benn zion', 15),
    new User(3, 'Kfir', 'Rehovot', 'S.benn zion', 15),
    new User(4, 'Roni', 'Rehovot', 'S.benn zion', 29),
    new User(5, 'Ayala', 'Rehovot', 'S.benn zion', 29),
    new User(6, 'ofir', 'Ashdod', 'HaAliya', 2),
    new User(7, 'Hana', 'Ashdod', 'HaAliya', 2),
    new User(8, 'Vered', 'Gan-Yavne', 'Tel-Hai', 12),
    new User(9, 'Avner', 'Gan-Yavne', 'Tel-Hai', 12),
    new User(10, 'Dror', 'Gan-Yavne', 'Tel-Hai', 12),
    new User(0, 'Sufa', 'Gan-Yavne', 'Tel-Hai', 12),
];
export function reducer(state: User[] = initialState, action: UserActions.Action) {
    switch (action.type) {
        case UserActions.START:
            return initialState;
        default:
            return state;
    }
}