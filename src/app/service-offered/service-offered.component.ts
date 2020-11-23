import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Services } from '../Services.model';
@Component({
  selector: 'app-service-offered',
  templateUrl: './service-offered.component.html',
  styleUrls: ['./service-offered.component.css']
})
export class ServiceOfferedComponent implements OnInit {


    services$:Services[];
    constructor(private backendApiService:BackendApiService) {}
  
    ngOnInit() {
      return this.backendApiService.getServices()
      .subscribe(data =>this.services$ = data );
  
    }
    
  }
  