import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'details/:movieId',
    component: MovieDetailsComponent,
    title: 'Movie Details',
  },
  { path: '', component: HomeComponent, title: 'Home Page' },
];
