import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {searchService} from './searchService';
import {FavoritesService} from '../favorites/favorites.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchQuery: string = '';
  searchResults: any[] = [];
  errorMessage: string = '';

  constructor(
    private searchService: searchService,
    private favoritesService: FavoritesService
  ) {}

  search():void {
    if (this.searchQuery) {
      this.searchService.search(this.searchQuery).subscribe({
        next: (response) => {
          if (response.Response === 'True') {
            this.searchResults = response.Search;
          } else {
            this.errorMessage = response.Message || 'Nenhum resultado encontrado';
          }
        },
        error: (err) => {
          this.errorMessage = 'Erro ao buscar dados. Tente novamente';
          console.error(err);
        }
      });
    }
  }

  addToFavorites(item: any): void {
    console.log(item);
    this.favoritesService.addToFavorites(item);
    alert(`Adicionado aos favoritos: ${item.Title}`);
  }
}
