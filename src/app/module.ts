import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieDetailsComponent} from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
