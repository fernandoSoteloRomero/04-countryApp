import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(search: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${search}`)
      .pipe(catchError(() => of([])));
  }
  searchCountry(search: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${search}`)
      .pipe(catchError(() => of([])));
  }
  searchRegion(search: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${search}`)
      .pipe(catchError(() => of([])));
  }
}
