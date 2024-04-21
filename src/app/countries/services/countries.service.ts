import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cashStore: CacheStore = {
    byCapital:   { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion:    { region: '', countries: [] },
  };
  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000)
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(search: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${search}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cashStore.byCapital = { term: search, countries } )
      )
  }
  searchCountry(search: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${search}`;
    return this.getCountriesRequest(url);
  }
  searchRegion(search: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${search}`;
    return this.getCountriesRequest(url);
  }
}
