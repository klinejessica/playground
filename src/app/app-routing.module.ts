import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostcrossingComponent } from './postcrossing/postcrossing.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'postcrossing', component: PostcrossingComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
