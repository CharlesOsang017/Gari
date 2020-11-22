import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
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
