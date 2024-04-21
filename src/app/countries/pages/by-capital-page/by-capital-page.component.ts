import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cashStore.byCapital.countries;
    this.initialValue = this.countriesService.cashStore.byCapital.term;
  }
  public initialValue: string = '';
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
