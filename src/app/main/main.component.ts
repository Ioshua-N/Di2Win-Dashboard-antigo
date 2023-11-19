import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBlocksComponent } from '../top-blocks/top-blocks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TopBlocksComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
