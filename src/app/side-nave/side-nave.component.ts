import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nave',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './side-nave.component.html',
  styleUrl: './side-nave.component.scss'
})
export class SideNaveComponent {
  faChartLine = faChartLine;
  faUser = faUser;
}