import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: any;
  username: String;
  password: String;
  
  login_messages: Boolean = false;

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    
  }

 

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    // Require fields:
    if(!this.validateService.validateLogin(user)){
      //this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 5000});
      alert('Please fill in all fields');
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data =>{
      //console.log(data);
      var success = data['success'];
      
      if(success){
        // console.log(data['token']);
        // console.log(data['user']);
        const token = data['token'];
        const userObject = data['user'];
        //console.log(token);
        //console.log(userObject);

        this.authService.storeUserData(token, userObject);
        
        alert('You have logged in');
        // this.login_messages = true;

        this.authService.setSignIn();

        this.router.navigate(['/profile']);
      }
      if(!success)
      {
        alert(data['msg']);
        this.router.navigate(['/']);
      }
    }, error=> {
        alert('Oh no! Something went wrong. Please check again');
        this.router.navigate(['/']);
    });
   
    
  }

}
