import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  }, 
  {
    path: ":id",
    component: UserSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
