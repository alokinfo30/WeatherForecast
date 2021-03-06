import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { WeatherAPIService } from '../api/weather-api.service';
import { Chart } from 'chart.js';
import { WorldweatherapiService } from '../api/worldweatherapi.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @ViewChild('lineChart') lineChartElement: ElementRef;
  lineChart: any; ctx;
  constructor() {
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.ctx = this.lineChartElement.nativeElement.getContext('2d');
    this.lineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: WorldweatherapiService.weatherDates1,
        datasets: [
          {
            label: 'Min Temp (C)',
            data: WorldweatherapiService.minTemp1,
            borderColor: 'red',
            fill: true,
            borderWidth: 2,
            backgroundColor: 'pink'
          },
          {
            label: 'Avg Temp (C)',
            data: WorldweatherapiService.avgTemp1,
            borderColor: 'green',
            fill: true,
            borderWidth: 2,
            backgroundColor: 'lightgreen'
          },
          {
            label: 'Max Temp (C)',
            data: WorldweatherapiService.maxTemp1,
            borderColor: 'blue',
            fill: true,
            borderWidth: 2,
            backgroundColor: 'aqua'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Temp in Celcius with Min/Avg/Max"
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            type: "time",
            time: {
              unit: 'hour',
              unitStepSize: 24,
              round: 'hour',
              tooltipFormat: "h:mm:ss a",
              displayFormats: {
                hour: 'MMM D, h:mm A'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Temperature in Degree Celcius",
              fontColor: "red"
            }
          }]
        },
        responsive: true,
      }
    });
  }
}
