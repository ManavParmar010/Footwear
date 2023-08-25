import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInLogOutService } from 'src/app/services/log-in-log-out.service';
// import { Router } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  obj:any;
  userObj:any;
  msg:any;
  userMsg="User Valid";

  //  console.log(userObj);
  constructor(private router:Router,private logInOutservice : LogInLogOutService)
  {
    
  }
  
  ngOnInit(): void {
    this.userObj=this.logInOutservice.userObj; 
    this.msg=this.logInOutservice.userMsg;
    console.log(this.msg,this.userObj);
    
  }
  logout()
  {
    this.logInOutservice.logout();
    this.userObj=this.logInOutservice.userObj;
    this.msg=this.logInOutservice.userMsg;
  }
  
  

}
