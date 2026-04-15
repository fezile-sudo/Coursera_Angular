import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Dishdetail  } from './dishdetail/dishdetail';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'menu', component: Menu },
  { path: 'dishdetail/:id',     component: Dishdetail },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];