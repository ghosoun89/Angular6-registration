(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");









var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        // canactivate means this path if the login true you can open the profie if not
        //you can't open it
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'news',
        component: _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" >\r\n  <a class=\"navbar-brand\" href=\"#\">NG6</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSuportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link \"routerLink=\"/home\" routerLinkActive=\"active\">Home </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" routerLink=\"/news\" routerLinkActive=\"active\">News</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n    <div>\r\n      <ul class=\"navbar-nav\">\r\n          <a class=\"nav-link \"*ngIf='!_authService.loggedIn()' routerLink=\"/register\" routerLinkActive=\"active\">SignUp</a>\r\n          <a class=\"nav-link \" *ngIf='!_authService.loggedIn()' routerLink=\"/login\" routerLinkActive=\"active\">SignIn</a>\r\n        <a class=\"nav-link \" style=\"cursor: pointer\" *ngIf='_authService.loggedIn()'(click)=\"_authService.LogoutUser()\">Logout</a>\r\n      </ul>\r\n    </div>\r\n     \r\n   \r\n  \r\n</nav>\r\n<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_authService) {
        this._authService = _authService;
        this.title = 'ngApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
        // api-key = '909c338e55fe4fd78079baa827a0cb4a'
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    // check if the token is exist in the browser then return true and complete to 
    // the profile if it is not exist redirect it to the login again
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // we enject auth method for the logedin and the router for the navigation
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = 'http://localhost:3000/api/register';
        this._loginUrl = 'http://localhost:3000/api/login';
    }
    // this function to send the userdata to backend by using the  url of the backend and user info
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    // to check if the token exist in the browser then return true or false
    // and this method we will use it in the auth guard to control the navigation
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.LogoutUser = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/home']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"d-block w-100\" src=\"http://images5.fanpop.com/image/photos/28500000/Nature-s-beauty-yorkshire_rose-28521945-800-400.jpg\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"https://www.nrmsouth.org.au/wp-content/uploads/2018/08/20171212_103509-800x400.jpg\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BlackMarble20161km.jpg/800px-BlackMarble20161km.jpg\" alt=\"Third slide\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid stylish-form\">\r\n  <h2 class=\"text-center\">Welcome Back</h2>\r\n  <div class=\"row mar20\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"inner-section\">\r\n              <form >\r\n                  <div class=\"mar20 inside-form\">\r\n                      <h2 class=\"font_white text-center\">LOGIN</h2>\r\n                      <ul>\r\n                          <img class=\"profile-img\"\r\n                              src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\r\n                              alt=\"\">\r\n                      </ul>\r\n\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\"><i class=\"fa fa-envelope \"></i></span>\r\n                          <input [(ngModel)] = 'loginUserData.email' name=\"email\" type=\"email\" class=\"form-control\" name=\"text\" placeholder=\"Email...\">\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\"><i class=\"fa fa-lock \"></i></span>\r\n                          <input  [(ngModel)] = 'loginUserData.password' name=\"password\"type=\"password\" class=\"form-control\" name=\"text\" placeholder=\"Password...\">\r\n                      </div>\r\n                      <label class=\"checkbox pull-left\">\r\n                          <input type=\"checkbox\" value=\"remember-me\">\r\n                          Remember me\r\n                      </label>\r\n                      <div class=\"footer text-center\">\r\n                          <button class=\"btn btn-neutral btn-round btn-lg\" (click) = \"loginUser()\">SUBMIT</button>\r\n                      </div>\r\n                      <a href=\"#\" class=\"pull-right need-help\">Need help? </a><span class=\"clearfix\"></span>\r\n                      <a routerLink=\"/register\" class=\"text-center new-account\">Create an account </a>\r\n                  </div>\r\n\r\n              </form>\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n  <a href=\"fb.com/ervijender\">\r\n      <h2 class=\"text-center font_white\">Thank You For Visiting Our App</h2>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stylish-form {\n  background-image: url(\"https://lut.im/cOs9CbKe42/DT8DT06CeJkRsyWC.jpg\");\n  padding: 10px; }\n\n.stylish-form h2 {\n  color: #f96332;\n  margin-top: 50px; }\n\n.font_white {\n  color: #fff !important; }\n\n.mar20 {\n  margin: 20px; }\n\n.inner-section {\n  background-color: #f96332;\n  width: 350px;\n  display: block;\n  margin: 0 auto; }\n\n.inside-form {\n  border-radius: 8px;\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.inside-form h2 {\n  font-weight: 700; }\n\n.inside-form ul {\n  list-style-type: none;\n  text-align: center;\n  margin-top: 30px; }\n\n.inside-form ul > li {\n  display: inline-block; }\n\n.inside-form ul > li > i {\n  margin-top: 18px; }\n\n.icon-holder {\n  background: #fff;\n  border-radius: 50%;\n  vertical-align: middle;\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  margin-right: 20px; }\n\n.dsp-flex {\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  /* TWEENER - IE 10 */\n  /* NEW - Chrome */\n  display: flex;\n  /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center; }\n\n.input-group, .form-group {\n  margin-bottom: 10px; }\n\n.input-group-addon {\n  background-color: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: #FFFFFF;\n  border-radius: 25px; }\n\n.form-control, .form-control:focus, .form-control:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #FFFFFF;\n  border-radius: 25px;\n  border: none;\n  font-size: 14px; }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff !important; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff !important; }\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff !important; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff !important; }\n\n.footer {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\ninput::-webkit-input-placeholder {\n  color: #fff !important; }\n\ninput::-ms-input-placeholder {\n  color: #fff !important; }\n\ninput::placeholder {\n  color: #fff !important; }\n\n.btn-lg {\n  font-size: 1em;\n  border-radius: 0.25rem;\n  padding: 15px 48px; }\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px !important;\n  padding: 11px 23px; }\n\n.btn-neutral, .btn-neutral:focus, .btn-neutral:hover {\n  background-color: #FFFFFF;\n  color: #f96332; }\n\n.profile-img {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxHaG9zb3VuXFxEZXNrdG9wXFxBbmd1bGFyNi1yZWdpc3RyYXRpb25cXG5nQXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSx1RUFBc0U7RUFDdEUsYUFBWSxFQUFBOztBQUVkO0VBQ0UsY0FBYTtFQUNiLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0Usc0JBQXFCLEVBQUE7O0FBRXZCO0VBRUUsWUFBVyxFQUFBOztBQUViO0VBQ0UseUJBQXdCO0VBQ3hCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsY0FBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFBQTs7QUFFakI7RUFDRSxxQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUN3QiwrQkFBQTtFQUNILCtDQUFBO0VBQ0csb0JBQUE7RUFDQyxpQkFBQTtFQUN2QixhQUFhO0VBQUUsd0NBQUE7RUFDZixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUNGLEVBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBa0IsRUFBQTs7QUFFcEI7RUFFRSwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBYyxFQUFBOztBQUVoQjtFQUE4Qix3QkFBQTtFQUM1QixzQkFBc0IsRUFBQTs7QUFFeEI7RUFBcUIsZ0JBQUE7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQXlCLFdBQUE7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQW9CLGdCQUFBO0VBQ2xCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2hCO0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN0eWxpc2gtZm9ybSBcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2x1dC5pbS9jT3M5Q2JLZTQyL0RUOERUMDZDZUprUnN5V0MuanBnJyk7IFxyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4uc3R5bGlzaC1mb3JtIGgyIHtcclxuICBjb2xvcjojZjk2MzMyO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBcclxufVxyXG4uZm9udF93aGl0ZSB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXIyMCBcclxue1xyXG4gIG1hcmdpbjoyMHB4O1xyXG59XHJcbi5pbm5lci1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmOTYzMzI7XHJcbiAgd2lkdGg6MzUwcHg7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcbi5pbnNpZGUtZm9ybXtcclxuICBib3JkZXItcmFkaXVzOjhweDtcclxuICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjMwcHg7XHJcbn1cclxuLmluc2lkZS1mb3JtIGgyIHtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbn1cclxuLmluc2lkZS1mb3JtIHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjMwcHg7XHJcbn1cclxuLmluc2lkZS1mb3JtIHVsID5saSB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuLmluc2lkZS1mb3JtIHVsID5saSA+IGkge1xyXG4gIG1hcmdpbi10b3A6MThweDtcclxufVxyXG4uaWNvbi1ob2xkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kc3AtZmxleCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7IC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXHJcbiAgZGlzcGxheTogLW1vei1ib3g7IC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IC8qIE5FVyAtIENocm9tZSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7IC8qIE5FVywgU3BlYyAtIE9wZXJhIDEyLjEsIEZpcmVmb3ggMjArICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG4uaW5wdXQtZ3JvdXAsIC5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCwuZm9ybS1jb250cm9sOmZvY3VzLC5mb3JtLWNvbnRyb2w6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxuICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tbGcge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogMTVweCA0OHB4O1xyXG59XHJcbi5idG4tcm91bmQge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMXB4IDIzcHg7XHJcbn1cclxuLmJ0bi1uZXV0cmFsLC5idG4tbmV1dHJhbDpmb2N1cywuYnRuLW5ldXRyYWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgY29sb3I6ICNmOTYzMzI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZ1xyXG57XHJcbndpZHRoOiA5NnB4O1xyXG5oZWlnaHQ6IDk2cHg7XHJcbm1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG4tbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.loginUserData)
            .subscribe(
        // save the token in the browser using localstorage
        function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/profile']);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor= \"let post of posts\">\r\n<h3>{{new.status}}</h3>\r\n<p>{{new.articles}}</p>\r\n</div> -->\r\n<ul class=\"list-group\" >\r\n  <li class=\"list-group-item\" \r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[0].author}}\r\n  </li>\r\n\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[0].content}}\r\n  </li>\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[0].description}}\r\n  </li>\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[0].publishedAt}}\r\n  </li>\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[0].source.id}}\r\n  </li>\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[1].content}}\r\n  </li>\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[1].description}}\r\n  </li>\r\n  <li class=\"list-group-item\"\r\n  *ngFor=\"let post of posts\">\r\n \r\n \r\n{{post.articles[1].publishedAt}}\r\n  </li>\r\n \r\n \r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  background-color: aquamarine; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXEdob3NvdW5cXERlc2t0b3BcXEFuZ3VsYXI2LXJlZ2lzdHJhdGlvblxcbmdBcHAvc3JjXFxhcHBcXG5ld3NcXG5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsComponent = /** @class */ (function () {
    // constructor(private data : DataService) { }
    function NewsComponent(http) {
        var _this = this;
        this.url = 'https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=909c338e55fe4fd78079baa827a0cb4a';
        http.get(this.url)
            .subscribe(function (Response) {
            console.log('bbbbb', Response);
            _this.posts = Response;
            // let all = Object.keys(this.posts)
            // let newarr = [];
            // for( let post of all){
            //   newarr.push(all[post])
            // }
            //  this.news= newarr
            //  console.log(this.news)
            _this.posts = Array.of(_this.posts);
        }, function (err) { return console.error(err); }, function () { return console.log("get news", _this.posts); });
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.posts = Response;
        //   this.data.getNews().subscribe(
        //     data => {this.posts = data
        //   });
        //   console.log('nnnnnn',this.posts)
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \r\n  <div class=\"row\">\r\n      <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">  <h4 >User Profile</h4></div>\r\n       <div class=\"panel-body\">\r\n      <div class=\"col-md-4 col-xs-12 col-sm-6 col-lg-4\">\r\n       <img alt=\"User Pic\" src=\"https://media.licdn.com/dms/image/C4D03AQFrzvcwPJ5cYw/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=PGcp9iWow32JsKdUf7a8hsj0mu-185cQBfmPFQAq0i4\" id=\"profile-image1\" class=\"img-circle img-responsive\"> \r\n     \r\n \r\n      </div>\r\n      <div class=\"col-md-8 col-xs-12 col-sm-6 col-lg-8\" >\r\n          <div class=\"container\" >\r\n            <h2>Yazeed Hammad</h2>\r\n            <p>an   <b> Full Stack Software Engineer</b></p>\r\n          \r\n           \r\n          </div>\r\n           <hr>\r\n          <ul class=\"container details\" >\r\n            <li><p><span class=\"glyphicon glyphicon-user one\" style=\"width:50px;\"></span>i.rudberg</p></li>\r\n            <li><p><span class=\"glyphicon glyphicon-envelope one\" style=\"width:50px;\"></span>yazeedhammad91@email.com</p></li>\r\n          </ul>\r\n          <hr>\r\n          <div class=\"col-sm-5 col-xs-6 tital \" >Date Of Joining: 15 Jun 2016</div>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center; }\n\n.title {\n  color: grey;\n  font-size: 18px; }\n\nbutton {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px; }\n\na {\n  text-decoration: none;\n  font-size: 22px;\n  color: black; }\n\nbutton:hover, a:hover {\n  opacity: 0.7; }\n\nbody {\n  background-color: aqua; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXEdob3NvdW5cXERlc2t0b3BcXEFuZ3VsYXI2LXJlZ2lzdHJhdGlvblxcbmdBcHAvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciwgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid stylish-form\">\r\n  <h2 class=\"text-center\">We hope you will Enjoy</h2>\r\n  <div class=\"row mar20\" >\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"inner-section\">\r\n        <form >\r\n          <div class=\"mar20 inside-form\">\r\n            <h2 class=\"font_white text-center\">SIGN UP</h2>\r\n            <ul>\r\n              <li class=\"icon-holder dsp-flex\">\r\n                <i class=\"fa fa-facebook \"></i>\r\n              </li>\r\n              <li class=\"icon-holder dsp-flex\">\r\n                <i class=\"fa fa-twitter \"></i>\r\n              </li>\r\n              <li class=\"icon-holder dsp-flex\">\r\n                <i class=\"fa fa-instagram \"></i>\r\n              </li>\r\n            </ul>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-pencil \"></i></span>\r\n              <input [(ngModel)]='registerUserData.firstName' name= 'firstName'type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"First Name...\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-pencil \"></i></span>\r\n                <input  [(ngModel)]='registerUserData.lastName' name= 'lastName'type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Last Name...\">\r\n              </div>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-envelope \"></i></span>\r\n              <input [(ngModel)]='registerUserData.email' name= 'email' type=\"email\" class=\"form-control\" name=\"text\" placeholder=\"Email...\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock \"></i></span>\r\n              <input [(ngModel)]='registerUserData.password' name= 'password'type=\"password\" class=\"form-control\" name=\"text\" placeholder=\"Password...\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-lock \"></i></span>\r\n                <input [(ngModel)]='registerUserData.confPass' name= 'confPass'type=\"password\" class=\"form-control\" name=\"text\" placeholder=\"Confirm Password...\">\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-cloud-upload \"></i></span>\r\n                  <input [(ngModel)]='registerUserData.URL' name= 'URL' type=\"text\" class=\"form-control\" placeholder=\"URL...\">\r\n                </div>\r\n            <div class=\"footer text-center\">\r\n              <button  class=\"btn btn-neutral btn-round btn-lg\" (click) = \"register()\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stylish-form {\n  background-image: url(\"https://lut.im/cOs9CbKe42/DT8DT06CeJkRsyWC.jpg\");\n  padding: 10px; }\n\n.stylish-form h2 {\n  color: #f96332;\n  margin-top: 50px; }\n\n.font_white {\n  color: #fff !important; }\n\n.mar20 {\n  margin: 20px; }\n\n.inner-section {\n  background-color: #f96332;\n  width: 350px;\n  display: block;\n  margin: 0 auto; }\n\n.inside-form {\n  border-radius: 8px;\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.inside-form h2 {\n  font-weight: 700; }\n\n.inside-form ul {\n  list-style-type: none;\n  text-align: center;\n  margin-top: 30px; }\n\n.inside-form ul > li {\n  display: inline-block; }\n\n.inside-form ul > li > i {\n  margin-top: 18px; }\n\n.icon-holder {\n  background: #fff;\n  border-radius: 50%;\n  vertical-align: middle;\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  margin-right: 20px; }\n\n.dsp-flex {\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  /* TWEENER - IE 10 */\n  /* NEW - Chrome */\n  display: flex;\n  /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center; }\n\n.input-group, .form-group {\n  margin-bottom: 10px; }\n\n.input-group-addon {\n  background-color: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: #FFFFFF;\n  border-radius: 25px; }\n\n.form-control, .form-control:focus, .form-control:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #FFFFFF;\n  border-radius: 25px;\n  border: none;\n  font-size: 14px; }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff !important; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff !important; }\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff !important; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff !important; }\n\n.footer {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\ninput::-webkit-input-placeholder {\n  color: #fff !important; }\n\ninput::-ms-input-placeholder {\n  color: #fff !important; }\n\ninput::placeholder {\n  color: #fff !important; }\n\n.btn-lg {\n  font-size: 1em;\n  border-radius: 0.25rem;\n  padding: 15px 48px; }\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px !important;\n  padding: 11px 23px; }\n\n.btn-neutral, .btn-neutral:focus, .btn-neutral:hover {\n  background-color: #FFFFFF;\n  color: #f96332; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxHaG9zb3VuXFxEZXNrdG9wXFxBbmd1bGFyNi1yZWdpc3RyYXRpb25cXG5nQXBwL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSx1RUFBc0U7RUFDdEUsYUFBWSxFQUFBOztBQUVkO0VBQ0UsY0FBYTtFQUNiLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0Usc0JBQXFCLEVBQUE7O0FBRXZCO0VBRUUsWUFBVyxFQUFBOztBQUViO0VBQ0UseUJBQXdCO0VBQ3hCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsY0FBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFBQTs7QUFFakI7RUFDRSxxQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUN3QiwrQkFBQTtFQUNILCtDQUFBO0VBQ0csb0JBQUE7RUFDQyxpQkFBQTtFQUN2QixhQUFhO0VBQUUsd0NBQUE7RUFDZixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUNGLEVBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBa0IsRUFBQTs7QUFFcEI7RUFFRSwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBYyxFQUFBOztBQUVoQjtFQUE4Qix3QkFBQTtFQUM1QixzQkFBc0IsRUFBQTs7QUFFeEI7RUFBcUIsZ0JBQUE7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQXlCLFdBQUE7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQW9CLGdCQUFBO0VBQ2xCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRHhCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsaXNoLWZvcm0gXHJcbiAgICB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2x1dC5pbS9jT3M5Q2JLZTQyL0RUOERUMDZDZUprUnN5V0MuanBnJyk7IFxyXG4gICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3R5bGlzaC1mb3JtIGgyIHtcclxuICAgICAgY29sb3I6I2Y5NjMzMjtcclxuICAgICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5mb250X3doaXRlIHtcclxuICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hcjIwIFxyXG4gICAge1xyXG4gICAgICBtYXJnaW46MjBweDtcclxuICAgIH1cclxuICAgIC5pbm5lci1zZWN0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjk2MzMyO1xyXG4gICAgICB3aWR0aDozNTBweDtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuICAgIC5pbnNpZGUtZm9ybXtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5zaWRlLWZvcm0gaDIge1xyXG4gICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICB9XHJcbiAgICAuaW5zaWRlLWZvcm0gdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIH1cclxuICAgIC5pbnNpZGUtZm9ybSB1bCA+bGkge1xyXG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5pbnNpZGUtZm9ybSB1bCA+bGkgPiBpIHtcclxuICAgICAgbWFyZ2luLXRvcDoxOHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24taG9sZGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZHNwLWZsZXgge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cclxuICAgICAgZGlzcGxheTogLW1vei1ib3g7IC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogTkVXIC0gQ2hyb21lICovXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIE5FVywgU3BlYyAtIE9wZXJhIDEyLjEsIEZpcmVmb3ggMjArICovXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIH1cclxuICAgIC5pbnB1dC1ncm91cCwgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9sLC5mb3JtLWNvbnRyb2w6Zm9jdXMsLmZvcm0tY29udHJvbDpob3ZlclxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1sZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXJvdW5kIHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMTFweCAyM3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1uZXV0cmFsLC5idG4tbmV1dHJhbDpmb2N1cywuYnRuLW5ldXRyYWw6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // we call the auth serveice to send the data through it to the DB
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this._auth.registerUser(this.registerUserData)
            .subscribe(
        // save the token in the browser
        function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/profile']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ghosoun\Desktop\Angular6-registration\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map