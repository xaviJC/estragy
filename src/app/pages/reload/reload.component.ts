import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  

  constructor(private router:Router,private location:Location) {
    
   }

  reload() {
      this.router.navigateByUrl("/reload",{skipLocationChange:true}).then(() => {
        console.log(decodeURI(this.location.path()))
        this.router.navigate([decodeURI(this.location.path())])
      })
    }

  ngOnInit(): void {
  }


}
