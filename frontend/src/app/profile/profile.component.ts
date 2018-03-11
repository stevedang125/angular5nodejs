import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
      this.authService.getProfile().subscribe(profile =>{
      console.log("this is the profile"+profile);
      console.log("this is the profile"+profile['user']);
      this.user = profile['user'];
    },
      err => {
        console.log('this is the error'+err);
        this.router.navigate(['/']);
        return false;
  });

  }

}
