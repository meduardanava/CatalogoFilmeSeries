import {Component, Input} from '@angular/core';
import {Movie} from '../models/movie-models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './app-movie-details.component.html',

})
export class MovieDetailsComponent {

  @Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
  })
  @Input() movies: Movie[] = [];
}

