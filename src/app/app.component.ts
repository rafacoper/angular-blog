import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HeaderComponent } from './blogs/components/header/header.component';
import { TecnologyComponent } from './pages/tecnology/tecnology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './blogs/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    BlogsComponent,
    FooterComponent,
    TecnologyComponent,
    ContactComponent,
    NotFoundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Rafe Steps';
}
