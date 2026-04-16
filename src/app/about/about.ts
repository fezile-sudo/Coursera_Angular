import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  leaders!: Leader[];

  constructor() { }

  ngOnInit(): void {
  }
}
