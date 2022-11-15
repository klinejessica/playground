import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostcrossingComponent } from './postcrossing/postcrossing.component';
import { ProfileComponent } from './profile/profile.component';
import { SentComponent } from './sent/sent.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'postcrossing', component: PostcrossingComponent },
  {
    path: 'profile', component: ProfileComponent,
    children: [
      {
        path: 'about',  // child route path
        component: AboutComponent,  // child route component that the router renders
      },
      {
        path: 'sent',
        component: SentComponent,  // another child route component that the router renders
      },
      // {
      //   path: 'received',
      //   component: ChildBComponent,  // another child route component that the router renders
      // },
      {
        path: 'stats',
        component: StatsComponent,  // another child route component that the router renders
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
