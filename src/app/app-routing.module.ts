import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'page-one',
    component: PageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
