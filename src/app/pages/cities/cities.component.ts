import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities:any = []
  country:string;
  constructor(private servicioPaises:ServicioPaisesService,private activateRoute:ActivatedRoute,private router:Router) { 
 
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.country = params.get('country');
    });
    
    console.log("pagina cities");
    console.log(this.country);
    this.servicioPaises.getCities(this.country).subscribe(data => {
      console.log(data)
      this.cities = data;
    });
  }

}
