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

  isAuthenticated(){

  }


  // POST: register
  registerUser(user){
    return this.http.post(this.baseUri+'/register', user, {headers:this.headers});
  }

  // POST: Login
  authenticateUser(user){
    return this.http.post(this.baseUri+'/authentication', user, {headers:this.headers});
  }

  // GET: profile
  getProfile(){
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
  // this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.baseUri+'/profile', {headers:this.headers});
  }

  // GET: dashboard
  getDashboard(){
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
  // this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.baseUri+'/dashboard', {headers:this.headers});
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
      if(this.authToken == null){
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

  // ***************************** add update delete tasks
  getTasks(){
    console.log('In auth Service, get task');
    const data = this.http.get(this.baseUri+'/users/getlist',{headers:this.headers});
    console.log('this is the return to dashboard data: '+data);
    return data;
  }

  // // GET: dashboard
  // getDashboard(){
  //   this.loadToken();
  //   this.headers = new HttpHeaders().set('Authorization', this.authToken);
  // // this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.get(this.baseUri+'/dashboard', {headers:this.headers});
  // }


  addTask(task: Task){
    console.log('Im in auth service==========================');
    console.log('Auth task id'+task._id);
    console.log('Auth task name'+task.name);
    console.log('Auth task time'+task.time);
    console.log('Auth task user id'+task.user_id);
    const data = this.http.post(this.baseUri+'/users/add', task, {headers:this.headers});
    console.log('the data is: '+data);

    return data;
  }

  updateTask(task){
    console.log('Im in auth service/updating: ===================');
    console.log('Auth task id: '+task._id);
    console.log('Auth task name: '+task.name);
    console.log('Auth task time: '+task.time);
    console.log('Auth task user_id: '+task.user_id);
    return this.http.put(this.baseUri+'/users/update', task, {headers:this.headers});
  }

  deleteTask(task:Task){
    console.log('Im in auth service/deletion: ===================');
    console.log('Auth task id: '+task._id);
    console.log('Auth task name: '+task.name);
    console.log('Auth task time: '+task.time);
    console.log('Auth task user_id: '+task.user_id);
    
    const id = task._id;
    console.log('Calling the back end http delete: '+id);
    return this.http.delete(this.baseUri+'/users/delete/'+id, {headers:this.headers});


  }




}
