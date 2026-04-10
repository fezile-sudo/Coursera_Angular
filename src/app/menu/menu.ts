import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Dishdetail } from '../dishdetail/dishdetail';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatGridTile,
    MatCardModule,
    Dishdetail
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {

  dishes = [
    {
      id: '0',
      name: 'Uthappizza',
      image: 'images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      description: 'A unique combination of Indian Uthappam and Italian pizza.',
      comments: [
        {
          rating: 5,
          comment: 'Amazing dish!',
          author: 'John Lemon',
          date: '2024-01-01T17:57:28.556094Z'
        },
        {
          rating: 4,
          comment: 'Really good!',
          author: 'Paul McVites',
          date: '2024-02-10T10:30:00.000Z'
        }
      ]
    },

    {
      id: '1',
      name: 'Zucchipakoda',
      image: 'images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried zucchini fritters.',
      comments: []
    },

    {
      id: '2',
      name: 'Vadonut',
      image: 'images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A vada and donut fusion.',
      comments: []
    },

    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: 'images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'New York style cheesecake.',
      comments: []
    }
  ];

  selectedDish: any;

}
