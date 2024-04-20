import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService){}
  public isLoading: boolean = false;
  public countries: Country[] = [];
  searchByCapital(term: string): void{
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.isLoading = false;
      this.countries = countries;
    })
  }
}
