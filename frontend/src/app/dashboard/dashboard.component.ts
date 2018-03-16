import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Task } from '../task';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public date = new Date();

  inputString:string;

  task:Task;
  tasks:Task[];
  
  _id:string = null;
  name:string;
  time:string;
  user_id:string;

  user: Object;
  userID: string;
  selectedTime:any;

  constructor(private authService: AuthService,
              private router: Router,
              private atp: AmazingTimePickerService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.fetchDashboard();
  }// close ngOnInit()

  showSuccess() {
    this.toastr.success('Added/Updated The Task!', 'Success!');
  }

  showDelete() {
    this.toastr.success('Deleted The Task!', 'Success!');
  }

  showClear() {
    this.toastr.info('Cleared The Form!', 'Success!');
  }

  showEdit() {
    this.toastr.warning('A Task Is Being Updated.', 'Alert!');
  }

  showError(msg) {
    this.toastr.error(msg, 'Oops!');
  }

  showWarning() {
    this.toastr.warning('Please Fill In All Fields.', 'Alert!');
  }

  // showInfo() {
  //   this.toastr.info('Just some information for you.');
  // }
  
  // showCustom() {
  //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  // }

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
    
    if(this.name == null || this.time == null)
    {
      this.showWarning();
      return false;
    }

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

    this.showSuccess();

  } // close of AddOrUpdate

  clear(){
    if(this.name == undefined && this.time == undefined){
      this.showError('There is nothing to clear!');
      return false;
    }
    this._id = undefined;
    this.name = undefined;
    this.time = undefined;
    this.user_id = undefined;
    this.showClear();
  }

  clearSearch(){
    if(this.inputString == undefined){
      this.showError('There is nothing to clear!');
      return false;
    }
    this.inputString = undefined;
    this.showClear();
  }

  // fetch the date that needed to be updated into the form to submit
  edit(task){
    this._id = task._id;
    this.name = task.name;
    this.time = task.time;
    this.user_id = task.user_id;
    this.showEdit();
  } // close of edit 

  deleteTask(task){
    this.authService.deleteTask(task).subscribe(data =>{
      //console.log('Success! Deleted a task: '+data);
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }, err =>{
      console.log('Delete Task Failed, here is the err msg: '+err);
    });
    this.showDelete();
  }// close of deleteTask

}// close export()
