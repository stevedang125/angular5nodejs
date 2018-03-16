import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
              private router: Router,
              public toastr: ToastsManager, vcr: ViewContainerRef) { 
                this.toastr.setRootViewContainerRef(vcr);
              }

  ngOnInit() {
    
  }
  
  showSuccess(msg) {
    this.toastr.success(msg, 'Success!');
  }

  showEmail() {
    this.toastr.warning('Please Use A Valid Email.', 'Alert!');
  }

  showWarning() {
    this.toastr.warning('Please Fill In All Fields.', 'Alert!');
  }

  showError() {
    this.toastr.error('Something went wrong, please try again later!', 'Oops!');
  }

  onCancelSubmit(){
    this.username = undefined;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }

  onRegisterSubmit(){
    if( (this.name || this.email || this.username || this.password) == undefined){
      this.showWarning();
      return false;
    }
  

  const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    
    // Require fields:
    if(!this.validateService.validateRegister(user)){
      //this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 5000});
      //alert('Please fill in all fields');
      this.showWarning();
      return false;
    }

    // Validate email:
    if(!this.validateService.validateEmail(user.email)){
      //alert('Please use a valid email');
      this.showEmail();
      return false;
    }

    // Use the auth service(http) to request the information,
    // then because we subcribe to it, we got the data/error back.
    this.authService.registerUser(user).subscribe(
      data =>{
        this.showSuccess('You are registered and now can log in.');
        //alert('You are registered and now can log in');
        this.router.navigate(['/']);
    }, error => {
        //alert('Something went wrong, please try again');
        this.showError();
        this.router.navigate(['/register']);
    });

  }

}
