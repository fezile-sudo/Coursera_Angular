import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Dishdetail } from '../dishdetail/dishdetail';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatGridTile,
    MatCardModule,
    Dishdetail,
    RouterModule,
    
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {

  dishes: Dish[] = DISHES;

  selectedDish: any;

}
