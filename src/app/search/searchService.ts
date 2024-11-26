import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';


@Injectable({providedIn: 'root'})
export class searchService {

  private baseKey = 'e43d928f'
  private baseUrl = 'http://www.omdbapi.com/';
  private httpClient: HttpClient = inject(HttpClient);

  search(query: string): Observable<any> {
    const url = `${this.baseUrl}?s=${query}&apikey=${this.baseKey}`;
    return this.httpClient.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Erro na API:', error);
    return throwError('Erro ao buscar dados. Tente novamente');
  }

}

