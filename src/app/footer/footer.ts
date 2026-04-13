import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatListModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
