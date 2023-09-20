import { Component, Inject, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Country } from 'src/app/Country';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {
  name: string = '';
  region: string = '';
  fifa: string = '';
  population: any
  languages: string[] = [];
  timezones: string[] = [];
  capital: string[] = [];
  currencies: string[] = [];
  maps: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Country, private dialogRef: MatDialog) {
    this.name = data.name.common;
    this.region = data.region;
    this.fifa = data.fifa;
    this.population = data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.languages = Object.values(data.languages);
    this.timezones = data.timezones;
    this.capital = data.capital;
    this.currencies = Object.values(data.currencies).map((currency) => currency.name);
    this.maps = Object.values(data.maps).slice(0, 1);

  }
  closeDialog() {
    this.dialogRef.closeAll();
  }
}
