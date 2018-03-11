import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  email: String;
  username: String;
  password: String;

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    
    // Require fields:
    if(!this.validateService.validateRegister(user)){
      //this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 5000});
      alert('Please fill in all fields');
      return false;
    }

    // Validate email:
    if(!this.validateService.validateEmail(user.email)){
      alert('Please use a valid email');
      return false;
    }

    // Use the auth service(http) to request the information,
    // then because we subcribe to it, we got the data/error back.
    this.authService.registerUser(user).subscribe(
      data =>{
        alert('You are registered and now can log in');
        this.router.navigate(['/']);
    }, error => {
        alert('Something went wrong, please try again');
        this.router.navigate(['/register']);
    });

  }

}
