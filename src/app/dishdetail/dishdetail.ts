import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridTile
  ],
  templateUrl: './dishdetail.html',
  styleUrls: ['./dishdetail.scss']
})
export class Dishdetail {
 
  dish!: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }
}







 
