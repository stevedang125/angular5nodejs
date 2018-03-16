webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    width: 100%;\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n/* .aboutRight {\r\n    width: 75%;\r\n    padding: 50px 0px 0px 100px;\r\n} */\r\n\r\n.left {\r\n    width: 60%;\r\n    max-height: 590px;\r\n    padding: 50px 0px 0px 230px;\r\n  }\r\n\r\n.right {\r\n    width: 40%;\r\n    padding: 97px 0px 0px 20px;\r\n    /* max-height: 607px; */\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"container column left\">\n            <h2 class=\"page-header\" style=\"color: rgb(223, 56, 35)\">What I have used in this project:</h2>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">Front-End</li>\n              <li class=\"list-group-item\">Angular 5.2.8, Angular CLI: 1.7.3</li>\n              <li class=\"list-group-item\">RouterModule, Routes from @angular/router</li>\n              <li class=\"list-group-item\">HttpClientModule from @angular/router</li>\n              <li class=\"list-group-item\">FormsModule from @angular/forms</li>\n              <li class=\"list-group-item\">AmazingTimePickerModule from amazing-time-picker</li>\n              <li class=\"list-group-item\">ToastModule from ng2-toastr/ng2-toastr</li>\n              <li class=\"list-group-item\">BrowserAnimationsModule from @angular/platform-browser/animations</li>\n              <li class=\"list-group-item\">ValidateService, AuthService, AuthGuardService, FilterPipe</li>\n            </ul>\n          </div>\n          <div class=\"container column right\">\n              <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Back-End</li>\n                  <li class=\"list-group-item\">Node 9.4.0, Express, Router, Http</li>\n                  <li class=\"list-group-item\">Body-parser, Bcryptjs, Mongoose, MongoDB</li>\n                  <li class=\"list-group-item\">Passport, Passport-jwt, Jsonwebtoken, Cors</li>\n              </ul>          \n          </div>\n        \n        </div>\n        "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <body class=\"main\"> -->\n<body>\n        \n    \n    <div class=\"bg\">\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <!-- <div class=\"fixed\"> -->\n                \n        <!-- </div> -->\n\n    </div>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_amazing_time_picker__ = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_guard_service__ = __webpack_require__("./src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_filter_pipe__ = __webpack_require__("./src/app/services/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import array:






// declarations array:







// services=> providers array:




// //Import toast module
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser';
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_guard_service__["a" /* AuthGuardService */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__services_filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_amazing_time_picker__["a" /* AmazingTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__services_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    /* background-color: transparent; */\r\n    background-color: rgba(0, 0, 0, 0.315);\r\n    border: 0px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"user\" class=\"header\">\n    <h2 class=\"page-header\">{{user.name}}'s Daily Goals</h2>\n</div> -->\n\n<div class=\"row\">\n<div class=\"column left scrolling\">\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\"><strong>Goals and Time</strong></h4>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th><h6><strong>Number</strong></h6></th>\n          <th><h6><strong>Goals</strong></h6></th>\n          <th><h6><strong>Time</strong></h6></th>\n          <th><h6><strong>Options</strong></h6></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let task of hack(tasks) | filter:inputString; let i = index\">\n          <td><h6>{{i+1}}</h6></td>\n          <td><h6>{{task.name}}</h6></td>\n          <td><h6>{{task.time}}</h6></td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteTask(task)\">Finished</button>&nbsp;\n            <button class=\"btn btn-info\" (click)=\"edit(task)\" >Edit</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>\n<div class=\"column right\">\n    <div class=\"card\">\n        <form>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\"><strong>Search</strong></h4>\n            <table class=\"table table-hover\">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class=\"form-group\">\n                        <input type=\"text\" name=\"inputString\" [(ngModel)] = \"inputString\" class=\"form-control\">\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <button class=\"btn btn-success\" (click)=\"search()\">Search</button>&nbsp;\n                  <button class=\"btn btn-danger\" (click)=\"clearSearch()\">Clear</button>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </form>\n    </div>\n<div class=\"card\">\n    <form>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\"><strong>Add A Goal</strong></h4>\n        <table class=\"table table-hover\">\n          <tbody>\n            <tr>\n              <td>\n                <div class=\"form-group\">\n                  <label><h6><strong>Goal</strong></h6></label>\n                    <input type=\"text\" name=\"name\" [(ngModel)] = \"name\" class=\"form-control\">\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <div class=\"form-group\">\n                  <label><h6><strong>Time</strong></h6></label>\n                    <!-- <input type=\"text\" name=\"time\" [(ngModel)] = \"time\" class=\"form-control\"> -->\n                    <input type=\"time\" atp-time-picker value=\"{{time}}\" name=\"time\" [(ngModel)] = \"time\" class=\"form-control\">\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                  <!-- <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\"> -->\n                  <button class=\"btn btn-success\" (click)=\"addOrUpdate()\">Submit</button>&nbsp;\n                  <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amazing_time_picker__ = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, atp, toastr, vcr) {
        this.authService = authService;
        this.router = router;
        this.atp = atp;
        this.toastr = toastr;
        this.date = new Date();
        this._id = null;
        this.toastr.setRootViewContainerRef(vcr);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.fetchDashboard();
    }; // close ngOnInit()
    DashboardComponent.prototype.showSuccess = function () {
        this.toastr.success('Added/Updated The Task!', 'Success!');
    };
    DashboardComponent.prototype.showDelete = function () {
        this.toastr.success('Deleted The Task!', 'Success!');
    };
    DashboardComponent.prototype.showClear = function () {
        this.toastr.info('Cleared The Form!', 'Success!');
    };
    DashboardComponent.prototype.showEdit = function () {
        this.toastr.warning('A Task Is Being Updated.', 'Alert!');
    };
    DashboardComponent.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Oops!');
    };
    DashboardComponent.prototype.showWarning = function () {
        this.toastr.warning('Please Fill In All Fields.', 'Alert!');
    };
    // showInfo() {
    //   this.toastr.info('Just some information for you.');
    // }
    // showCustom() {
    //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    // }
    // Fetch the task list from the database:
    DashboardComponent.prototype.fetchDashboard = function () {
        var _this = this;
        this.authService.getDashboard().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.userID = profile['user']._id;
            _this.tasks = profile['tasklist'];
        }, function (err) {
            console.log('Fetch Failed! Navigating back to homepage /, err msg: ' + err);
            _this.router.navigate(['/']);
            return false;
        });
    };
    // For fun solution, debugging
    DashboardComponent.prototype.hack = function (val) {
        return val;
    };
    DashboardComponent.prototype.addOrUpdate = function () {
        if (this.name == undefined || this.time == undefined) {
            this.showWarning();
            return false;
        }
        // Create a new Task to hold the input infor from the form
        var newTask = {
            _id: this._id,
            name: this.name,
            time: this.time,
            user_id: this.userID
        };
        // If the id is null => new task being added
        // else the id != null => updating an existing task
        if (newTask._id == null) {
            this.authService.addTask(newTask).subscribe(function (data) {
                //console.log('Success! Task added.'+data);
            }, function (error) {
                console.log('Add Task Failed, here is the error: ' + error);
            });
        }
        else {
            if (newTask._id != null) {
                this.authService.updateTask(newTask).subscribe(function (data) {
                    //console.log('Success! Task updated.'+data);
                }, function (err) {
                    console.log('Update Task Failed, here is the err msg: ' + err);
                });
            }
        }
        // Fetch the data from the data to update the list:
        this.fetchDashboard();
        // Double fetch in case the internet speed is laggy >__<
        this.fetchDashboard();
        // Reset the form (for now temp. solution)
        this._id = undefined;
        this.name = undefined;
        this.time = undefined;
        this.user_id = undefined;
        this.showSuccess();
    }; // close of AddOrUpdate
    DashboardComponent.prototype.clear = function () {
        if (this.name == undefined && this.time == undefined) {
            this.showError('There is nothing to clear!');
            return false;
        }
        this._id = undefined;
        this.name = undefined;
        this.time = undefined;
        this.user_id = undefined;
        this.showClear();
    };
    DashboardComponent.prototype.search = function () {
        if (this.inputString == undefined) {
            this.showError('Empty search box!');
            return false;
        }
    };
    DashboardComponent.prototype.clearSearch = function () {
        if (this.inputString == undefined) {
            this.showError('There is nothing to clear!');
            return false;
        }
        this.inputString = undefined;
        this.showClear();
    };
    // fetch the date that needed to be updated into the form to submit
    DashboardComponent.prototype.edit = function (task) {
        this._id = task._id;
        this.name = task.name;
        this.time = task.time;
        this.user_id = task.user_id;
        this.showEdit();
    }; // close of edit 
    DashboardComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.authService.deleteTask(task).subscribe(function (data) {
            //console.log('Success! Deleted a task: '+data);
            _this.tasks.splice(_this.tasks.indexOf(task), 1);
        }, function (err) {
            console.log('Delete Task Failed, here is the err msg: ' + err);
        });
        this.showDelete();
    }; // close of deleteTask
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_amazing_time_picker__["b" /* AmazingTimePickerService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}()); // close export()



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n.loginRight {\r\n    width: 75%;\r\n    padding: 0px 0px 0px 400px;\r\n}\r\n\r\n.jumbotron{\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<div class=\"container\">\n<div class=\"jumbotron center\">\n  <h1>Daily Goals App</h1>\n  <p class=\"lead\">\n    Welcome to the daily goals MEAN stack web app by <strong>Steve Dang</strong>\n  </p>\n</div>\n\n<!-- <div *ngIf=\"!login_messages\" class=\"alert alert-success\">\n    <strong>Success!</strong> You have logged in!\n</div>\n<div *ngIf=\"login_messages\" class=\"alert alert-success\">\n    <strong>Success!</strong> You have logged in! *******\n</div> -->\n\n<div class=\"row\">\n\n\n<div class=\"column loginRight\" *ngIf=\"!authService.signedIn()\">\n  <h2 class=\"page-header\">Login</h2>\n  <form class=\"form-signin\">\n          <div class=\"form-group\">\n            <label for=\"Username\">Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n          <label for=\"Password\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n            </label>\n          </div>\n          <!-- <input class=\"btn btn-lg btn-success\" type=\"submit\" value=\"Login\"><br><br> -->\n          <button class=\"btn btn-success\" (click)=\"onLoginSubmit()\">Login</button>&nbsp;\n            <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\n          <p>Don't have an account yet? <a [routerLink] = \"['/register']\">Register Here</a></p> \n  </form>\n</div>\n\n</div>\n\n</div>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(validateService, authService, router, toastr, vcr) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.login_messages = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showSuccess = function () {
        this.toastr.success('You Have Logged In!', 'Success!');
    };
    HomeComponent.prototype.showError = function (message) {
        this.toastr.error(message, 'Oops!');
    };
    HomeComponent.prototype.showWarning = function () {
        this.toastr.warning('Please Fill In All Fields.', 'Alert!');
    };
    // showCustom() {
    //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    // }
    HomeComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.password = undefined;
    };
    HomeComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // Require fields:
        if (!this.validateService.validateLogin(user)) {
            //this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 5000});
            //alert('Please fill in all fields');
            this.showWarning();
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            //console.log(data);
            var success = data['success'];
            if (success) {
                // console.log(data['token']);
                // console.log(data['user']);
                var token = data['token'];
                var userObject = data['user'];
                //console.log(token);
                //console.log(userObject);
                _this.authService.storeUserData(token, userObject);
                //alert('You have logged in');
                // this.login_messages = true;
                _this.showSuccess();
                _this.authService.setSignIn();
                _this.router.navigate(['/profile']);
            }
            if (!success) {
                //alert(data['msg']);
                _this.showError(data['msg']);
                _this.router.navigate(['/']);
            }
        }, function (error) {
            _this.showError('Oh no! Something went wrong. Please check again');
            //alert('Oh no! Something went wrong. Please check again');
            _this.router.navigate(['/']);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Daily Goals</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto navbar-left\">\n\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/']\">Home</a>\n      </li>\n      \n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/about']\">About</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      *ngIf=\"authService.signedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\n      </li>\n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      *ngIf=\"authService.signedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      *ngIf=\"!authService.signedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      *ngIf=\"authService.signedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/']\" (click)=\"onLogoutClick()\">Log out</a>\n      </li>\n      \n    </ul>\n\n  </div>\n</nav>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, toastr, vcr) {
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.showInfo = function () {
        this.toastr.info('You have Logged Out.');
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.showInfo();
        this.authService.logout();
        //alert('You have logged out');
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    width: 50%;\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n.profileRight {\r\n    width: 75%;\r\n    padding: 50px 0px 0px 100px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n<div *ngIf=\"user\" class=\"container column profileRight\">\n    <h2 class=\"page-header\" style=\"color: rgb(223, 56, 35)\" >Welcome back, {{user.name}}.</h2>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\">ID: {{user._id}}</li>\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li> \n    </ul>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            //console.log("this is the profile"+profile);
            //console.log("this is the profile"+profile['user']);
            _this.user = profile['user'];
        }, function (err) {
            //console.log('this is the error'+err);
            _this.router.navigate(['/']);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n.registerRight {\r\n    width: 75%;\r\n    padding: 50px 0px 0px 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <html> -->\n<div class=\"row\">\n<div class=\"column registerRight\">\n<div class=\"container\">\n  \n  <!-- <div class=\"jumbotron center\">\n      <h1>Daily Goals App</h1>\n  </div> -->\n\n  <div class=\"container\" *ngIf=\"!authService.signedIn()\">\n    <h2 class=\"page-header\">Register</h2>\n    <!-- <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\"> -->\n        <form class=\"form-signin\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Name\" [(ngModel)]=\"name\" name=\"name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Email\" [(ngModel)]=\"email\" name=\"email\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n            </div>\n\n            <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"*Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n\n            <!-- <input class=\"btn btn-lg btn-success\" type=\"submit\" value=\"Register\"><br><br>\n            <button (click)=\"onCancelSubmit()\">Cancel</button> -->\n            <button class=\"btn btn-success\" (click)=\"onRegisterSubmit()\">Register</button>&nbsp;\n            <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\n            <p>Already have an account? <a [routerLink] = \"['/']\">Login Here</a></p> \n    </form>\n  </div>\n\n</div>\n\n\n</div>\n</div>\n\n<!-- </html> -->"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, toastr, vcr) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    RegisterComponent.prototype.showEmail = function () {
        this.toastr.warning('Please Use A Valid Email.', 'Alert!');
    };
    RegisterComponent.prototype.showWarning = function () {
        this.toastr.warning('Please Fill In All Fields.', 'Alert!');
    };
    RegisterComponent.prototype.showError = function () {
        this.toastr.error('Something went wrong, please try again later!', 'Oops!');
    };
    RegisterComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.name = undefined;
        this.email = undefined;
        this.password = undefined;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if ((this.name || this.email || this.username || this.password) == undefined) {
            this.showWarning();
            return false;
        }
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Require fields:
        if (!this.validateService.validateRegister(user)) {
            //this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 5000});
            //alert('Please fill in all fields');
            this.showWarning();
            return false;
        }
        // Validate email:
        if (!this.validateService.validateEmail(user.email)) {
            //alert('Please use a valid email');
            this.showEmail();
            return false;
        }
        // Use the auth service(http) to request the information,
        // then because we subcribe to it, we got the data/error back.
        this.authService.registerUser(user).subscribe(function (data) {
            _this.showSuccess('You are registered and now can log in.');
            //alert('You are registered and now can log in');
            _this.router.navigate(['/']);
        }, function (error) {
            //alert('Something went wrong, please try again');
            _this.showError();
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUri = "http://localhost:8080";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    // POST: register
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.baseUri + '/register', user, { headers: this.headers });
    };
    // POST: Login
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.baseUri + '/authentication', user, { headers: this.headers });
    };
    // GET: profile
    // Get the user infor for Profile/Greeting after logged in
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/profile', { headers: this.headers });
    };
    // GET: dashboard
    // Fetch the task list from database to the front end
    AuthService.prototype.getDashboard = function () {
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/dashboard', { headers: this.headers });
    };
    // Store the token and the object user(object to String),
    // in the local storage 
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Load the token stored from the localstorage into authToken Var
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Not working right with Angular5, 
    // created/used signedIn() instead
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.setSignIn = function () {
        this.signedin = true;
    };
    AuthService.prototype.signedIn = function () {
        this.loadToken();
        if (this.authToken) {
            this.setSignIn();
        }
        else {
            if (this.authToken == null) {
                this.signedin = false;
            }
        }
        return this.signedin;
    };
    AuthService.prototype.logout = function () {
        this.signedin = false;
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // ***************************** add update delete tasks ****************************
    AuthService.prototype.addTask = function (task) {
        return this.http.post(this.baseUri + '/users/add', task, { headers: this.headers });
    };
    AuthService.prototype.updateTask = function (task) {
        return this.http.put(this.baseUri + '/users/update', task, { headers: this.headers });
    };
    AuthService.prototype.deleteTask = function (task) {
        var id = task._id;
        return this.http.delete(this.baseUri + '/users/delete/' + id, { headers: this.headers });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (tasks, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString === undefined) {
            return tasks;
        }
        // If there is input string to search:
        return tasks.filter(function (retVal) {
            return retVal.name.toLowerCase().includes(inputString.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        //console.log('Guard called !');
        if (this.authService.signedIn()) {
            return true;
        }
        else {
            //console.log('not allows, navigating to home page /');
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map