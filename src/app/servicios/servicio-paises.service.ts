import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {
  private url = "http://localhost:3000/getData"
  private urlCiudades = "http://localhost:3000/getCities"
  private urlInsert = "http://localhost:3000/country"
  private getPaises = "http://localhost:3000/countriesddbb"
  public cities:any = [];

  constructor(private http:HttpClient) { }
  // constructor() { }

  getCountries() {
    return this.http.get(this.url);
  }

  getCities(country:any) {
    let params = {country}
    return this.http.post(this.urlCiudades,params);    
  }

  getPaisesddbb() {

    return this.http.get(this.getPaises);    
  }

  insertCountry(name,capital,region,population,numericCode,flag){
    let params = {
      "name": name,
      "capital": capital,
      "region": region,
      "population": population,
      "numericCode" : numericCode,
      "flag": flag
  }

    return this.http.post(this.urlInsert,params)

  }
}
