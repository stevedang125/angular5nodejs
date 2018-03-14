import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Task } from '../task';


@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  signedin:any;

  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // POST: register
  registerUser(user){
    return this.http.post(this.baseUri+'/register', user, {headers:this.headers});
  }

  // POST: Login
  authenticateUser(user){
    return this.http.post(this.baseUri+'/authentication', user, {headers:this.headers});
  }

  // GET: profile
  // Get the user infor for Profile/Greeting after logged in
  getProfile(){
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(this.baseUri+'/profile', {headers:this.headers});
  }

  // GET: dashboard
  // Fetch the task list from database to the front end
  getDashboard(){
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(this.baseUri+'/dashboard', {headers:this.headers});
  }

  // Store the token and the object user(object to String),
  // in the local storage 
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  // Load the token stored from the localstorage into authToken Var
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Not working right with Angular5, 
  // created/used signedIn() instead
  loggedIn(){
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
      if(this.authToken == null){
        this.signedin = false;
      }
    }
  
    return this.signedin;
  }

  logout(){
    this.signedin = false;
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // ***************************** add update delete tasks ****************************

  addTask(task: Task){
    return this.http.post(this.baseUri+'/users/add', task, {headers:this.headers});
  }

  updateTask(task){
    return this.http.put(this.baseUri+'/users/update', task, {headers:this.headers});
  }

  deleteTask(task:Task){
    const id = task._id;
    return this.http.delete(this.baseUri+'/users/delete/'+id, {headers:this.headers});
  }




}
