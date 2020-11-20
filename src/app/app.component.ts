import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';
import { Services } from './Services.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$:Services[];
  constructor(private backendApiService:BackendApiService) {}

  ngOnInit() {
    return this.backendApiService.getUsers()
    .subscribe(data =>this.users$ = data );

  }
  
}
