import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Menu } from './menu/menu';
import { Dishservice } from './services/dish';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    Menu
  ],
  providers: [
    Dishservice
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  protected readonly title = signal('conFusion');
}