import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDialogModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(public dialog: MatDialog ) { }

  openLoginForm() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '450px'
    });
  }

}
