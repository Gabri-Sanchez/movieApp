import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { SearchMovieResults } from './movie-details';
import { MovieDetails } from './movie-details';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  key: string = environment.movieApiKey;

  constructor(private http: HttpClient) {}

  searchMoviesByTitle(title: string): Observable<MovieDetails[]> {
    return this.http
      .get<SearchMovieResults>('/api/search/movie?query=' + title, {
        headers: {
          Authorization: 'Bearer ' + this.key,
          accept: 'application/json',
        },
      })
      .pipe(
        map((x) => {
          return x.results;
        }),
      );
  }

  searchMovieById(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>('/api/movie/' + id, {
      headers: {
        Authorization: 'Bearer ' + this.key,
        accept: 'application/json',
      },
    });
  }
}
