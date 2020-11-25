// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-team',
//   templateUrl: './team.component.html',
//   styleUrls: ['./team.component.css']
// })
// export class TeamComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Services } from '../Services.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [BackendApiService]
})
export class TeamComponent implements OnInit {
  services:any;

  constructor(private api: BackendApiService) {
    this.api.getServices().subscribe(
      data => {
        this.services = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
   }

  ngOnInit() {
  }
}

