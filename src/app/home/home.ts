import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  dish!: Dish;
  promotion!: Promotion;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }
}
