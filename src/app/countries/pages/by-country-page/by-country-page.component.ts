import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit{

  constructor(private countriesService:CountriesService){}
  
  public countries: Country[] = [];
  public loader: boolean = false;
  public initialValue: string = '';
  
  ngOnInit(): void {
    this.countries = this.countriesService.cashStore.byCountries.countries;
    this.initialValue = this.countriesService.cashStore.byCountries.term;
    
  }

  searchByCountry(value: string): void{
    this.loader = true;
    this.countriesService.searchCountry(value)
    .subscribe(countries => {
      this.countries = countries;
      this.loader = false;
    })
    
  }

}
