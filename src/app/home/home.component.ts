import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../movie-details';
import { MovieService } from '../movie.service';
import { MovieElementComponent } from '../movie-element/movie-element.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieElementComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movieService: MovieService = inject(MovieService);

  isLoading: boolean = false;
  listaPeliculas: MovieDetails[] = [];

  public searchMovie(title: string) {
    this.isLoading = true;
    this.movieService.searchMoviesByTitle(title).subscribe((response) => {
      this.listaPeliculas = response;
      console.log(response);
      this.isLoading = false;
    });
  }
}
