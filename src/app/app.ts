import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    Header,
    Footer,
    RouterOutlet,
    MatDialogModule,
    LoginComponent
  ],
  
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})

export class App {
  protected readonly title = signal('conFusion');

 
}
