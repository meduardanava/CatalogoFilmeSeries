import {Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';
import {Serie} from '../models/serie.model';

@Injectable({providedIn: 'root'})
export class FavoritesService {

  addToFavorites(item: Movie | Serie): void {
    if ((item as Movie).Type === 'movie') {
      let favoritesMovies: Movie[] = JSON.parse(localStorage.getItem('favoriteMovie') || '[]');
      if (!favoritesMovies.some((favorite: Movie) => favorite.imdbID === item.imdbID)) {
        favoritesMovies.push(item as Movie);
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
      }
    }else if ((item as Serie).Type === 'serie') {
      let favoritesSeries: Serie[] = JSON.parse(localStorage.getItem('favoritesSeries') || '[]');
      if (!favoritesSeries.some((fav) => fav.imdbID === item.imdbID)) {
        favoritesSeries.push(item as Serie);
        localStorage.setItem('favoritesSeries', JSON.stringify(favoritesSeries));
      }
    }
  }

  removeFromFavorites(item: Movie | Serie): void {
      if ((item as Movie).Type === 'movie') {
        let favoritesMovies: Movie[] = JSON.parse(localStorage.getItem('favoritesMovies') || '[]');
        favoritesMovies = favoritesMovies.filter((fav) => fav.imdbID !== item.imdbID);
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
    } else if ((item as Serie).Type === 'serie') {
        let favoritesSeries: Serie[] = JSON.parse(localStorage.getItem('favoritesSeries') || '[]');
        favoritesSeries = favoritesSeries.filter((fav) => fav.imdbID !== item.imdbID);
        localStorage.setItem('favoritesSeries', JSON.stringify(favoritesSeries));
    }
  }

  getFavorites(): { movies: Movie[], series: Serie[] } {
    const favoritesMovies = JSON.parse(localStorage.getItem('favoritesMovies') || '[]') as Movie[];
    const favoritesSeries = JSON.parse(localStorage.getItem('favoritesSeries') || '[]') as Serie[];
    return {movies: favoritesMovies, series: favoritesSeries};
  }
}
