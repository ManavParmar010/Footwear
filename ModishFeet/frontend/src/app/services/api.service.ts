import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpParams } from '../example-interceptor.interceptor';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  getUserInfo(id:number) {
		// let headers = new HttpHeaders({});
		let headers = new HttpHeaders({
			Authorization:"bearer " + localStorage.getItem("JWTtoken"),
			id:id
		});
		return this.httpClient.get("/ModishFeet/users",{
			headers
		});
	}
}
