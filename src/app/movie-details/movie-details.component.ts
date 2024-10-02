import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieDetails } from '../movie-details';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movieService: MovieService = inject(MovieService);
  route: ActivatedRoute = inject(ActivatedRoute);
  public movie: MovieDetails | null = null;
  id: number = 0;

  constructor() {
    this.id = Number(this.route.snapshot.params['movieId']);
    this.movieService
      .searchMovieById(this.id)
      .subscribe((response) => (this.movie = response));
  }
}
