import { Injectable } from '@angular/core';
import { HomeComponent } from '../components/pages/home/home.component';
import { HeaderComponent } from '../components/partials/header/header.component';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInLogOutService {
  Obj:any;
  userMsg:any;
  userObj :any;
  userData:any;
  constructor(private http:HttpClient,private router :Router,private apiservice:ApiService) { }
  
  async signIn(signInVar : {email : string , password : string}){
    // console.log(signInVar);
    let headers =new HttpHeaders({});

    await this.http.post('/ModishFeet/login/',signInVar).subscribe((res: any)=>
    {
      if(res.msg=="User Valid"){
      window.localStorage.setItem('userData',JSON.stringify(res));
      window.localStorage.setItem("JWTtoken",(res.token));
     
    }
    else
    this.router.navigate(['/login']);

    this.Obj=window.localStorage.getItem("userData");
    this.userObj=JSON.parse(this.Obj);
    this.userMsg= this.userObj.msg;
    this.apiservice.getUserInfo(this.userObj.id).subscribe((res:any)=>
    {
      this.userData = res;
      console.log(this.userData);
      
      this.router.navigate(['/']);
      console.log(res);
    })
    })
    
  }
  logout()
  {
    
    window.localStorage.clear();
    this.userMsg= "";
    this.userObj=null;
    console.log(this.userMsg,this.userObj);
  
  }


  
  
}

