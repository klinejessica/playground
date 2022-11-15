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

  constructor() { }
  ngOnInit(): void {
    this.data = {
      labels: ['Algeria', 'Japan', 'Slovakia', 'Finland', 'Luxembourg', 'Norway', 'France', 'Austria', 'Canada',
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
            "#32cd32", //lime green
            "#0a7e8c", //Metallic seweed
            "#0070ff", //brandeis blue
            "#0000ff", //blue
            "#8a2be2", //blue violet
            "#c71585", //medium violet red
            "#7f1734", //claret
            "#9370db", //medium purple
          ],
          hoverBackgroundColor: [

          ]
        }
      ]
    };


  }
}
