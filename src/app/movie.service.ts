import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  key: string = "5725562254c390a3c416dae664c2f688";
  constructor() {

   }

   async searchMovie(title: string){
    const data = await fetch('/api/search/movie?query=' + title,
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer" + this.key,
          "accept": "application/json"
        }
      }
    )
   }
}
