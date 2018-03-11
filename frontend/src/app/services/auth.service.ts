import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  signedin:any;

  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post(this.baseUri+'/register', user, {headers:this.headers});
  }

  // Log in post
  authenticateUser(user){
    return this.http.post(this.baseUri+'/authentication', user, {headers:this.headers});
  }

  getProfile(){
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
  // this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.baseUri+'/profile', {headers:this.headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    //console.log("this is loadtoken"+token);
    this.authToken = token;
    //console.log("this is authToken"+this.authToken);
  }

  loggedIn(){
    //console.log('logged In: '+tokenNotExpired());
    return tokenNotExpired();
  }

  setSignIn(){
    this.signedin = true;
  }

  signedIn(){
    this.loadToken();
    if(this.authToken){
      this.setSignIn();
    }else{
      if(!this.authToken){
        //console.log('No token found');
        this.signedin = false;
      }
    }
    
    return this.signedin;
  }

  logout(){
    this.signedin = false;
    //console.log('in log out, signed in val: '+this.signedin);
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
