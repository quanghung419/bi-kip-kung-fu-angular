import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocsComponent} from './docs/docs.component';

const routes: Routes = [
  {path: 'docs', component: DocsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {
}
