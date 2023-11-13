import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-segments',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './segments.component.html',
  styleUrl: './segments.component.scss'
})
export class SegmentsComponent {
  chart = new Chart(
    {
      chart:
      {
        type: 'pie',
        height: 260
      },
      title:
      {
        text: 'Segmentos'
      },
      series:
      [
        {
          type: 'pie',
          data:[
            {
              name: 'banco',
              y: 25.0,
              color: 'yellow'
            },
            {
              name: 'construtora',
              y: 30,
              color: 'black'
            },
            {
              name: 'financeiro',
              y: 45,
              color: 'green'
            }
          ]
        }
      ],
      credits: 
      {
        enabled: false
      }
    });
}
