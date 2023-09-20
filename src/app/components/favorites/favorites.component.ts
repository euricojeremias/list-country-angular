import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favoriteCountries: any[] = [];

  constructor(private mainComponent: AppComponent) { }

  ngOnInit() {
    // Access favoriteCountries from the main component
    this.favoriteCountries = this.mainComponent.favoriteCountries;
  }

}
