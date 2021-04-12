import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ServicioPaisesService} from '../../servicios/servicio-paises.service'

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent implements OnInit {
  paisesddbb:any = [];
  constructor(private servicioPaises:ServicioPaisesService,private router:Router) { }



  ngOnInit(): void {

    this.servicioPaises.getPaisesddbb().subscribe(data => {
      this.paisesddbb = data
    })
  }
  }


