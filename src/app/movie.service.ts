import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  key: string = environment.movieApiKey;
  constructor() {}

  async searchMovie(title: string) {
    const data = await fetch('/api/search/movie?query=' + title, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.key,
        accept: 'application/json',
      },
    });
    if(data.status == 200){
      return data.body;
    } else {
      return {};
    }
  }
}
