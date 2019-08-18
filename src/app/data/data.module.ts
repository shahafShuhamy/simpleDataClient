import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ListViewComponent} from './list-view/list-view.component';
import {CardsViewComponent} from './cards-view/cards-view.component';
import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [
    DataComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataRoutingModule,
  ]
})
export class DataModule { }
