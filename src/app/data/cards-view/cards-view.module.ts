import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsViewRoutingModule } from './cards-view-routing.module';
import { CardsViewComponent } from './cards-view.component';


@NgModule({
  declarations: [
    CardsViewComponent
  ],
  imports: [
    CommonModule,
    CardsViewRoutingModule
  ]
})
export class CardsViewModule { }
