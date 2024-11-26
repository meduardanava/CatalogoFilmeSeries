import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'search',component:SearchComponent},
  {path:'favorites',component:FavoritesComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search' },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule {}
