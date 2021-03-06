# errors and fixed:
    Error:
        bodyparser errors? 
    Solution:
        makesure app.use(bodyparser.json()) goes be4 any api, routes

    Error:#3
        options.jwtFromRequest = ExtractJwt.fromAuthHeader();?
        fromAuthHeader() is not a function.
    Solution:
        options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
        because jwt has a newer version now.

    Error:#3
        const token = jwt.sign(user, config.secret);
        Expected "payload" to be a plain object.
    Solution:https:
        Your user object is initialized here:
        User.getUserByUsername(username, (err, user)
        A mongoosejs object, which contains many methods and is not "serializable".
        Passing a plain object, by either using .lean() from mongoose or 
        plain toJSON method:
        
        const token = jwt.sign(user.toJSON(), config.secret);

# 1.Create server, connect to database, create api and routes: (set up the server, routes)
    create server.js
    npm init
    add all the dependencies:
        "dependencies": {
            "express": "*",
            "body-parser": "*",
            "cors": "*",
            "bcryptjs": "*",
            "mongoose": "*",
            "jsonwebtoken": "*",
            "passport": "*",
            "passport-jwt": "*"
        },
    npm install
    bring in server.js:
        express, path, bodyparser, cors, passport, mongoose
        set up the localhost listener
        get the path for:
            routes: app.use('/users', users)
                    bring in express, express.Router();
                    set up the routes, exports the routers;
            database: module.exports = { db: '', secret: ''}
    create folders:
        config/database.js
        routes/users.js

# 2.Add user register, salt+hash the user.password, added userSchema:(add register)
    create models/user.js
    bring in: mongoose, bcryptjs, config/db for mongoose, jwt.
    use mongoose.Schema to create an Object for new users.
    exports the user schema with the name of the model, schema (User, userSchema)
    exports a getUserById function (id, callback), User.findById(id, callback); // deletion
    exports a getUserByUsername function(username, callback), query = {username: username},
                                                     User.findOne(query, callback) // search
    exports an addUser function(newUser, (callback) =>{
        bcryptjs:
            genSalt the password
            hash    the password
        newUser.save(callback);
    });

    routes: register
            create a new object to hold the new user.
            call User.addUser(newUser, (err, user)=>{
                if(err){
                    res.json({success: false, msg: 'Error! Failed to register user.'});
                }else{
                    res.json({success: true, msg: 'User registered!'});
                }
            });
            
    User postman to test. header(content-type, application/json)

# 3. API Authentication, Token:(protect specific routes)
    server.js:
        bring in:   app.use(passport.initialize());
                    app.use(passport.session());
                    require('./config/passport')(passport);
    
    create config/passport.js
        bring in: 
            const JwtStrategy = require('passport-jwt').Strategy;
            const ExtractJwt = require('passport-jwt').ExtractJwt;

            const User = require('../models/user');
            const config = require('../config/database');

            module.exports = function(passport){
                let options = {};
                options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
                options.secretOrKey = config.secret;
                passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
                    console.log(jwt_payload._id);
                    User.getUserById(jwt_payload._id, (err, user)=>{
                        if(err){
                            return done(err, false);
                        }
                        if(user){
                            return done(null, user);
                        }else{
                            return done(null, false);
                        }
                    });
                }));
            }

    routes/users.js, /authentication:
        1st thing: get user.username and user.password
        then:
        User.getUserByUsername(username, (err, user) => {
        
        Check for errors:
            if(err){throw err;}

        Check for existing user:
            if(!user){
                return res.json({ success:false, msg:'User not found!' });
            }
        
        If there is a match for user, then compare the password
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err){
                throw err;
            }
        
        Also, add the token to the user:
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret,{expiresIn:604800});
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
            });
              
            } else{
                return res.json({success:false, msg:'Wrong password!'});
            }
            });
            });
            });

    To protect a route, use passport.authenticate('jwt', {session: false}) as the 2nd param.
        Eg:
        From: router.get('/profile', (req, res, next) =>{}
        To:router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{}
    Use postman to check,
        Get request to users/profile:
        header: Key: Authorization Value: the token

# 4. Front End: (Angular 5 time !!!)
    app.module.ts:
        import the library:
            import { RouterModule, Routes } from '@angular/router';
        set up the routes
            const appRoutes: Routes =[
                { path:'', component: HomeComponent },
                { path: 'login', component: LoginComponent },
                { path: 'register', component: RegisterComponent },
                { path:'dashboard', component: DashboardComponent },
                { path: 'profile', component: ProfileComponent },
                { path: 'about', component: AboutComponent },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ];
        don't forget to add it to the import array:
            RouterModule.forRoot(appRoutes)
    
    index.html:
        add some bootstrap, javascript for it:
            <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css">
            <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.css">
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    app.component.html
        for the nav bar to show up all the time:
            <app-navbar></app-navbar>
            <div class="container">
                <router-outlet></router-outlet>
            </div>

# 5. Validation and Authentication:(Added Register)
    capture the information from the fields user entered
    in the onRegisterSubmit(){
        create a new userObject to hold those information
        validateEmail
        validateRegister
        use auth service to send a request to the server
        then .subcribe to get the data
    }

    bring in server.js:
        var http = require('http');
        http.createServer(app).listen(port, () =>{}

    Create to simple forms for register and login.
    Add links, ngModel, event binding to them.

    Validation: create service folder, then ng g service validation
        Add the service to app.module.ts
        Simple validation for the input fields:
            validateRegister(user){
                if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
                    return false;
                }else{
                    return true;
                }
            }

            validateEmail(email){
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

    Authentication: in service folder, ng g service auth
        Add the service to app.module.ts
            import { HttpClient, HttpHeaders } from '@angular/common/http';
        Call the backend server on register
            authToken: any;

            private baseUri:string="http://localhost:8080";
            private headers = new HttpHeaders().set('Content-Type', 'application/json');

            constructor(private http: HttpClient) { }

            registerUser(user){
                return this.http.post(this.baseUri+'/users/register', user, {headers:this.headers});
            }
    
    Register component:
        Add the service, inject the service to use its functions.
        .subcribe(data => {}, err =>{}) to the http information:

# 6 Log in and Log out:
    Get the data from the user input fields.
    Validation on Log in
    Use authService for authenticateUser, 
        if the user has an account, wrong password or username.
    
    send a request to the back end server to get the data, which
    have the token and the user object.
    save the token and userobject into local storeStorage.

    logout()
        set authToken = null, userObject = null;

# 7. Protect the api: ./profile if the user is not logged in,
     Hide: dashboard, profile, logout Tabs from Nav Bar if not logged in.
     Show: ^___________________________________________ if logged in.(hide register.)
     
    ***** NOTE:
        Old version:(didn't work right with Angular5)
            import { tokenNotExpired } from 'angular2-jwt';
            The version of angular2-jwt to check for tokenNotExpired isn't working right.

        New version:(https://github.com/auth0/angular2-jwt)
            Read and test this(later)
        
    Solution:
        Used loadToken() in service, set the signedin value to True when loggedIn,
        for a work around instead for the new "angular2-jwt"
        version that supports Angular5.


 # 8. Protect the api: ./dashboard, fetch the information from the server + database: (Test)
 ** BACK END: routes/users.js:
    1) Similar to profile, to protect an api, add:
        passport.authenticate('jwt', {session: false}),
    to the second parameter, then the request has to have a jwt added to the header to 
    access this api:

        router.get('/dashboard', 
        passport.authenticate('jwt', {session: false}),
        (req, res, next)=>{
        res.json({user: req.user});
        }); 

    POSTMAN: localhost:8080/dashboard
        w/o  : key: Authorization, val: jwt token => Unauthorized
        with : key: Authorization, val: jwt token => User Object with all the info.

 ** FRONT END: auth.service:
    2) Similar to get profile, add this to make a request to the server backend:
        // GET: dashboard
        getDashboard(){
            this.loadToken(); // get the token from local storage, load it into "authToken"
            this.headers = new HttpHeaders().set('Authorization', this.authToken);
            return this.http.get(this.baseUri+'/dashboard', {headers:this.headers});
        }
    
    3) Similar to profile, add route, authservice to: (dashboard.component.ts)
        Import services, routes:
            import { AuthService }  from '../services/auth.service';
            import { Router, Route } from '@angular/router';

        Inject to the constructor, create an object "user: Object;" to hold the response/return object:
            user: Object;
            constructor(private authService: AuthService,
                        private router: Router) { }

        Make a request on Init to fetch the data first when loaded, in ngOnInit method:
            this.authService.getDashboard().subscribe(profile =>{
                this.user = profile['user'];
            },
            err => {
                this.router.navigate(['/']);
                return false;
            });

 # 9. Add guards for protected api:(CanActivate)
    1) Create guards for profile, dashboard. ng g service guard.
    2) In guards:
        import { Injectable } from '@angular/core';
        import { Router, CanActivate } from '@angular/router';
        import { AuthService } from './auth.service';

        @Injectable()
        export class AuthGuardService implements CanActivate {

        constructor(public authService: AuthService, public router: Router) {}

        canActivate(): boolean {
            //console.log('Guard called !');

            if(this.authService.signedIn()){
            return true;
            }else{
            //console.log('not allows, navigating to home page /');
            this.router.navigate(['/']);
            return false;
            }
        }
        }
    3) Inject them into, app.module, add canActivate: [AuthGuardService] to their routes.

 # 10. Add a task to the database/collection: tasklist:
 ** BACKEND:
    1) Create models/tasklist.js
        Bring in: mongoose, database, mongoose.Schema, ObjectId = mongoose.Types.ObjectId;
        
        Create a new Schema to hold the input data:(_id doesn't required)
            var taskSchema = Schema ({
                name: { type: String },
                time: { type: String },
                user_id: { type: String }
            });
        
        Export the Schema to a variable, and which database collection will it be saved in:(tasklist in this case)
            const Task = module.exports = mongoose.model('Task', taskSchema, 'tasklist');

            Helper functions:
                // Add tasks
                module.exports.addTask = function(newTask, callback){
                    newTask.save(callback);
                }

                // Delete/Update
                module.exports.getTaskById = function(id, callback){
                    Task.findById(id, callback);
                }
                // Search:
                module.exports.getTaskByTaskUserID = function(taskname, callback){
                    const query = {user_id: user_id};
                    Task.findOne(query, callback);
                }

    2) Request: Post, Put, Delete, Get (routes/tasks.js)
        Bring in: express, router, Task schema(models/tasklist), mongoose, database, mongoose.Schema, ObjectId

        2a) Add a task:(Post request)
            Create a new Schema Object to hold the input data:
            (only name and time get filled in, both ids will be undefined for later assign)
                let newTask = new Task({
                    _id: req.body._id,
                    name: req.body.name,
                    time: req.body.time,
                    user_id: req.body.user_id
                });
            
            Call the addTask Helper function from models/tasklist to save the new task to database:
                Task.addTask(newTask, (err, user) =>{
                    if(err){
                        res.json({success: false, msg: 'Error! Failed to register Task.'});
                    }else{
                        res.json({success: true, msg: 'Task registered!'});
                    }
                });
        
        2b) Upate a task:(Put request)
            Find the task, that need to be updated, _id by Helper function in models/tasklist.
                Task.getTaskById(req.body._id, (err, task) =>{ 
                
                If there is an error, res back with a 500 status and err msg.
                If success:
                    Assign/replace the found task with the req.body.infor
                Then:
                    Save the task by the addTask Helper function in models/tasklist
                } // close of getTaskById()

        2c) Delete a task:(Delete request)
            Extract the passed in id parameter from the get url:
                '/delete/:id'
                req.params.id 
            
            Find the task id and remove it from database: 
                Task.findOneAndRemove({_id:req.params.id}, (err, task) =>{}

        2d) Fetch the task list from the database:(Get request) routes/users.js
            Get the FKey of the logged in user for the tasks added to the database:
                var user_id = new ObjectId(req.user.id);
                var query = Task.find({});
                query.where('user_id', user_id);
                query.exec(function(err, tasklist){
                    if(err){
                        console.log('Error! ** Search for tasks with same owner: '+err);
                    }else{
                        console.log('Success! Sending back the list to the frontend.')
                        res.status(200).json({user: req.user, tasklist: tasklist});
                    }
                });
    
 ** FRONTEND:
    1) Create an object to hold the input data:(task.ts)
        export class Task {
            // _id will get grenerated with the Schema in DataBase
            // it's optional, when add a new task we don't need this id :)
            public _id?: string; 
            public name: string;
            public time: string;
            public user_id: string; 
        }
    
    2) Make http calls to the backend to get data from database: (AuthService)

        Http POST
        addTask(task: Task){
            return this.http.post(this.baseUri+'/users/add', task, {headers:this.headers});
        }

        Http PUT
        updateTask(task){
            return this.http.put(this.baseUri+'/users/update', task, {headers:this.headers});
        }

        Http DELETE
        deleteTask(task:Task){
            const id = task._id;
            return this.http.delete(this.baseUri+'/users/delete/'+id, {headers:this.headers});
        }

        Http GET
        // GET: dashboard
        // Fetch the task list from database to the front end (http call)
        getDashboard(){
            this.loadToken();
            this.headers = new HttpHeaders().set('Authorization', this.authToken);
            return this.http.get(this.baseUri+'/dashboard', {headers:this.headers});
        }

    3) Create, Init variables, Create functions to send data to authservice for making requests:
        
            task:Task;
            tasks:Task[];
            
            _id:string = null;
            name:string;
            time:string;
            user_id:string;

            user: Object;
            userID: string;
        3a) Add or Update the task:(2 in 1 YEAHHH!!!)
            // Create a new Task to hold the input infor from the form
            const newTask = {
                _id: this._id,
                name: this.name,
                time: this.time,
                user_id: this.userID
            }

            There are two cases:
                null task._id: New Task
                !null task._id: Updating a task.

            3aa) null task._id: New Task:
                Call the authservice to send a POST http request to add a task:
                    this.authService.addTask(newTask).subscribe(data =>{}
            3ab) !null task._id: Updating a task:
                Call the authservice to send a PUT http request to update a task:
                    this.authService.updateTask(newTask).subscribe(data =>{}

            Call fetchDashboard() to add the task to the show task list fast like a ninja:
            // Reset the form (for now temp. solution)
            this._id = null;
            this.name = null;
            this.time = null;
            this.user_id = null;

        3c) Fetch the task list from the database:
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
        
 # 11. Add time picker feature:
    Source: https://www.youtube.com/watch?v=ptb7IkynmVM
            https://owsolutions.github.io/amazing-time-picker/Examples
            https://owsolutions.github.io/amazing-time-picker/API

    Add to app.module
        import { AmazingTimePickerModule } from 'amazing-time-picker';
        import array: AmazingTimePickerModule
    
    DashboardComponent.ts:
        import { AmazingTimePickerService } from 'amazing-time-picker';
        private atp: AmazingTimePickerService

    DashboardComponent.html:
        <input type="time" atp-time-picker value="{{time}}" name="time" [(ngModel)] = "time" class="form-control">

    Maybe helpful in the future:
        https://www.npmjs.com/package/ngx-date-time-picker
        https://www.npmjs.com/package/ng-pick-datetime
        https://danielykpan.github.io/date-time-picker/
        https://www.youtube.com/watch?v=f0tlQtHVhKY
        https://www.youtube.com/watch?v=edaN6iCcqP4

 # 12. Add toastr messages instead for the alert box:
        https://github.com/CodeSeven/toastr
        https://www.thetechieshouse.com/use-alert-toast-notifications-in-angular-4/
        https://github.com/PointInside/ng2-toastr#toastoptions-configurations

 # 13. Add the search feature, clear the search box:(using Pipe)
    Generate the pipe in src/app/services: (ng g pipe <name>) ng g pipe filter

    Change the transform method to take in 2 parameters:(/filter.pipe.ts)
        an array: tasks
        compare val: inputString

        transform(tasks: any, inputString: any): any {
            // Check if the search inputString is empty/undefined
            if(inputString === undefined){
            return tasks;
            }
            // If there is input string to search:
            return tasks.filter(function(retVal){
            return retVal.name.toLowerCase().includes(inputString.toLowerCase());
            }); 
        }
    
    Init. the inputString val as string type:(component.ts)
        inputString:string;
    
    Use the pipe in the html as:(component.html)
        Search box:
        <input type="text" name="inputString" [(ngModel)] = "inputString" class="form-control">

        List by *ngFor:
        <tr *ngFor = "let task of hack(tasks) | filter:inputString; let i = index">

 




    
        

    
    

    
