import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './../data/User';

export const START = 'START';

export class Test implements Action {
    readonly type = START;
    constructor(public payload: User) {}
}

export type Action = Test;
