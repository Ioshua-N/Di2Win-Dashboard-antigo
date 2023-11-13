import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-blocks',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-blocks.component.html',
  styleUrl: './top-blocks.component.scss'
})
export class TopBlocksComponent {
  faUser = faUser;
}
