import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardCollectionsComponent} from './card-collections/card-collections.component';

const routes: Routes = [
  {path: 'tiny-card', component: CardCollectionsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinyCardRoutingModule { }
