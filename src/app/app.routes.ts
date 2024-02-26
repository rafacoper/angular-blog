import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { TecnologyComponent } from './pages/tecnology/tecnology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'blog', component: BlogsComponent },
  { path: 'technology', component: TecnologyComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
