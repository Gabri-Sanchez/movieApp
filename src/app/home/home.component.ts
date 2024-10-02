import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../movie-details';
import { MovieService } from '../movie.service';
import { MovieElementComponent } from '../movie-element/movie-element.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieElementComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  movieService: MovieService = inject(MovieService);

  listaPeliculas: MovieDetails[] = [];

  public searchMovie(title: string) {
    this.movieService.searchMoviesByTitle(title).subscribe((response) => {
      this.listaPeliculas = response;
      console.log(response);
    });
  }
}
