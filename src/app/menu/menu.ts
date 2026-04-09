import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: 'assets/images/uthappizza.png', // ✅ fixed path
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza...'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: 'assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter...'
  },
  {
    id: '2',
    name: 'Vadonut',
    image: 'assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience...'
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: 'assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake...'
  }
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'] // ✅ fixed
})
export class Menu {
  dishes = DISHES;
  selectedDish = DISHES[0];
}
