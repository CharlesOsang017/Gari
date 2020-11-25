import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../profile.model';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

    profile$:UserProfile[];
    constructor(private profileservice :ProfileService) {}
  
    ngOnInit() {
      return this.profileservice.getUserProfile()
      .subscribe(data =>this.profile$= data );
  
    }
    
  }
    