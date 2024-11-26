import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'e43d928f'
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<any> {
    const url = `${this.apiUrl}/movies/${this.apiKey}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getMovieDetails(imdbId:string): Observable<any> {
    const url = `${this.apiUrl}/?i=$/${imdbId}&apikey=${this.apiKey}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Erro na API:', error);
    return throwError('Erro ao buscar dados. Tente novamente');
    }


}
