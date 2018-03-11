import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post(this.baseUri+'/users/register', user, {headers:this.headers});
  }

  authenticateUser(user){
    return this.http.post(this.baseUri+'/users/authentication', user, {headers:this.headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
