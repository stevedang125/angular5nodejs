import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Task } from '../task'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  task:Task;
  tasks:Task[];
  
  _id:string = null;
  name:string;
  time:string;
  user_id:string;

  user: Object;
  userID: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.fetchDashboard();
  }// close ngOnInit()

  // Fetch the task list from the database:
  fetchDashboard(){
      this.authService.getDashboard().subscribe(profile =>{
      this.user = profile['user'];
      this.userID = profile['user']._id;
      this.tasks = profile['tasklist'];
    },
      err => {
        console.log('Fetch Failed! Navigating back to homepage /, err msg: '+err);
        this.router.navigate(['/']);
        return false;
    });
  }

  // For fun solution, debugging
  hack(val){
    return val;
  }

  addOrUpdate(){
    // Create a new Task to hold the input infor from the form
    const newTask = {
      _id: this._id,
      name: this.name,
      time: this.time,
      user_id: this.userID
    }

    // If the id is null => new task being added
    // else the id != null => updating an existing task
    if(newTask._id == null){
      this.authService.addTask(newTask).subscribe(data =>{
        //console.log('Success! Task added.'+data);
      }, error =>{
        console.log('Add Task Failed, here is the error: '+error);
      });
    }else {
      if(newTask._id != null){
        this.authService.updateTask(newTask).subscribe(data =>{
          //console.log('Success! Task updated.'+data);
        }, err =>{
            console.log('Update Task Failed, here is the err msg: '+err);
        });
      }
    }
    
    // Fetch the data from the data to update the list:
    this.fetchDashboard();
    // Double fetch in case the internet speed is laggy >__<
    this.fetchDashboard();

    // Reset the form (for now temp. solution)
    this._id = null;
    this.name = null;
    this.time = null;
    this.user_id = null;

  } // close of AddOrUpdate

  clear(){
    this._id = null;
    this.name = null;
    this.time = null;
    this.user_id = null;
  }

  // fetch the date that needed to be updated into the form to submit
  edit(task){
    this._id = task._id;
    this.name = task.name;
    this.time = task.time;
    this.user_id = task.user_id;
  } // close of edit 

  deleteTask(task){
    this.authService.deleteTask(task).subscribe(data =>{
      //console.log('Success! Deleted a task: '+data);
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }, err =>{
      console.log('Delete Task Failed, here is the err msg: '+err);
    });

  }// close of deleteTask

}// close export()
