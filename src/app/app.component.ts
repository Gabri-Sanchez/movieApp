import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieApp';
  movieService: MovieService = inject(MovieService);

  public searchMovie(title: string){
    this.movieService.searchMovie(title);
  }
}
