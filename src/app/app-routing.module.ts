import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapsComponent } from './pages/maps/maps.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'maps', component: MapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
