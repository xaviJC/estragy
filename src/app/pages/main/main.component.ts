import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ServicioPaisesService} from '../../servicios/servicio-paises.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  paises:any = [];
  constructor(private servicioPaises:ServicioPaisesService,private router:Router) { }

  getCities(country:string){
    // this.servicioPaises.getCities(country);
    this.router.navigate(['/cities/country'])
  }

  addCountry(pais:any) {
    this.servicioPaises.insertCountry(pais.name,pais.capital,pais.region,pais.population,pais.numericCode,pais.flag)
    .subscribe((data:any) => {

      if (data.affectedRows == 1) {
        alert("añadido a la BBDD")
      } else {
        alert("Ya existe en la BBDD")
      }
    })
  }

  ngOnInit(): void {
    this.servicioPaises.getCountries().subscribe(data => {
      this.paises = data
    })
  }

}
