import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    Menu
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ✅ fixed (plural)
})
export class App {
  protected readonly title = signal('conFusion');
}