import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-service-offered',
  templateUrl: './service-offered.component.html',
  styleUrls: ['./service-offered.component.css']
})

export class ServiceOfferedComponent{
  services = [{title: 'Gari-workshop'}];

  constructor(private api:ApiService) {
    this.getServices();
  }

  getServices = () => {
    this.api.getAllServices().subscribe(
      data => {
        this.services = data;
      },
      error => {
        console.log(error)
      }
    )
  }

}





