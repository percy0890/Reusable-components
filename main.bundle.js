webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_calls_http_calls_component__ = __webpack_require__("../../../../../src/app/http-calls/http-calls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'post',
        component: __WEBPACK_IMPORTED_MODULE_1__http_calls_http_calls_component__["a" /* HttpCallsComponent */]
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n\n<!-- <app-favorite \n  [isFavorite]=\"post.isFavorite\"\n  (change)=\"onFavoriteChanged($event)\">\n</app-favorite>\n\n<app-tile-casing></app-tile-casing>\n\n<app-panel>\n  <ng-container class=\"heading\">Heading</ng-container>\n  <div class=\"body\">\n    <h1>Body</h1>\n    <span>Content</span>\n  </div>\n</app-panel>\n\n<app-like \n  [isSelected]=\"likesData.isSelected\"\n  [likesCount]=\"likesData.likesCount\">\n</app-like> -->\n\n\n<!-- ngSwitch directive USE -->\n<!-- <ul class=\"nav nav-pills\">\n  <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n  <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n</ul>\n  \n<div [ngSwitch]=\"viewMode\">\n  <div *ngSwitchCase=\"'map'\">Map view content</div>\n  <div *ngSwitchCase=\"'list'\">List view content</div>\n  <div *ngSwitchDefault></div>\n</div> -->\n\n\n<!-- http calls -->\n<!-- <app-http-calls></app-http-calls> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { PostService } from './services/post.service';
// import { HttpClient } from '@angular/common/http';

// import { FavoriteChangedEventArgs } from './favorite/favorite.component';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_component__ = __webpack_require__("../../../../../src/app/favorite/favorite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tile_casing_tile_casing_component__ = __webpack_require__("../../../../../src/app/tile-casing/tile-casing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__title_case_pipe__ = __webpack_require__("../../../../../src/app/title-case.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__panel_panel_component__ = __webpack_require__("../../../../../src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__like_like_component__ = __webpack_require__("../../../../../src/app/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_calls_http_calls_component__ = __webpack_require__("../../../../../src/app/http-calls/http-calls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_component__["a" /* FavoriteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tile_casing_tile_casing_component__["a" /* TileCasingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__title_case_pipe__["a" /* TitleCasePipe */],
                __WEBPACK_IMPORTED_MODULE_10__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__http_calls_http_calls_component__["a" /* HttpCallsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_main_component__["a" /* MainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_post_service__["a" /* PostService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/favorite/favorite.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\n  color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorite/favorite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <h1>\n      Welcome to {{title}}\n    </h1>\n    <span class=\"glyphicon\"\n      [class.glyphicon-star-empty]=\"!isFavorite\"\n      [class.glyphicon-star]=\"isFavorite\"\n      (click)=\"onChange()\" >\n    </span>\n  </div>\n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/favorite/favorite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.onChange = function () {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('isFavorite'),
        __metadata("design:type", Boolean)
    ], FavoriteComponent.prototype, "isFavorite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('change'),
        __metadata("design:type", Object)
    ], FavoriteComponent.prototype, "change", void 0);
    FavoriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favorite',
            template: __webpack_require__("../../../../../src/app/favorite/favorite.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorite/favorite.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].Emulated
        }),
        __metadata("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-calls/http-calls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/http-calls/http-calls.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input \n    (keyup.enter)=\"createPost(title)\" #title\n    type=\"text\" class=\"form-control\">\n  <ul class=\"list-group\">\n    <li\n      *ngFor=\"let data of getData\" \n      class=\"list-group-item\">\n      <button\n        (click)=\"updatePost(data)\"\n        class=\"btn btn-default btn-sm\">\n        Update\n      </button>\n      <button\n        (click)=\"deletePost(data)\"\n        class=\"btn btn-default btn-sm\">\n        Delete\n      </button>\n      {{data.title}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/http-calls/http-calls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCallsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpCallsComponent = (function () {
    function HttpCallsComponent(service) {
        this.service = service;
    }
    HttpCallsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPosts()
            .subscribe(function (response) {
            _this.getData = response;
        }
        // (error: Response) => {
        //   if (error.status === 400) {
        //     // this.form.setErrors(error.json()
        //     alert('Bad error');
        //   } else {
        //     alert('An unexpected error occured');
        //   }
        // }
        );
    };
    HttpCallsComponent.prototype.createPost = function (input) {
        var _this = this;
        var postData = { title: input.value };
        input.value = '';
        this.service.createPost(postData)
            .subscribe(function (response) {
            _this.getData.unshift(postData);
        });
    };
    HttpCallsComponent.prototype.updatePost = function (data) {
        this.service.updatePost(data)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    HttpCallsComponent.prototype.deletePost = function (data) {
        var _this = this;
        this.service.deletePost(data.id)
            .subscribe(function (response) {
            var index = _this.getData.indexOf(data);
            _this.getData.splice(index, 1);
        }
        // (error: Response) => {
        //   if (error.status === 404) {
        //     alert('this post has already been deleted');
        //   } else {
        //     alert('An unexpected error occured');
        //   }
        // }
        );
    };
    HttpCallsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-http-calls',
            template: __webpack_require__("../../../../../src/app/http-calls/http-calls.component.html"),
            styles: [__webpack_require__("../../../../../src/app/http-calls/http-calls.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_post_service__["a" /* PostService */]])
    ], HttpCallsComponent);
    return HttpCallsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/like/like.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\n  color: #ccc;\n  cursor: pointer;\n}\n\n.active{\n  color: deeppink;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <span \n    class=\"glyphicon glyphicon-heart\" \n    [class.active]=\"isSelected\" \n    (click)=\"toggle()\">\n  </span>\n  <span>{{likesCount}}</span>\n  <div>\n    <span *ngIf=\"isSelected; then like else unlike\"></span>\n    <ng-template #like>Liked</ng-template>\n    <ng-template #unlike>Unliked</ng-template>\n  </div>\n  <!-- <div [hidden]=\"isSelected\">hidden</div> -->\n  <!-- hidden element is always there in the dom -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.toggle = function () {
        this.isSelected = !this.isSelected;
        this.likesCount += this.likesCount ? -1 : 1;
        console.log(this.isSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('isSelected'),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "isSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('likesCount'),
        __metadata("design:type", Number)
    ], LikeComponent.prototype, "likesCount", void 0);
    LikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-like',
            template: __webpack_require__("../../../../../src/app/like/like.component.html"),
            styles: [__webpack_require__("../../../../../src/app/like/like.component.css")]
        })
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-favorite \n  [isFavorite]=\"post.isFavorite\"\n  (change)=\"onFavoriteChanged($event)\">\n</app-favorite>\n\n<app-tile-casing></app-tile-casing>\n\n<app-panel>\n  <ng-container class=\"heading\">Heading</ng-container>\n  <div class=\"body\">\n    <h1>Body</h1>\n    <span>Content</span>\n  </div>\n</app-panel>\n\n<app-like \n  [isSelected]=\"likesData.isSelected\"\n  [likesCount]=\"likesData.likesCount\">\n</app-like>\n\n\n<!-- ngSwitch directive USE -->\n<ul class=\"nav nav-pills\">\n  <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n  <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n</ul>\n  \n<div [ngSwitch]=\"viewMode\">\n  <div *ngSwitchCase=\"'map'\">Map view content</div>\n  <div *ngSwitchCase=\"'list'\">List view content</div>\n  <div *ngSwitchDefault></div>\n</div>\n\n\n<!-- http calls -->\n<!-- <app-http-calls></app-http-calls> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Angular app';
        this.post = {
            isFavorite: false
        };
        this.likesData = {
            likesCount: 0,
            isSelected: false
        };
        this.viewMode = '';
    }
    MainComponent.prototype.onFavoriteChanged = function (eventArgs) {
        console.log('favorite changed', eventArgs);
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav\n  [style.backgroundColor]=\"backgroundColor\"\n  class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/main\">Followers</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/post\">Posts</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent() {
        this.backgroundColor = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].navbarBackgroundColor;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panel/panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <ng-content select=\".heading\"></ng-content>\n  </div>\n  <div class=\"panel-body\">\n      <ng-content select=\".body\"></ng-content> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-panel',
            template: __webpack_require__("../../../../../src/app/panel/panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.url, { responseType: 'json' });
    };
    PostService.prototype.createPost = function (postData) {
        return this.http.post(this.url, postData);
    };
    PostService.prototype.updatePost = function (data) {
        return this.http.patch(this.url + '/' + data.id, { isRead: true });
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/tile-casing/tile-casing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tile-casing/tile-casing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <input type=\"text\" [(ngModel)]=\"title\">\n  <br/><br/>\n  {{title | titleCase}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tile-casing/tile-casing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileCasingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TileCasingComponent = (function () {
    function TileCasingComponent() {
    }
    TileCasingComponent.prototype.ngOnInit = function () {
    };
    TileCasingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tile-casing',
            template: __webpack_require__("../../../../../src/app/tile-casing/tile-casing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tile-casing/tile-casing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TileCasingComponent);
    return TileCasingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/title-case.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitleCasePipe = (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        var words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (i > 0 && this.isPreposition(word)) {
                words[i] = word.toLowerCase();
            }
            else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    };
    TitleCasePipe.prototype.toTitleCase = function (word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    };
    TitleCasePipe.prototype.isPreposition = function (word) {
        var preposition = ['of', 'the'];
        return preposition.includes(word.toLowerCase());
    };
    TitleCasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'titleCase'
        })
    ], TitleCasePipe);
    return TitleCasePipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    navbarBackgroundColor: '#f8f8f8'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map