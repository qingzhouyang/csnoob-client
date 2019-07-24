import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements OnInit {
  chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('myLine', {
      type: 'line',
      options: {
        //   responsive: true,
        title: {
          display: true,
          text: 'My Line Chart'
        },
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        // uncomment to change axes label colors
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       fontColor: "white",
        //     }
        //   }],
        //   xAxes: [{
        //     ticks: {
        //       fontColor: "white",
        //     }
        //   }]
        // }
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            label: 'My First dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
          },
          {

            label: 'Dataset 2',
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            data: [443, 256, 165, 100, 56, 65, 35, 543],
            fill: false,
          },
          {

            label: 'My Second dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });
  }

}
