import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
