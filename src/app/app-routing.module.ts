import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SearchRoutes } from './search-routing';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [...(SearchRoutes), {path:'', component:UserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
