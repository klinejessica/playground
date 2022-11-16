import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostcrossingComponent } from './postcrossing/postcrossing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SentComponent } from './sent/sent.component';
import { TableModule } from 'primeng/table';
import { StatsComponent } from './stats/stats.component';
import { ChartModule } from 'primeng/chart';
import { ReceivedComponent } from './received/received.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PostcrossingComponent,
    DashboardComponent,
    ProfileComponent,
    AboutComponent,
    SentComponent,
    ReceivedComponent,
    StatsComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ChartModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
