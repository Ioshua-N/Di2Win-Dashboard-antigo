import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-seasonality',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './seasonality.component.html',
  styleUrl: './seasonality.component.scss'
})
export class SeasonalityComponent {
  chart = new Chart(
    {
      chart:
      {
        type: 'line',
        height: 260
      },
      title:
      {
        text: 'Sazonalidade'
      },
      xAxis:
      {
        categories:
        [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ]

      },
      yAxis:
      {
        title:
        {
          text: 'Documentos por Mês'
        }
      },
      series:
      [
        {
          name: "CNH",
          type: "line",
          data: [100,200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200 ]
        },
        {
          name: "DECLARACAO-IR",
          type: "line",
          data: [23,2, 235,656,526,675,567,123,1212,1,232, 1234]
        }
      ],
      credits: 
      {
        enabled: false
      }
    });
}
