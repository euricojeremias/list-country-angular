import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { Country } from './Country';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteCountries: Country[] = [];
  countries: Country[] = [];
  searchTearm: string = '';
  filterRegion: string = '';
  constructor(private countriesService: CountriesService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }
  get filteredCountries() {
    return this.countries ?
      // filter by country name
      this.countries.filter((country) => country.name.common.toLowerCase().includes(this.searchTearm.toLowerCase())
        // filter by fifa code
      )
        //filter by region
        .filter((country) => country.region.toLowerCase().includes(this.filterRegion.toLowerCase()))
        // sort by country alphabetically
        .sort((a, b) => a.name.common > b.name.common ? 1 : -1)

      : this.countries;


  }
  get regions() {
    return this.countries.filter((country, index, self) => self.findIndex((t) => t.region === country.region) === index).sort((a, b) => a.region > b.region ? 1 : -1);
  }
  openDialog(country: Country) {
    this.dialogRef.open(ModalComponent, {
      data: country
    });

  }
  closeDialog() {
    this.dialogRef.closeAll();
  }

  toggleFavorite(country: any) {
    const index = this.favoriteCountries.findIndex(
      (favCountry) => favCountry.name === country.name
    );

    if (index === -1) {
      this.favoriteCountries.push(country);
    } else {
      this.favoriteCountries.splice(index, 1);
    }
  }
  isFavorite(country: any): boolean {
    return this.favoriteCountries.some(
      (favCountry) => favCountry.name === country.name
    );
  }




}
