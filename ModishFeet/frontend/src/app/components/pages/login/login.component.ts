import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LogInLogOutService } from 'src/app/services/log-in-log-out.service';
import { HeaderComponent } from '../../partials/header/header.component';
// import {getUserInfo} from '/Users/manav/AngularandnodeJS/ModishFeet/frontend/src/app/services/api.service.ts';
declare var window :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
 
userObj : any;
  constructor(private logInOutService:LogInLogOutService)
  {

  }
  
   
    
    
  

  ngOnInit(): void {
    
      
  }
  signIn(signInVar : {email : string , password : string})
  {
    this.logInOutService.signIn(signInVar);

  }
}

