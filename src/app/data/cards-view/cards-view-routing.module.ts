import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsViewComponent } from './cards-view.component';


const routes: Routes = [
  {path: '', component: CardsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsViewRoutingModule { }
