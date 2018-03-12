import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: Object;
  constructor(private authService: AuthService,
              private router: Router) { }
  

  ngOnInit() {
    this.authService.getDashboard().subscribe(profile =>{
      this.user = profile['user'];
    },
      err => {
        console.log('subcribe err, navigating back to /');
        this.router.navigate(['/']);
        return false;
    });

    

  }// close ngOnInit()

}// close export()
