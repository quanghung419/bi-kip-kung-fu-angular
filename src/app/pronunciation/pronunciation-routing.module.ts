import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PronunciationListComponent} from './pronunciation-list/pronunciation-list.component';

const routes: Routes = [
  {path: 'pronunciation', component: PronunciationListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PronunciationRoutingModule {
}
