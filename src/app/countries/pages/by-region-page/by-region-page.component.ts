import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Regions } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  public Regions: Regions[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Regions;
  constructor(private countriesServ: CountriesService) {}
  searchByRegion(value: Regions) {
    this.countriesServ.searchRegion(value).subscribe((regions) => {
      this.selectedRegion = value;
      this.countries = regions;
    });
  }
}
