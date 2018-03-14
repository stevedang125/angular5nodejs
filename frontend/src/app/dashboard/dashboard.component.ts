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

    //this.getTasks();
  }// close ngOnInit()


  fetchDashboard(){
      this.authService.getDashboard().subscribe(profile =>{
      this.user = profile['user'];
      
      this.userID = profile['user']._id;

      this.tasks = profile['tasklist'];
      //console.log('************************* on init: '+this.userID);
    },
      err => {
        console.log('subcribe err, auth service navigating back to /');
        this.router.navigate(['/']);
        return false;
    });
  }

  hack(val){
    //console.log('Before:');
    //console.log(val);
    // val = Object.values;
    // console.log('After:');
    // console.log(val);

    return val;
  }

  getTasks(){
    this.authService.getTasks().subscribe(data =>{
      //console.log('Got the data: '+data);
      this.tasks = data['msg'];
      
    }, error =>{
      console.log('There is an error: '+error);
      console.log(error);
    });
  }

  addOrUpdate(){
    // if(this.task.user_id == undefined){
    //   this.authService.addTask(this.task).subscribe(data =>{
    //     console.log('the data is: '+data);
        
    //   }, error=>{
    //     console.log('you got an err: '+error);
    //   })
    // }

    //console.log(this.name);
    //console.log(this.time);

    const newTask = {
      _id: this._id,
      name: this.name,
      time: this.time,
      user_id: this.userID
    }
    //console.log('newtask id: '+newTask._id);
    //console.log('newtask name: '+newTask.name);
    //console.log('newtask time: '+newTask.time);
    //console.log('newtask user_id: '+newTask.user_id);
    

    if(newTask._id == null){
      console.log('Im here in added new: =====');
      this.authService.addTask(newTask).subscribe(data =>{
        console.log('the data res back is: '+data);
      }, error =>{
        console.log('Error data ***** : '+error);
      });
    }else {
      if(newTask._id != null){
        console.log('Im here in update new: =====');
        this.authService.updateTask(newTask).subscribe(data =>{
          console.log('Success! Task list updated.'+data);
        }, err =>{
            console.log('Failed to update a task, errmsg: '+err);
        });
      }
    }
    
    this.fetchDashboard();
    this.fetchDashboard();
    this._id = null;
    this.name = null;
    this.time = null;
    this.user_id = null;

    //try null
  }

  edit(task){
    console.log('Im in edit:=========================');
    console.log(task._id);
    console.log(task.name);
    console.log(task.time);
    console.log(task.user_id);
    this._id = task._id;
    this.name = task.name;
    this.time = task.time;
    this.user_id = task.user_id;
  }

  deleteTask(task){
    console.log(task._id);
    console.log(task.name);
    console.log(task.time);
    console.log(task.user_id);
    this.authService.deleteTask(task).subscribe(data =>{
      console.log('Success! Deleted a task: '+data);
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }, err =>{
      console.log('Failed to delete a task: '+err);
    })
  }

}// close export()
