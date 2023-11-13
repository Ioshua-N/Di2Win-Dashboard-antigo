import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBlocksComponent } from '../top-blocks/top-blocks.component';
import { SeasonalityComponent } from '../seasonality/seasonality.component';
import { SegmentsComponent } from '../segments/segments.component';
import { CommonestTypesComponent } from '../commonest-types/commonest-types.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TopBlocksComponent, SeasonalityComponent, SegmentsComponent, CommonestTypesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
