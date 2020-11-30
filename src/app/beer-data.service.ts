import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './beer-list/Beer';
import { tap } from 'rxjs/operators';

const URL = "https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers"

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(URL).pipe(
      tap((beers: Beer[]) => beers.forEach(beer => beer.quantity = 0))
    );

  }
}
