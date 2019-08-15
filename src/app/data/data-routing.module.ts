import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { DataComponent } from './data.component';


const routes: Routes = [
      {path: '', component: DataComponent, children: [
        { path: 'list', loadChildren: () => import('./list-view/list-view.module').then(mod => mod.ListViewModule)},
        { path: 'cards', loadChildren: () => import('./cards-view/cards-view.module').then(mod => mod.CardsViewModule)}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
