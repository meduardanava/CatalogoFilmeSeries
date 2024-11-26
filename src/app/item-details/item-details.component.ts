import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../models/movie.model';
import {Serie} from '../models/serie.model';

@Component({
  selector: 'app-item-details',
  template: `
    <div>
      <h3>{{ item.Title }}</h3>
      <p><strong>Gênero:</strong> {{ item.Genre }}</p>
      <p><strong>Ano:</strong> {{ item.Year }}</p>
      <p><strong>Sinopse:</strong> {{ item.Synopsis }}</p>
      <button (click)="onFavoriteToggle()">
        {{ isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
      </button>
    </div>
  `,
})
export class ItemDetailsComponent {
  @Input() item!: Movie | Serie;
  @Output() favoriteToggle = new EventEmitter<Movie | Serie>();
  isFavorite = false;

  onFavoriteToggle(): void {
    this.favoriteToggle.emit(this.item);
    this.isFavorite = !this.isFavorite;
  }
}
