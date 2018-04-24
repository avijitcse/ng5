import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActivityComponent} from './activity/activity.component';
import {CustomerComponent} from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
