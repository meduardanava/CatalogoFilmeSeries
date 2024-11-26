import { Component } from '@angular/core';
import {FavoritesService} from './favorites.service';
import {Movie} from '../models/movie.model';
import {Serie} from '../models/serie.model';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  movies: Movie[] = [];
  series: Serie[] = []

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    const favorites = this.favoritesService.getFavorites();
    this.movies = favorites.movies;
    this.series = favorites.series;
  }
  removeFromFavorites(item: Movie | Serie): void{
    this.favoritesService.removeFromFavorites(item);
    this.ngOnInit();
  }
}
