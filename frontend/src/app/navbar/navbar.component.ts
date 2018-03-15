import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
                this.toastr.setRootViewContainerRef(vcr);
               }

  ngOnInit() {
    
  }

  showInfo() {
    this.toastr.info('You have Logged Out.');
  }

  onLogoutClick(){
    this.showInfo();
    this.authService.logout();
    //alert('You have logged out');
  }

}
