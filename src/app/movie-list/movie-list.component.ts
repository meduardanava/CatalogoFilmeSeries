import {Component, Input} from '@angular/core';
import {Movie} from '../models/movie-models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {

  @Input() movies: Movie[] = [];

  addFavorites(movie: any):void{
    const favorites = JSON.parse(localStorage.getItem('favorites'
    ) || '[]')
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${movie.Title} adicionado aos favoritos!`)
  }
}
