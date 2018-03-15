import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import array:
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// declarations array:
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

// services=> providers array:
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service'; 
import { AuthGuardService } from './services/guard.service';


// //Import toast module
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser';

const appRoutes: Routes =[
  { path:'', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AmazingTimePickerModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [ValidateService, AuthService, AuthGuardService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
