import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-main-movie-content',
  templateUrl: './main-movie-content.component.html',
  styleUrls: ['./main-movie-content.component.scss'],
})
export class MainMovieContentComponent implements OnInit {
  movies: any[] = []; // Initialize as an empty array

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const params = new HttpParams().set('list', 'most_pop_movies');
    this.http.get<any>('https://moviesdatabase.p.rapidapi.com/titles/random', {
      params: params,
      headers: {
        'x-rapidapi-key': 'fd3a835517mshcd0f5814c9c6809p160585jsn27330b39a201', // Replace with your RapidAPI key
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
      },
    }).subscribe((data) => {
      // Once the data is fetched, assign it to the movies property
      console.log(data.results[0]);
      this.movies = data.results; // Wrap the data in an array to loop over it in the template
    });
  }
}
