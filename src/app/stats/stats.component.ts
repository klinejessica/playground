import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  data: any;
  chartOptions: any;
  // subscription: Subscription;
  // config: AppConfig;

  constructor() { }
  // private configService: AppConfig
  ngOnInit(): void {
    this.data = {
      labels: ['Algeria','Japan','Slovakia', 'Finland', 'Luxembourg', 'Norway', 'France', 'Austria', 'Canada',
    'Netherlands', 'Poland', 'Russia', 'Spain', 'Taiwan', 'Germany', 'Australia', 'United Kingdom'],
      datasets: [
          {
              data: [1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 10, 3, 4],
              backgroundColor: [
                  "#ff0000",
                  "#ff4500",
                  "#ff9f00",
                  "#ffae42",
                  "#a6d608", //Vivid lime green
                  
              ],
              hoverBackgroundColor: [
                 
              ]
          }
      ]
  };

  // this.config = this.configService.config;
  // this.updateChartOptions();
  // this.subscription = this.configService.configUpdate$.subscribe(config => {
  //     this.config = config;
  //     this.updateChartOptions();
  // });
  // }

//   updateChartOptions() {
//     this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
// }

// getLightTheme() {
//     return {
//         plugins: {
//             legend: {
//                 labels: {
//                     color: '#495057'
//                 }
//             }
//         }
//     }
// }

// getDarkTheme() {
//     return {
//         plugins: {
//             legend: {
//                 labels: {
//                     color: '#ebedef'
//                 }
//             }
//         }
//     }
// }

}
}
