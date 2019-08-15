import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ListViewRoutingModule } from './list-view-routing.module';
import { ListViewComponent } from './list-view.component';


@NgModule({
  declarations: [
    ListViewComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    ListViewRoutingModule
  ]
})
export class ListViewModule { }
