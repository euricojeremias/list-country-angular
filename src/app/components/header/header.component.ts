import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Countries';

  constructor() { }

  toggleAddFavorites() {
    console.log("Added favorite")
  }

  ngOnInit(): void { }
}
