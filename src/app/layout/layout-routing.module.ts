import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {navbarRoute} from './navbar/navbar.route';

const routes: Routes = [
  navbarRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
