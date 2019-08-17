import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsViewRoutingModule } from './cards-view-routing.module';
import { CardsViewComponent } from './cards-view.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CardsViewComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CardsViewRoutingModule
  ]
})
export class CardsViewModule { }
