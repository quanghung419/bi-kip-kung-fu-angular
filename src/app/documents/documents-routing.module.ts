import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocsComponent} from './docs/docs.component';
import {DocComponent} from './doc/doc.component';

const routes: Routes = [
  {path: 'docs', component: DocsComponent, pathMatch: 'full'},
  { path: ':id', component: DocComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {
}
