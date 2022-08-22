import { NgModule } from '@angular/core';
// for routing capability 
import { RouterModule, Routes } from '@angular/router'; 
// somewhere to go when routing 
import { MenusComponent } from './menus/menus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

/* A Route consists of: 
  *  path: match URL
  *  component: the component the router should create when routed to URL
  * display MenusComponenet when routed to localhost:4200/menus 
  */ 

const routes: Routes = [
  {path: 'menus', component: MenusComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: MenuDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // configure route at root level 
  exports: [RouterModule], // make available throughout application
})

export class AppRoutingModule { }
