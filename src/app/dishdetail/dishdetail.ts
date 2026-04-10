import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dishdetail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './dishdetail.html',
  styleUrls: ['./dishdetail.scss']
})
export class Dishdetail {
  @Input() dish: any;
}







 
