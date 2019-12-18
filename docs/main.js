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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _intro_view_intro_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro-view/intro-view.component */ "./src/app/intro-view/intro-view.component.ts");
/* harmony import */ var _engine_view_engine_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine-view/engine-view.component */ "./src/app/engine-view/engine-view.component.ts");
/* harmony import */ var _info_view_info_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-view/info-view.component */ "./src/app/info-view/info-view.component.ts");






var routes = [
    { path: '', redirectTo: '/itguy', pathMatch: 'full' },
    { path: 'itguy', component: _intro_view_intro_view_component__WEBPACK_IMPORTED_MODULE_3__["IntroViewComponent"] },
    { path: 'itguy/engineView', component: _engine_view_engine_view_component__WEBPACK_IMPORTED_MODULE_4__["EngineViewComponent"] },
    { path: 'itguy/informationView', component: _info_view_info_view_component__WEBPACK_IMPORTED_MODULE_5__["InfoViewComponent"] }
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

var routingComponents = [
    _intro_view_intro_view_component__WEBPACK_IMPORTED_MODULE_3__["IntroViewComponent"],
    _engine_view_engine_view_component__WEBPACK_IMPORTED_MODULE_4__["EngineViewComponent"],
    _info_view_info_view_component__WEBPACK_IMPORTED_MODULE_5__["InfoViewComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_view_intro_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro-view/intro-view.component */ "./src/app/intro-view/intro-view.component.ts");
/* harmony import */ var _engine_view_components_person_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine-view/components/person/person.component */ "./src/app/engine-view/components/person/person.component.ts");
/* harmony import */ var _engine_view_components_reception_reception_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine-view/components/reception/reception.component */ "./src/app/engine-view/components/reception/reception.component.ts");
/* harmony import */ var _engine_view_components_work_table_work_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine-view/components/work-table/work-table.component */ "./src/app/engine-view/components/work-table/work-table.component.ts");
/* harmony import */ var _engine_view_components_boss_table_boss_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./engine-view/components/boss-table/boss-table.component */ "./src/app/engine-view/components/boss-table/boss-table.component.ts");
/* harmony import */ var _engine_view_computer_it_system_view_error_view_error_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./engine-view/computer/it-system-view/error-view/error-view.component */ "./src/app/engine-view/computer/it-system-view/error-view/error-view.component.ts");
/* harmony import */ var _engine_view_computer_it_system_view_it_system_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engine-view/computer/it-system-view/it-system-view.component */ "./src/app/engine-view/computer/it-system-view/it-system-view.component.ts");
/* harmony import */ var _engine_view_computer_computer_desktop_view_computer_desktop_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./engine-view/computer/computer-desktop-view/computer-desktop-view.component */ "./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.ts");
/* harmony import */ var _engine_view_computer_debugging_view_debugging_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./engine-view/computer/debugging-view/debugging-view.component */ "./src/app/engine-view/computer/debugging-view/debugging-view.component.ts");
/* harmony import */ var _engine_view_components_it_table_it_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./engine-view/components/it-table/it-table.component */ "./src/app/engine-view/components/it-table/it-table.component.ts");
/* harmony import */ var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./game-over/game-over.component */ "./src/app/game-over/game-over.component.ts");
/* harmony import */ var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./start-game/start-game.component */ "./src/app/start-game/start-game.component.ts");
/* harmony import */ var _info_view_info_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./info-view/info-view.component */ "./src/app/info-view/info-view.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
                _intro_view_intro_view_component__WEBPACK_IMPORTED_MODULE_7__["IntroViewComponent"],
                _engine_view_components_person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"],
                _engine_view_components_reception_reception_component__WEBPACK_IMPORTED_MODULE_9__["ReceptionComponent"],
                _engine_view_components_work_table_work_table_component__WEBPACK_IMPORTED_MODULE_10__["WorkTableComponent"],
                _engine_view_components_boss_table_boss_table_component__WEBPACK_IMPORTED_MODULE_11__["BossTableComponent"],
                _engine_view_computer_it_system_view_error_view_error_view_component__WEBPACK_IMPORTED_MODULE_12__["ErrorViewComponent"],
                _engine_view_computer_it_system_view_it_system_view_component__WEBPACK_IMPORTED_MODULE_13__["ItSystemViewComponent"],
                _engine_view_computer_computer_desktop_view_computer_desktop_view_component__WEBPACK_IMPORTED_MODULE_14__["ComputerDesktopViewComponent"],
                _engine_view_computer_debugging_view_debugging_view_component__WEBPACK_IMPORTED_MODULE_15__["DebuggingViewComponent"],
                _engine_view_components_it_table_it_table_component__WEBPACK_IMPORTED_MODULE_16__["ItTableComponent"],
                _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_17__["GameOverComponent"],
                _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_18__["StartGameComponent"],
                _info_view_info_view_component__WEBPACK_IMPORTED_MODULE_19__["InfoViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/engine-view/components/boss-table/boss-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/engine-view/components/boss-table/boss-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: BossTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BossTableComponent", function() { return BossTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BossTableComponent = /** @class */ (function () {
    function BossTableComponent() {
    }
    BossTableComponent.prototype.ngOnInit = function () {
    };
    BossTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boss-table',
            template: "\n    <div class=\"boss-desk component animated 1 bounceInDown\">\n      <div class=\"monitor\"></div>\n      <div class=\"hold-stick\"></div>\n      <div class=\"person\">\n        <div class=\"head\"></div>\n        <div class=\"body\"></div>\n      </div>\n      <div class=\"top-part\"></div>\n      <div class=\"leg-part\"></div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./boss-table.less */ "./src/app/engine-view/components/boss-table/boss-table.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BossTableComponent);
    return BossTableComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/components/boss-table/boss-table.less":
/*!*******************************************************************!*\
  !*** ./src/app/engine-view/components/boss-table/boss-table.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boss-desk {\n  width: 150px;\n  height: 50px;\n  z-index: 3;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  bottom: 5px;\n}\n.boss-desk .monitor {\n  width: 40%;\n  height: 60%;\n  border: 1px solid black;\n  position: absolute;\n  top: -25px;\n  left: 13px;\n  background: white;\n  z-index: 5;\n}\n.boss-desk .hold-stick {\n  width: 10px;\n  height: 10px;\n  margin-left: 25%;\n  border: 1px solid black;\n  background: white;\n  z-index: 5;\n}\n.boss-desk .top-part {\n  flex: 1;\n  width: 100%;\n  background-color: #8b5a2b;\n  border: 1px solid black;\n  z-index: 5;\n}\n.boss-desk .leg-part {\n  flex: 5;\n  width: 100%;\n  padding: 0 5px;\n  background-color: #8b5a2b;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  z-index: 5;\n}\n.boss-desk .person {\n  width: 40px;\n  height: 80px;\n}\n.boss-desk .person .body {\n  background: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy9ib3NzLXRhYmxlL2Jvc3MtdGFibGUubGVzcyIsInNyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy9ib3NzLXRhYmxlL2Jvc3MtdGFibGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEUkE7RUFVSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEbEJBO0VBcUJJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0FKO0FEMUJBO0VBOEJJLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNESjtBRGpDQTtFQXNDSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDRko7QUQxQ0E7RUFnREksV0FBQTtFQUNBLFlBQUE7QUNISjtBRDlDQTtFQW9ETSxpQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy9ib3NzLXRhYmxlL2Jvc3MtdGFibGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3NzLWRlc2sge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3R0b206IDVweDtcblxuICAubW9uaXRvciB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAxM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAuaG9sZC1zdGljayB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC50b3AtcGFydCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1YTJiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAubGVnLXBhcnQge1xuICAgIGZsZXg6IDU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWEyYjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAucGVyc29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG5cbiAgICAuYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB9XG4gIH1cbn1cbiIsIi5ib3NzLWRlc2sge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3R0b206IDVweDtcbn1cbi5ib3NzLWRlc2sgLm1vbml0b3Ige1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogMTNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG59XG4uYm9zcy1kZXNrIC5ob2xkLXN0aWNrIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiA1O1xufVxuLmJvc3MtZGVzayAudG9wLXBhcnQge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWEyYjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHotaW5kZXg6IDU7XG59XG4uYm9zcy1kZXNrIC5sZWctcGFydCB7XG4gIGZsZXg6IDU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWEyYjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIHotaW5kZXg6IDU7XG59XG4uYm9zcy1kZXNrIC5wZXJzb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmJvc3MtZGVzayAucGVyc29uIC5ib2R5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/engine-view/components/it-table/it-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/engine-view/components/it-table/it-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: ItTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItTableComponent", function() { return ItTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItTableComponent = /** @class */ (function () {
    function ItTableComponent() {
    }
    ItTableComponent.prototype.ngOnInit = function () {
    };
    ItTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-it-table',
            template: "\n    <div class=\"it-desk component animated 1 bounceInDown\">\n      <div class=\"monitors\">\n        <div class=\"pc\">\n          <div class=\"monitor\"></div>\n          <div class=\"hold-stick\"></div>\n        </div>\n        <div class=\"pc\">\n          <div class=\"monitor\"></div>\n          <div class=\"hold-stick\"></div>\n        </div>\n      </div>\n      <div class=\"top-part\"></div>\n      <div class=\"leg-part\"></div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./it-table.less */ "./src/app/engine-view/components/it-table/it-table.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItTableComponent);
    return ItTableComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/components/it-table/it-table.less":
/*!***************************************************************!*\
  !*** ./src/app/engine-view/components/it-table/it-table.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".it-desk {\n  width: 150px;\n  height: 50px;\n  z-index: 3;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  bottom: 5px;\n}\n.it-desk .monitors {\n  display: flex;\n  flex-direction: row;\n  width: 70%;\n}\n.it-desk .monitors .pc {\n  flex: 1;\n}\n.it-desk .monitor {\n  width: 30%;\n  height: 60%;\n  border: 1px solid black;\n  position: absolute;\n  top: -25px;\n  background: black;\n  z-index: 5;\n}\n.it-desk .hold-stick {\n  width: 10px;\n  height: 10px;\n  margin-left: 30%;\n  border: 1px solid black;\n  background: black;\n  z-index: 5;\n}\n.it-desk .top-part {\n  flex: 1;\n  width: 100%;\n  background-color: dimgray;\n  border: 1px solid black;\n  z-index: 5;\n}\n.it-desk .leg-part {\n  flex: 5;\n  width: 100%;\n  padding: 0 5px;\n  background-color: dimgray;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  z-index: 5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy9pdC10YWJsZS9pdC10YWJsZS5sZXNzIiwic3JjL2FwcC9lbmdpbmUtdmlldy9jb21wb25lbnRzL2l0LXRhYmxlL2l0LXRhYmxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDRjtBRFJBO0VBVUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEYkE7RUFlTSxPQUFBO0FDQ047QURoQkE7RUFvQkksVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKO0FEekJBO0VBOEJJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FEakNBO0VBdUNJLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNISjtBRHhDQTtFQStDSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXBvbmVudHMvaXQtdGFibGUvaXQtdGFibGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdC1kZXNrIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm90dG9tOiA1cHg7XG5cbiAgLm1vbml0b3JzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDcwJTtcblxuICAgIC5wYyB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5tb25pdG9yIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAuaG9sZC1zdGljayB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC50b3AtcGFydCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAubGVnLXBhcnQge1xuICAgIGZsZXg6IDU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG4iLCIuaXQtZGVzayB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvdHRvbTogNXB4O1xufVxuLml0LWRlc2sgLm1vbml0b3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDcwJTtcbn1cbi5pdC1kZXNrIC5tb25pdG9ycyAucGMge1xuICBmbGV4OiAxO1xufVxuLml0LWRlc2sgLm1vbml0b3Ige1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHotaW5kZXg6IDU7XG59XG4uaXQtZGVzayAuaG9sZC1zdGljayB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgei1pbmRleDogNTtcbn1cbi5pdC1kZXNrIC50b3AtcGFydCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogNTtcbn1cbi5pdC1kZXNrIC5sZWctcGFydCB7XG4gIGZsZXg6IDU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogNTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/engine-view/components/person/person-style.less":
/*!*****************************************************************!*\
  !*** ./src/app/engine-view/components/person/person-style.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".person {\n  width: 40px;\n  height: 100px;\n}\n.person .body {\n  width: 100%;\n  height: 70px;\n  border-radius: 5px;\n}\n.person .head,\n.person .body {\n  background-color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy9wZXJzb24vcGVyc29uLXN0eWxlLmxlc3MiLCJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi1zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjtBREhBO0VBS0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEUkE7O0VBWUksdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi1zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuXG4gIC5ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgLmhlYWQsXG4gIC5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxufVxuIiwiLnBlcnNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLnBlcnNvbiAuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wZXJzb24gLmhlYWQsXG4ucGVyc29uIC5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/engine-view/components/person/person.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/engine-view/components/person/person.component.ts ***!
  \*******************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.alreadyMoved = '';
        this.personMovedToElevvator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
        console.log("Person", this.isMoved);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonComponent.prototype, "isMoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PersonComponent.prototype, "personMovedToElevvator", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: "\n    <div class=\"person\" [@moveOnFloor]=\"isMoved\">\n      <div class=\"head\"></div>\n      <div class=\"body\"></div>\n    </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('moveOnFloor', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('moved', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ right: '-20%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('notmoved', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ right: '35%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('notmoved => moved', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.5s")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('moved => notmoved', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.5s 1.8s"))
                ])
            ],
            styles: [__webpack_require__(/*! ./person-style.less */ "./src/app/engine-view/components/person/person-style.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/components/reception/reception-style.less":
/*!***********************************************************************!*\
  !*** ./src/app/engine-view/components/reception/reception-style.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reception {\n  width: 150px;\n  height: 50px;\n  z-index: 3;\n  position: relative;\n  bottom: 5px;\n  display: flex;\n}\n.reception .monitor {\n  width: 30%;\n  height: 60%;\n  border: 1px solid black;\n  position: absolute;\n  top: -30px;\n  left: 13px;\n  background: dimgray;\n  z-index: 5;\n}\n.reception .stripe-part {\n  width: auto;\n  flex: 1;\n  z-index: 5;\n  background: brown;\n}\n.reception .stripe-part div {\n  width: 90%;\n  height: 1px;\n  border: 1px solid silver;\n  margin-top: 10px;\n}\n.reception .center-part {\n  width: auto;\n  flex: 1;\n  z-index: 5;\n  background: brown;\n}\n.reception .person {\n  height: 85px;\n}\n.reception .person .body {\n  width: 100%;\n  height: 50px;\n  background: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy9yZWNlcHRpb24vcmVjZXB0aW9uLXN0eWxlLmxlc3MiLCJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXBvbmVudHMvcmVjZXB0aW9uL3JlY2VwdGlvbi1zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEUEE7RUFTSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEakJBO0VBb0JJLFdBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQUo7QUR2QkE7RUEwQk0sVUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQU47QUQ3QkE7RUFrQ0ksV0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRG5DQTtFQXlDSSxZQUFBO0FDSEo7QUR0Q0E7RUE0Q00sV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9lbmdpbmUtdmlldy9jb21wb25lbnRzL3JlY2VwdGlvbi9yZWNlcHRpb24tc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNlcHRpb24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcblxuICAubW9uaXRvciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiAxM3B4O1xuICAgIGJhY2tncm91bmQ6IGRpbWdyYXk7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC5zdHJpcGUtcGFydCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZmxleDogMTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJhY2tncm91bmQ6IGJyb3duO1xuXG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNlbnRlci1wYXJ0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmbGV4OiAxO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYmFja2dyb3VuZDogYnJvd247XG4gIH1cblxuICAucGVyc29uIHtcbiAgICBoZWlnaHQ6IDg1cHg7XG5cbiAgICAuYm9keSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9XG4gIH1cbn1cbiIsIi5yZWNlcHRpb24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZWNlcHRpb24gLm1vbml0b3Ige1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgbGVmdDogMTNweDtcbiAgYmFja2dyb3VuZDogZGltZ3JheTtcbiAgei1pbmRleDogNTtcbn1cbi5yZWNlcHRpb24gLnN0cmlwZS1wYXJ0IHtcbiAgd2lkdGg6IGF1dG87XG4gIGZsZXg6IDE7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6IGJyb3duO1xufVxuLnJlY2VwdGlvbiAuc3RyaXBlLXBhcnQgZGl2IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5yZWNlcHRpb24gLmNlbnRlci1wYXJ0IHtcbiAgd2lkdGg6IGF1dG87XG4gIGZsZXg6IDE7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6IGJyb3duO1xufVxuLnJlY2VwdGlvbiAucGVyc29uIHtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuLnJlY2VwdGlvbiAucGVyc29uIC5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/engine-view/components/reception/reception.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/engine-view/components/reception/reception.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionComponent", function() { return ReceptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReceptionComponent = /** @class */ (function () {
    function ReceptionComponent() {
    }
    ReceptionComponent.prototype.ngOnInit = function () { };
    ReceptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reception',
            template: "\n    <div class=\"reception component animated 1 bounceInDown\">\n      <div class=\"monitor\"></div>\n      <div class=\"person\">\n        <div class=\"head\"></div>\n        <div class=\"body\"></div>\n      </div>\n      <div class=\"stripe-part\"><div></div><div></div><div></div></div>\n      <div class=\"center-part\"></div>\n      <div class=\"stripe-part\"><div></div><div></div><div></div></div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./reception-style.less */ "./src/app/engine-view/components/reception/reception-style.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReceptionComponent);
    return ReceptionComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/components/work-table/work-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/engine-view/components/work-table/work-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: WorkTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTableComponent", function() { return WorkTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkTableComponent = /** @class */ (function () {
    function WorkTableComponent() {
    }
    WorkTableComponent.prototype.ngOnInit = function () {
    };
    WorkTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-table',
            template: "\n  <div class=\"work-desk component animated 1 bounceInDown\">\n    <div class=\"monitor\"></div>\n    <div class=\"hold-stick\"></div>\n    <div class=\"person\">\n      <div class=\"head\"></div>\n      <div class=\"body\"></div>\n    </div>\n    <div class=\"top-part\"></div>\n    <div class=\"leg-part\"></div>\n  </div>\n  ",
            styles: [__webpack_require__(/*! ./work-table.less */ "./src/app/engine-view/components/work-table/work-table.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkTableComponent);
    return WorkTableComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/components/work-table/work-table.less":
/*!*******************************************************************!*\
  !*** ./src/app/engine-view/components/work-table/work-table.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work-desk {\n  width: 150px;\n  height: 50px;\n  z-index: 3;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  bottom: 5px;\n  padding: 0 5px;\n}\n.work-desk .monitor {\n  width: 30%;\n  height: 60%;\n  border: 1px solid black;\n  position: absolute;\n  top: -25px;\n  left: 13px;\n  background: dimgray;\n  z-index: 5;\n}\n.work-desk .hold-stick {\n  width: 5px;\n  height: 10px;\n  margin-left: 20%;\n  border: 2px solid black;\n  background: dimgray;\n  z-index: 5;\n}\n.work-desk .top-part {\n  flex: 1;\n  width: 100%;\n  background-color: white;\n  border: 1px solid black;\n  z-index: 5;\n}\n.work-desk .leg-part {\n  flex: 5;\n  width: 100%;\n  border-left: 5px solid black;\n  border-right: 5px solid black;\n  z-index: 5;\n}\n.work-desk .person .body {\n  background: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy93b3JrLXRhYmxlL3dvcmstdGFibGUubGVzcyIsInNyYy9hcHAvZW5naW5lLXZpZXcvY29tcG9uZW50cy93b3JrLXRhYmxlL3dvcmstdGFibGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjtBRFRBO0VBV0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDSjtBRG5CQTtFQXNCSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNBSjtBRDNCQTtFQStCSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDREo7QURsQ0E7RUF1Q0ksT0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FEekNBO0VBK0NJLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9lbmdpbmUtdmlldy9jb21wb25lbnRzL3dvcmstdGFibGUvd29yay10YWJsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmstZGVzayB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcblxuICAubW9uaXRvciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAxM3B4O1xuICAgIGJhY2tncm91bmQ6IGRpbWdyYXk7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC5ob2xkLXN0aWNrIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGRpbWdyYXk7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC50b3AtcGFydCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLmxlZy1wYXJ0IHtcbiAgICBmbGV4OiA1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmxhY2s7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC5wZXJzb24gLmJvZHkge1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICB9XG59XG4iLCIud29yay1kZXNrIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLndvcmstZGVzayAubW9uaXRvciB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAxM3B4O1xuICBiYWNrZ3JvdW5kOiBkaW1ncmF5O1xuICB6LWluZGV4OiA1O1xufVxuLndvcmstZGVzayAuaG9sZC1zdGljayB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IGRpbWdyYXk7XG4gIHotaW5kZXg6IDU7XG59XG4ud29yay1kZXNrIC50b3AtcGFydCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHotaW5kZXg6IDU7XG59XG4ud29yay1kZXNrIC5sZWctcGFydCB7XG4gIGZsZXg6IDU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogNTtcbn1cbi53b3JrLWRlc2sgLnBlcnNvbiAuYm9keSB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pc-door-window animated 1 zoomIn\" *ngIf='showComputer !== \"\"'>\n  <div class=\"title title-name\">\n    <h2>{{showComputer}}</h2>\n    <img class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"closeComputerWindow()\" alt=\"cancelIcon\">\n  </div>\n  <div class=\"mainWindow\">\n    <div class=\"window-bar\" (click)=\"closeMenu()\">\n      <div class=\"my-program\" *ngIf=\"!isItView\">\n        <app-debugging-view (closedProgramDEB)=\"receivedClosedProgramDEB($event)\" (errorResolved)=\"receivedErrStatus($event)\"\n        [showDEBProgram]=\"showDEBProgram\"></app-debugging-view>\n      </div>\n      <div class=\"my-program\" *ngIf=\"isItView\">\n        <app-it-system-view (closedProgramDEV)=\"receivedClosedProgramDEV($event)\" [showDEVProgram]=\"showDEVProgram\"\n        (closeComputer)=\"receivedCloseComputer($event)\"></app-it-system-view>\n      </div>\n      <div class=\"startmenu animated flipInX\" *ngIf=\"visibleMenu\">\n        <div class=\"col softwer-name\">\n          <img src=\"assets/WindowsLogo.png\" alt=\"startBtn\">\n          <span>Minisoft Doors</span>\n        </div>\n        <div class=\"col this-pc\" (click)=\"openMyProgram()\">\n          <img src=\"assets/icon-thisPC.png\" alt=\"startBtn\">\n          <span *ngIf=\"!isItView\">Debug program</span>\n          <span *ngIf=\"isItView\">IT program</span>\n        </div>\n        <div class=\"col open-settings\">\n          <img src=\"assets/icon-setting.png\" alt=\"startBtn\">\n          <span>Settings</span>\n        </div>\n      </div>\n      <img *ngIf=\"!isItView\" src=\"assets/office-desktop.jpg\" class=\"img-desktop\" alt=\"desktop\">\n      <img *ngIf=\"isItView\" src=\"assets/code-desktop.jpg\" class=\"img-desktop\" alt=\"desktop\">\n    </div>\n    <div class=\"bottom-bar\">\n      <div class=\"start-btn\">\n        <img src=\"assets/WindowsLogo.png\" (click)=\"openMenu()\" class=\"img-btn\" alt=\"startBtn\">\n      </div>\n      <div class=\"connect-section animated 1 heartBeat\" *ngIf=\"usbConnected\">\n        <img src=\"assets/pendrive.png\" class=\"img-btn\" alt=\"usbBtn\">\n      </div>\n      <div class=\"date-section\">\n        <span>{{myDate | date:'MM.dd'}}</span>\n        <span>{{myDate | date:'yyyy'}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.less":
/*!*************************************************************************************************!*\
  !*** ./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.less ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pc-door-window {\n  background-color: white;\n  padding: 0 5px;\n  border-radius: 30px;\n  border: 1px solid black;\n  position: absolute;\n  z-index: 1000;\n  width: 80%;\n  left: 10%;\n  top: 10%;\n  height: 80%;\n}\n.pc-door-window .title {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n}\n.pc-door-window .title h2 {\n  flex: 1;\n  text-align: left;\n  margin: 0;\n}\n.pc-door-window .mainWindow {\n  border: 1px solid black;\n  display: flex;\n  flex-wrap: wrap;\n  background: cornflowerblue;\n  height: 85%;\n  position: relative;\n}\n.pc-door-window .mainWindow .window-bar {\n  height: 93%;\n  width: 100%;\n  padding: 0 10px;\n  position: relative;\n}\n.pc-door-window .mainWindow .window-bar .my-program {\n  position: absolute;\n  z-index: 100;\n  width: 95%;\n  height: inherit;\n  left: 0;\n  padding: 20px;\n  margin: 0 20px;\n}\n.pc-door-window .mainWindow .window-bar .startmenu {\n  position: absolute;\n  z-index: 200;\n  background: white;\n  width: 300px;\n  bottom: 17px;\n  left: 5px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.pc-door-window .mainWindow .window-bar .startmenu .col {\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  width: 100%;\n  position: relative;\n}\n.pc-door-window .mainWindow .window-bar .startmenu .col img {\n  width: 50px;\n  padding: 5px 10px;\n  height: auto;\n}\n.pc-door-window .mainWindow .window-bar .startmenu .col span {\n  flex: 1;\n  text-align: left;\n  top: 30%;\n  left: 60px;\n  font-size: 18px;\n  line-height: normal;\n  color: black;\n  position: absolute;\n}\n.pc-door-window .mainWindow .window-bar .startmenu .col:hover {\n  background: slateblue;\n  cursor: pointer;\n}\n.pc-door-window .mainWindow .window-bar .startmenu .softwer-name {\n  height: 60px;\n  background: slateblue;\n  border-bottom: 1px solid black;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.pc-door-window .mainWindow .window-bar .startmenu .softwer-name span {\n  color: white;\n}\n.pc-door-window .mainWindow .window-bar .img-desktop {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  height: 108%;\n}\n.pc-door-window .mainWindow .bottom-bar {\n  height: 60px;\n  background: slateblue;\n  width: 100%;\n  position: absolute;\n  display: flex;\n  bottom: -2px;\n  margin-left: 1px;\n  z-index: 300;\n}\n.pc-door-window .mainWindow .bottom-bar .start-btn {\n  flex: 1;\n  text-align: left;\n}\n.pc-door-window .mainWindow .bottom-bar .start-btn .img-btn {\n  padding: 5px 10px;\n}\n.pc-door-window .mainWindow .bottom-bar .connect-section {\n  font-size: 18px;\n  text-align: right;\n  padding: 5px;\n}\n.pc-door-window .mainWindow .bottom-bar .connect-section .img-btn {\n  padding: 10px;\n}\n.pc-door-window .mainWindow .bottom-bar .img-btn {\n  width: 50px;\n  cursor: pointer;\n}\n.pc-door-window .mainWindow .bottom-bar .date-section {\n  color: white;\n  font-size: 18px;\n  text-align: right;\n  padding: 5px;\n  flex-direction: column;\n  display: flex;\n}\n.pc-door-window .mainWindow .bottom-bar .date-section span {\n  flex: 1;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcHV0ZXIvY29tcHV0ZXItZGVza3RvcC12aWV3L2NvbXB1dGVyLWRlc2t0b3Atdmlldy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZW5naW5lLXZpZXcvY29tcHV0ZXIvY29tcHV0ZXItZGVza3RvcC12aWV3L2NvbXB1dGVyLWRlc2t0b3Atdmlldy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0Y7QURYQTtFQWFJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURoQkE7RUFrQk0sT0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0NOO0FEckJBO0VBeUJJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKO0FEN0JBO0VBaUNNLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRE47QURuQ0E7RUF1Q1Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNEUjtBRDVDQTtFQWlEUSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNGUjtBRHREQTtFQTJEVSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlY7QUQ3REE7RUFrRVksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZaO0FEbEVBO0VBd0VZLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSFo7QURNVTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0paO0FEaEZBO0VBeUZVLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ05WO0FEdkZBO0VBZ0dZLFlBQUE7QUNOWjtBRDFGQTtFQXNHUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ1RSO0FEaEdBO0VBOEdNLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWE47QUQxR0E7RUF3SFEsT0FBQTtFQUNBLGdCQUFBO0FDWFI7QUQ5R0E7RUE0SFUsaUJBQUE7QUNYVjtBRGpIQTtFQWlJUSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDYlI7QUR0SEE7RUFzSVUsYUFBQTtBQ2JWO0FEekhBO0VBMklRLFdBQUE7RUFDQSxlQUFBO0FDZlI7QUQ3SEE7RUFnSlEsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNoQlI7QURySUE7RUF3SlUsT0FBQTtFQUNBLGtCQUFBO0FDaEJWIiwiZmlsZSI6InNyYy9hcHAvZW5naW5lLXZpZXcvY29tcHV0ZXIvY29tcHV0ZXItZGVza3RvcC12aWV3L2NvbXB1dGVyLWRlc2t0b3Atdmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYy1kb29yLXdpbmRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDEwJTtcbiAgaGVpZ2h0OiA4MCU7XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuXG4gICAgaDIge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLm1haW5XaW5kb3cge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xuICAgIGhlaWdodDogODUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC53aW5kb3ctYmFyIHtcbiAgICAgIGhlaWdodDogOTMlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5teS1wcm9ncmFtIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zdGFydG1lbnUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgYm90dG9tOiAxN3B4O1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgIC5jb2wge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNvZnR3ZXItbmFtZSB7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW1nLWRlc2t0b3Age1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwOCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvdHRvbS1iYXIge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgIHotaW5kZXg6IDMwMDtcblxuICAgICAgLnN0YXJ0LWJ0biB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLmltZy1idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb25uZWN0LXNlY3Rpb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmltZy1idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmltZy1idG4ge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuZGF0ZS1zZWN0aW9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5wYy1kb29yLXdpbmRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDEwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG4ucGMtZG9vci13aW5kb3cgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLnBjLWRvb3Itd2luZG93IC50aXRsZSBoMiB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xuICBoZWlnaHQ6IDg1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBjLWRvb3Itd2luZG93IC5tYWluV2luZG93IC53aW5kb3ctYmFyIHtcbiAgaGVpZ2h0OiA5MyU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAud2luZG93LWJhciAubXktcHJvZ3JhbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLnBjLWRvb3Itd2luZG93IC5tYWluV2luZG93IC53aW5kb3ctYmFyIC5zdGFydG1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm90dG9tOiAxN3B4O1xuICBsZWZ0OiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnBjLWRvb3Itd2luZG93IC5tYWluV2luZG93IC53aW5kb3ctYmFyIC5zdGFydG1lbnUgLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAud2luZG93LWJhciAuc3RhcnRtZW51IC5jb2wgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucGMtZG9vci13aW5kb3cgLm1haW5XaW5kb3cgLndpbmRvdy1iYXIgLnN0YXJ0bWVudSAuY29sIHNwYW4ge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAud2luZG93LWJhciAuc3RhcnRtZW51IC5jb2w6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAud2luZG93LWJhciAuc3RhcnRtZW51IC5zb2Z0d2VyLW5hbWUge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAud2luZG93LWJhciAuc3RhcnRtZW51IC5zb2Z0d2VyLW5hbWUgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAud2luZG93LWJhciAuaW1nLWRlc2t0b3Age1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwOCU7XG59XG4ucGMtZG9vci13aW5kb3cgLm1haW5XaW5kb3cgLmJvdHRvbS1iYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm90dG9tOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICB6LWluZGV4OiAzMDA7XG59XG4ucGMtZG9vci13aW5kb3cgLm1haW5XaW5kb3cgLmJvdHRvbS1iYXIgLnN0YXJ0LWJ0biB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGMtZG9vci13aW5kb3cgLm1haW5XaW5kb3cgLmJvdHRvbS1iYXIgLnN0YXJ0LWJ0biAuaW1nLWJ0biB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnBjLWRvb3Itd2luZG93IC5tYWluV2luZG93IC5ib3R0b20tYmFyIC5jb25uZWN0LXNlY3Rpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGMtZG9vci13aW5kb3cgLm1haW5XaW5kb3cgLmJvdHRvbS1iYXIgLmNvbm5lY3Qtc2VjdGlvbiAuaW1nLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGMtZG9vci13aW5kb3cgLm1haW5XaW5kb3cgLmJvdHRvbS1iYXIgLmltZy1idG4ge1xuICB3aWR0aDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBjLWRvb3Itd2luZG93IC5tYWluV2luZG93IC5ib3R0b20tYmFyIC5kYXRlLXNlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wYy1kb29yLXdpbmRvdyAubWFpbldpbmRvdyAuYm90dG9tLWJhciAuZGF0ZS1zZWN0aW9uIHNwYW4ge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComputerDesktopViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerDesktopViewComponent", function() { return ComputerDesktopViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComputerDesktopViewComponent = /** @class */ (function () {
    function ComputerDesktopViewComponent() {
        this.solvedError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.computerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.audio = new Audio('assets/music/usb.mp3');
        this.audio2 = new Audio('assets/music/click.mp3');
        this.visibleMenu = false;
        this.usbConnected = false;
        this.showDEVProgram = '';
        this.showDEBProgram = '';
        this.myDate = new Date();
    }
    ComputerDesktopViewComponent.prototype.ngOnInit = function () { };
    ComputerDesktopViewComponent.prototype.closeComputerWindow = function () {
        this.audio2.play();
        this.usbConnected = false;
        if (this.showDEVProgram != '' || this.showDEBProgram != '') {
            return;
        }
        this.showComputer = '';
        this.computerClosed.emit(this.showComputer);
        this.closeMenu();
    };
    ComputerDesktopViewComponent.prototype.openMenu = function () {
        this.audio.play();
        this.usbConnected = true;
        this.visibleMenu = true;
    };
    ComputerDesktopViewComponent.prototype.closeMenu = function () {
        this.visibleMenu = false;
    };
    ComputerDesktopViewComponent.prototype.openMyProgram = function () {
        if (this.isItView) {
            this.showDEVProgram = "Open";
        }
        else {
            this.showDEBProgram = "Open";
        }
    };
    ComputerDesktopViewComponent.prototype.receivedClosedProgramDEV = function ($event) {
        this.showDEVProgram = $event;
    };
    ComputerDesktopViewComponent.prototype.receivedClosedProgramDEB = function ($event) {
        this.showDEBProgram = $event;
    };
    ComputerDesktopViewComponent.prototype.receivedErrStatus = function ($event) {
        if ($event === true) {
            this.solvedError.emit(this.errorId);
        }
    };
    ComputerDesktopViewComponent.prototype.receivedCloseComputer = function ($event) {
        if ($event == true) {
            this.showComputer = '';
            this.computerClosed.emit(this.showComputer);
            this.closeMenu();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComputerDesktopViewComponent.prototype, "showComputer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComputerDesktopViewComponent.prototype, "errorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ComputerDesktopViewComponent.prototype, "isItView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComputerDesktopViewComponent.prototype, "solvedError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComputerDesktopViewComponent.prototype, "computerClosed", void 0);
    ComputerDesktopViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-computer-desktop-view',
            template: __webpack_require__(/*! ./computer-desktop-view.component.html */ "./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.html"),
            styles: [__webpack_require__(/*! ./computer-desktop-view.component.less */ "./src/app/engine-view/computer/computer-desktop-view/computer-desktop-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComputerDesktopViewComponent);
    return ComputerDesktopViewComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/computer/debugging-view/debugging-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/engine-view/computer/debugging-view/debugging-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"door-view animate bounceIn\" *ngIf='showDEBProgram !== \"\"'>\n  <app-error-view (errorClosed)=\"receivedClosedError($event)\" (returnN1)=\"receivedError1($event)\"\n    [showError]=\"showError\" [errorTitle]=\"errorTitle\" [errorNumber1]=\"errorNumber1\" [errorNumber2]=\"errorNumber2\">\n  </app-error-view>\n  <div class=\"title title-name\">\n    <h2>{{settingTitle}}</h2>\n    <img class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"closeMyProgramWindow()\" alt=\"cancelIcon\">\n  </div>\n  <div class=\"btns\">\n    <div class=\"menu-btn account-setting\">\n      <span class=\"h1\" (click)=\"openSector(1)\" *ngIf=\"!accountVisible\">{{accountTitle}}</span>\n      <div class=\"account-debug\" *ngIf=\"accountVisible\">\n        <div class=\"list-form\">\n          <div class=\"info\">\n            <div class=\"avatar animate bounceIn\">\n              <img src=\"assets/avatar.png\" alt=\"avatar\">\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/password.png\" alt=\"paswIcon\">\n                <h4>{{passwTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status1\">\n                <img *ngIf=\"sts1opon1\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts1opon1\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(passwTitle, 1, 1)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/login.png\" alt=\"loginIcon\">\n                <h4>{{activeInactTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status1\">\n                <img *ngIf=\"sts1opon2\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts1opon2\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(activeInactTitle, 2, 1)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"check-window\">\n            <span class=\"check-btn btn btn-primary animated 1 bounceIn\" (click)=\"scanSector(1)\">{{checkTitle}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"menu-btn network-setting\">\n      <span class=\"h1\" (click)=\"openSector(2)\" *ngIf=\"!networkVisible\">{{networkTitle}}</span>\n      <div class=\"network-debug\" *ngIf=\"networkVisible\">\n        <div class=\"list-form\">\n          <div class=\"info\">\n            <div class=\"parameter animate bounceIn\">\n              <h3>{{networkTitle}}</h3>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/bluetooth.png\" alt=\"bluetoothIcon\">\n                <h4>{{bluetoothTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status2\">\n                <img *ngIf=\"sts2opon1\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts2opon1\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(bluetoothTitle, 3, 2)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/wifi.png\" alt=\"wifiIcon\">\n                <h4>{{wifiTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status2\">\n                <img *ngIf=\"sts2opon2\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts2opon2\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(wifiTitle, 4, 2)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/lan.png\" alt=\"lanIcon\">\n                <h4>{{lanTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status2\">\n                <img *ngIf=\"sts2opon3\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts2opon3\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(lanTitle, 5, 3)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"check-window\">\n            <span class=\"check-btn btn btn-primary animated 1 bounceIn\" (click)=\"scanSector(2)\">{{checkTitle}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"menu-btn devices\">\n      <span class=\"h1\" (click)=\"openSector(3)\" *ngIf=\"!devicesVisible\">{{deviceTitle}}</span>\n      <div class=\"devices-debug\" *ngIf=\"devicesVisible\">\n        <div class=\"list-form\">\n          <div class=\"info\">\n            <div class=\"parameter animate bounceIn\">\n              <h3>{{deviceTitle}}</h3>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/headset.png\" alt=\"headsetIcon\">\n                <h4>{{headsetTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status3\">\n                <img *ngIf=\"sts3opon1\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts3opon1\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(headsetTitle, 6, 4)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/printer.png\" alt=\"printerIcon\">\n                <h4>{{printerTitle}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status3\">\n                <img *ngIf=\"sts3opon2\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts3opon2\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(printerTitle, 7, 5)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n            <div class=\"parameter animate bounceIn\">\n              <div class=\"item\">\n                <img class=\"error-icon item-img\" src=\"assets/ErrorSolvingImg/monitor.png\" alt=\"monitorIcon\">\n                <h4>{{monitor2Title}}</h4>\n              </div>\n              <div class=\"status-item animate bounceIn\" *ngIf=\"status3\">\n                <img *ngIf=\"sts3opon3\" class=\"ok-icon\" src=\"assets/ok-icon.png\" alt=\"OK\">\n                <img *ngIf=\"!sts3opon3\" class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"openDebugWindow(monitor2Title, 8, 6)\" alt=\"cancelIcon\">\n              </div>\n            </div>\n          </div>\n          <div class=\"check-window\">\n            <span class=\"check-btn btn btn-primary animated 1 bounceIn\" (click)=\"scanSector(3)\">{{checkTitle}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/engine-view/computer/debugging-view/debugging-view.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/engine-view/computer/debugging-view/debugging-view.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".door-view {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  position: relative;\n  border-radius: 30px;\n  border: 1px solid black;\n}\n.door-view .menu-btn {\n  border: 1px solid black;\n  margin: 5px;\n  background: darkgray;\n  flex: 1;\n  display: flex;\n  position: relative;\n  color: black;\n  transition: all 0.5s ease;\n  border-radius: 30px;\n}\n.door-view .menu-btn span {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  font-weight: bold;\n  margin: 0;\n  padding: 10px;\n  cursor: pointer;\n}\n.door-view .menu-btn:hover .h1 {\n  color: white;\n}\n.door-view .menu-btn .check-window {\n  width: 100%;\n  flex: 1;\n  position: relative;\n}\n.door-view .menu-btn .check-window span {\n  position: static;\n  width: 50%;\n  margin: 30px;\n}\n.door-view .menu-btn .account-debug,\n.door-view .menu-btn .network-debug,\n.door-view .menu-btn .devices-debug {\n  width: 100%;\n  height: 100%;\n}\n.door-view .menu-btn .account-debug .list-form,\n.door-view .menu-btn .network-debug .list-form,\n.door-view .menu-btn .devices-debug .list-form {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.door-view .menu-btn .account-debug .list-form .info,\n.door-view .menu-btn .network-debug .list-form .info,\n.door-view .menu-btn .devices-debug .list-form .info {\n  display: flex;\n  flex-direction: column;\n  flex: 3;\n}\n.door-view .menu-btn .account-debug .list-form .info .parameter,\n.door-view .menu-btn .network-debug .list-form .info .parameter,\n.door-view .menu-btn .devices-debug .list-form .info .parameter {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.door-view .menu-btn .account-debug .list-form .info .parameter .item,\n.door-view .menu-btn .network-debug .list-form .info .parameter .item,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .item,\n.door-view .menu-btn .account-debug .list-form .info .parameter .status-item,\n.door-view .menu-btn .network-debug .list-form .info .parameter .status-item,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .status-item {\n  flex: 1;\n  margin: 0 auto;\n  transition: all 1s ease;\n  display: flex;\n}\n.door-view .menu-btn .account-debug .list-form .info .parameter .item .item-img,\n.door-view .menu-btn .network-debug .list-form .info .parameter .item .item-img,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .item .item-img,\n.door-view .menu-btn .account-debug .list-form .info .parameter .status-item .item-img,\n.door-view .menu-btn .network-debug .list-form .info .parameter .status-item .item-img,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .status-item .item-img {\n  flex: none;\n  margin: 0 20px;\n}\n.door-view .menu-btn .account-debug .list-form .info .parameter .item img,\n.door-view .menu-btn .network-debug .list-form .info .parameter .item img,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .item img,\n.door-view .menu-btn .account-debug .list-form .info .parameter .status-item img,\n.door-view .menu-btn .network-debug .list-form .info .parameter .status-item img,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .status-item img {\n  margin: 20px;\n}\n.door-view .menu-btn .account-debug .list-form .info .parameter .status-item,\n.door-view .menu-btn .network-debug .list-form .info .parameter .status-item,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .status-item {\n  display: block;\n  flex: 0.5;\n}\n.door-view .menu-btn .account-debug .list-form .info .parameter .status-item img,\n.door-view .menu-btn .network-debug .list-form .info .parameter .status-item img,\n.door-view .menu-btn .devices-debug .list-form .info .parameter .status-item img {\n  margin: 0 auto;\n}\n.door-view .menu-btn .account-debug .list-form .info .avatar img,\n.door-view .menu-btn .network-debug .list-form .info .avatar img,\n.door-view .menu-btn .devices-debug .list-form .info .avatar img {\n  width: 50%;\n}\n.door-view .menu-btn .account-debug .list-form .check-window,\n.door-view .menu-btn .network-debug .list-form .check-window,\n.door-view .menu-btn .devices-debug .list-form .check-window {\n  flex: 1;\n}\n.door-view .btns {\n  flex: 1;\n  display: flex;\n}\n.door-view .title {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n}\n.door-view .title h2 {\n  flex: 1;\n  text-align: left;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcHV0ZXIvZGVidWdnaW5nLXZpZXcvZGVidWdnaW5nLXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXB1dGVyL2RlYnVnZ2luZy12aWV3L2RlYnVnZ2luZy12aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEVEE7RUFXSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEcEJBO0VBc0JNLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0FDQU47QURoQ0E7RUFvQ00sV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQ0ROO0FEckNBO0VBeUNRLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNEUjtBRDFDQTs7O0VBa0RNLFdBQUE7RUFDQSxZQUFBO0FDSE47QURoREE7OztFQXNEUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0RSO0FEeERBOzs7RUE0RFUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQ0NWO0FEL0RBOzs7RUFpRVksV0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0daO0FEeEVBOzs7Ozs7RUF5RWMsT0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNPZDtBRG5GQTs7Ozs7O0VBK0VnQixVQUFBO0VBQ0EsY0FBQTtBQ1loQjtBRDVGQTs7Ozs7O0VBb0ZnQixZQUFBO0FDZ0JoQjtBRHBHQTs7O0VBeUZjLGNBQUE7RUFDQSxTQUFBO0FDZ0JkO0FEMUdBOzs7RUE2RmdCLGNBQUE7QUNrQmhCO0FEL0dBOzs7RUFtR1ksVUFBQTtBQ2lCWjtBRHBIQTs7O0VBd0dVLE9BQUE7QUNpQlY7QUR6SEE7RUErR0ksT0FBQTtFQUNBLGFBQUE7QUNhSjtBRDdIQTtFQW9ISSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1lKO0FEbElBO0VBeUhNLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNZTiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXB1dGVyL2RlYnVnZ2luZy12aWV3L2RlYnVnZ2luZy12aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvb3ItdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gIC5tZW51LWJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6aG92ZXIgLmgxIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuY2hlY2std2luZG93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleDogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb3VudC1kZWJ1ZyxcbiAgICAubmV0d29yay1kZWJ1ZyxcbiAgICAuZGV2aWNlcy1kZWJ1ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLmxpc3QtZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4OiAzO1xuXG4gICAgICAgICAgLnBhcmFtZXRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAuaXRlbSxcbiAgICAgICAgICAgIC5zdGF0dXMtaXRlbSB7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAuaXRlbS1pbWcge1xuICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdHVzLWl0ZW0ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZmxleDogMC41O1xuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXZhdGFyIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVjay13aW5kb3cge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRucyB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuXG4gICAgaDIge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iLCIuZG9vci12aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uZG9vci12aWV3IC5tZW51LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLmRvb3ItdmlldyAubWVudS1idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZG9vci12aWV3IC5tZW51LWJ0bjpob3ZlciAuaDEge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZG9vci12aWV3IC5tZW51LWJ0biAuY2hlY2std2luZG93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5jaGVjay13aW5kb3cgc3BhbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMzBweDtcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnLFxuLmRvb3ItdmlldyAubWVudS1idG4gLm5ldHdvcmstZGVidWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG9vci12aWV3IC5tZW51LWJ0biAuYWNjb3VudC1kZWJ1ZyAubGlzdC1mb3JtLFxuLmRvb3ItdmlldyAubWVudS1idG4gLm5ldHdvcmstZGVidWcgLmxpc3QtZm9ybSxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5kZXZpY2VzLWRlYnVnIC5saXN0LWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRvb3ItdmlldyAubWVudS1idG4gLmFjY291bnQtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmluZm8sXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMztcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlcixcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlcixcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5kZXZpY2VzLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuaXRlbSxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuaXRlbSxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5kZXZpY2VzLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuaXRlbSxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuc3RhdHVzLWl0ZW0sXG4uZG9vci12aWV3IC5tZW51LWJ0biAubmV0d29yay1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLnN0YXR1cy1pdGVtLFxuLmRvb3ItdmlldyAubWVudS1idG4gLmRldmljZXMtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5zdGF0dXMtaXRlbSB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuaXRlbSAuaXRlbS1pbWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAubmV0d29yay1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLml0ZW0gLml0ZW0taW1nLFxuLmRvb3ItdmlldyAubWVudS1idG4gLmRldmljZXMtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5pdGVtIC5pdGVtLWltZyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuc3RhdHVzLWl0ZW0gLml0ZW0taW1nLFxuLmRvb3ItdmlldyAubWVudS1idG4gLm5ldHdvcmstZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5zdGF0dXMtaXRlbSAuaXRlbS1pbWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLnN0YXR1cy1pdGVtIC5pdGVtLWltZyB7XG4gIGZsZXg6IG5vbmU7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmRvb3ItdmlldyAubWVudS1idG4gLmFjY291bnQtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5pdGVtIGltZyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuaXRlbSBpbWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLml0ZW0gaW1nLFxuLmRvb3ItdmlldyAubWVudS1idG4gLmFjY291bnQtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5zdGF0dXMtaXRlbSBpbWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAubmV0d29yay1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLnN0YXR1cy1pdGVtIGltZyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5kZXZpY2VzLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuc3RhdHVzLWl0ZW0gaW1nIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmRvb3ItdmlldyAubWVudS1idG4gLmFjY291bnQtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5zdGF0dXMtaXRlbSxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuc3RhdHVzLWl0ZW0sXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLnN0YXR1cy1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDAuNTtcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLnBhcmFtZXRlciAuc3RhdHVzLWl0ZW0gaW1nLFxuLmRvb3ItdmlldyAubWVudS1idG4gLm5ldHdvcmstZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAucGFyYW1ldGVyIC5zdGF0dXMtaXRlbSBpbWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5wYXJhbWV0ZXIgLnN0YXR1cy1pdGVtIGltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmRvb3ItdmlldyAubWVudS1idG4gLmFjY291bnQtZGVidWcgLmxpc3QtZm9ybSAuaW5mbyAuYXZhdGFyIGltZyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmluZm8gLmF2YXRhciBpbWcsXG4uZG9vci12aWV3IC5tZW51LWJ0biAuZGV2aWNlcy1kZWJ1ZyAubGlzdC1mb3JtIC5pbmZvIC5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5hY2NvdW50LWRlYnVnIC5saXN0LWZvcm0gLmNoZWNrLXdpbmRvdyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5uZXR3b3JrLWRlYnVnIC5saXN0LWZvcm0gLmNoZWNrLXdpbmRvdyxcbi5kb29yLXZpZXcgLm1lbnUtYnRuIC5kZXZpY2VzLWRlYnVnIC5saXN0LWZvcm0gLmNoZWNrLXdpbmRvdyB7XG4gIGZsZXg6IDE7XG59XG4uZG9vci12aWV3IC5idG5zIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kb29yLXZpZXcgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLmRvb3ItdmlldyAudGl0bGUgaDIge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/engine-view/computer/debugging-view/debugging-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/engine-view/computer/debugging-view/debugging-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DebuggingViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebuggingViewComponent", function() { return DebuggingViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DebuggingViewComponent = /** @class */ (function () {
    function DebuggingViewComponent() {
        this.audio = new Audio('assets/music/click.mp3');
        this.settingTitle = "My IT program";
        this.accountTitle = "Account settings";
        this.networkTitle = "Network settings";
        this.deviceTitle = "Devices";
        this.checkTitle = "Scan";
        this.showError = "";
        this.errorTitle = "";
        this.errorNumber1 = "";
        this.errorNumber2 = "";
        this.closedProgramDEB = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errorResolved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.passwTitle = "Password";
        this.activeInactTitle = "Account status";
        this.bluetoothTitle = "bluetooth";
        this.wifiTitle = "wifi";
        this.lanTitle = "LAN cable";
        this.headsetTitle = "Headset";
        this.printerTitle = "Printer";
        this.monitor2Title = "Second Monitor";
        this.generatedErrors = false;
        this.accountVisible = false;
        this.networkVisible = false;
        this.devicesVisible = false;
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        this.errToChange = 0;
        this.sts1opon1 = true;
        this.sts1opon2 = true;
        this.sts2opon1 = true;
        this.sts2opon2 = true;
        this.sts2opon3 = true;
        this.sts3opon1 = true;
        this.sts3opon2 = true;
        this.sts3opon3 = true;
        this.counterEvery = 1000;
        this.secondsCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.counterEvery);
    }
    DebuggingViewComponent.prototype.ngOnInit = function () { };
    DebuggingViewComponent.prototype.openSector = function (indexOfSector) {
        this.audio.play();
        if (this.generatedErrors === false) {
            this.generatedActiveErrors();
            this.generatedErrors = true;
        }
        if (indexOfSector === 1) {
            this.accountVisible = true;
        }
        else if (indexOfSector === 2) {
            this.networkVisible = true;
        }
        else {
            this.devicesVisible = true;
        }
    };
    DebuggingViewComponent.prototype.isEverythingCompleted = function () {
        if (this.accountVisible == false || this.networkVisible == false || this.devicesVisible == false) {
            return false;
        }
        if (!this.sts1opon1) {
            return false;
        }
        if (!this.sts1opon2) {
            return false;
        }
        if (!this.sts2opon1) {
            return false;
        }
        if (!this.sts2opon2) {
            return false;
        }
        if (!this.sts2opon3) {
            return false;
        }
        if (!this.sts3opon1) {
            return false;
        }
        if (!this.sts3opon2) {
            return false;
        }
        if (!this.sts3opon3) {
            return false;
        }
        return true;
    };
    DebuggingViewComponent.prototype.changeStatusErr = function () {
        this.showOrHideError(this.errToChange - 1, true);
    };
    DebuggingViewComponent.prototype.showOrHideError = function (indexError, boolValue) {
        switch (indexError) {
            case 0:
                this.sts1opon1 = boolValue;
                break;
            case 1:
                this.sts1opon2 = boolValue;
                break;
            case 2:
                this.sts2opon1 = boolValue;
                break;
            case 3:
                this.sts2opon2 = boolValue;
                break;
            case 4:
                this.sts2opon3 = boolValue;
                break;
            case 5:
                this.sts3opon1 = boolValue;
                break;
            case 6:
                this.sts3opon2 = boolValue;
                break;
            case 7:
                this.sts3opon3 = boolValue;
                break;
        }
    };
    DebuggingViewComponent.prototype.generatedRandomNumber = function (numberOfitems) {
        var randomIndx = Math.floor(Math.random() * (numberOfitems));
        return randomIndx;
    };
    DebuggingViewComponent.prototype.generatedActiveErrors = function () {
        var randomNumberOfErrors = this.generatedRandomNumber(3);
        for (var i = 0; i < (randomNumberOfErrors + 1); i++) {
            var randomIndx = Math.floor(Math.random() * (8));
            this.showOrHideError(randomIndx, false);
        }
    };
    DebuggingViewComponent.prototype.openDebugWindow = function (title, inputType, outputType) {
        this.audio.play();
        this.showError = "Open";
        this.errorTitle = title;
        this.errorNumber1 = inputType;
        this.errorNumber2 = outputType;
    };
    DebuggingViewComponent.prototype.scanSector = function (sectorNumber) {
        var _this = this;
        this.audio.play();
        if (this.checkTitle === "Scan") {
            this.checkTitle = "Scanning";
            this.subscription = this.secondsCounter.subscribe(function (val) { return console.log(val); });
            setTimeout(function () { return _this.checkStatus(sectorNumber); }, 2000);
        }
    };
    DebuggingViewComponent.prototype.checkStatus = function (idx) {
        if (idx === 1) {
            this.status1 = true;
        }
        else if (idx === 2) {
            this.status2 = true;
        }
        else {
            this.status3 = true;
        }
        this.subscription.unsubscribe();
        this.checkTitle = "Scan";
    };
    DebuggingViewComponent.prototype.closeMyProgramWindow = function () {
        this.audio.play();
        if (this.isEverythingCompleted()) {
            var currentFame = parseInt(window.sessionStorage.getItem("fame"));
            if (currentFame != 100) {
                currentFame += 5;
                window.sessionStorage.setItem("fame", currentFame.toString());
            }
            this.errorResolved.emit(true);
        }
        else {
            this.errorResolved.emit(false);
        }
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        this.sts1opon1 = true;
        this.sts1opon2 = true;
        this.sts2opon1 = true;
        this.sts2opon2 = true;
        this.sts2opon3 = true;
        this.sts3opon1 = true;
        this.sts3opon2 = true;
        this.sts3opon3 = true;
        this.accountVisible = false;
        this.networkVisible = false;
        this.devicesVisible = false;
        this.generatedErrors = false;
        this.showDEBProgram = "";
        this.closedProgramDEB.emit(this.showDEBProgram);
    };
    DebuggingViewComponent.prototype.receivedClosedError = function ($event) {
        this.showError = $event;
        this.changeStatusErr();
    };
    DebuggingViewComponent.prototype.receivedError1 = function ($event) {
        this.errToChange = $event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DebuggingViewComponent.prototype, "showDEBProgram", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebuggingViewComponent.prototype, "closedProgramDEB", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebuggingViewComponent.prototype, "errorResolved", void 0);
    DebuggingViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-debugging-view',
            template: __webpack_require__(/*! ./debugging-view.component.html */ "./src/app/engine-view/computer/debugging-view/debugging-view.component.html"),
            styles: [__webpack_require__(/*! ./debugging-view.component.less */ "./src/app/engine-view/computer/debugging-view/debugging-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DebuggingViewComponent);
    return DebuggingViewComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/computer/it-system-view/error-view/error-view.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/engine-view/computer/it-system-view/error-view/error-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"errorWindow animate bounceIn\" *ngIf='showError !== \"\"'>\n  <div class=\"title title-name\">\n    <h2>{{errorTitle}}</h2>\n    <img class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"closeErrorWindow()\" alt=\"cancelIcon\">\n  </div>\n  <div class=\"mainWindow\">\n    <div class=\"show-section\">\n      <div class=\"error-section\">\n        <div class=\"graph-view\">\n          <div class=\"graph\">\n            <div class=\"block\">\n              <div></div>\n              <div class=\"option-img\">\n                <img class=\"option2\" *ngIf=\"errorNumber1 == 1\" src=\"assets/ErrorSolvingImg/password.png\" alt=\"option2\">\n                <img class=\"option2\" *ngIf=\"errorNumber1 == 2\" src=\"assets/ErrorSolvingImg/login.png\" alt=\"option2\">\n                <img class=\"option2\" *ngIf=\"errorNumber1 == 3\" src=\"assets/ErrorSolvingImg/bluetooth.png\" alt=\"option2\">\n                <img class=\"option2\" *ngIf=\"errorNumber1 == 4\" src=\"assets/ErrorSolvingImg/wifi.png\" alt=\"option2\">\n                <img class=\"option2\" *ngIf=\"errorNumber1 == 5\" src=\"assets/ErrorSolvingImg/lan.png\" alt=\"option2\">\n                <img class=\"option2\" *ngIf=\"errorNumber1 == 6 || errorNumber1 == 7 || errorNumber1 == 8\" src=\"assets/ErrorSolvingImg/connect.png\" alt=\"option2\">\n              </div>\n            </div>\n            <div class=\"block left\">\n              <div></div>\n              <div class=\"path\"><div [class]=\"statusClass1\" (click)=\"goSearchBug(0)\"></div></div>\n              <div></div>\n            </div>\n            <div class=\"block\">\n              <div>\n                <img class=\"computer\" src=\"assets/monitor-Icon.png\" alt=\"monitor\">\n              </div>\n              <div class=\"center\">\n                <div></div>\n                <div></div>\n                <div class=\"path\"><div [class]=\"statusClass2\" (click)=\"goSearchBug(1)\"></div></div>\n                <div></div>\n              </div>\n            </div>\n            <div class=\"block right\">\n              <div></div>\n              <div class=\"path\"><div [class]=\"statusClass3\" (click)=\"goSearchBug(2)\"></div></div>\n              <div></div>\n            </div>\n            <div class=\"block\">\n              <div></div>\n              <div class=\"option-img\">\n                <img class=\"option3\" *ngIf=\"errorNumber2 == 1\" src=\"assets/ErrorSolvingImg/database.png\" alt=\"option3\">\n                <img class=\"option3\" *ngIf=\"errorNumber2 == 2\" src=\"assets/ErrorSolvingImg/internet.png\" alt=\"option3\">\n                <img class=\"option3\" *ngIf=\"errorNumber2 == 3\" src=\"assets/ErrorSolvingImg/data.png\" alt=\"option3\">\n                <img class=\"option3\" *ngIf=\"errorNumber2 == 4\" src=\"assets/ErrorSolvingImg/headset.png\" alt=\"option3\">\n                <img class=\"option3\" *ngIf=\"errorNumber2 == 5\" src=\"assets/ErrorSolvingImg/printer.png\" alt=\"option3\">\n                <img class=\"option3\" *ngIf=\"errorNumber2 == 6\" src=\"assets/ErrorSolvingImg/monitor.png\" alt=\"option3\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <img class=\"err-bck\" src=\"assets/errorBck.jpg\" alt=\"bck\">\n      </div>\n      <div class=\"solve-section\">\n        <div class=\"search-bugs animate bounceIn\" *ngIf=\"activeSearch\">\n          <p>{{solveSecTitle}}</p>\n          <div class=\"bug-area\">\n            <img src=\"assets/bug.png\" alt=\"bug\" (click)=\"killBug()\" [style.top]=\"positionT\" [style.bottom]=\"positionB\" [style.left]=\"positionL\" [style.right]=\"positionR\">\n          </div>\n          <img class=\"err-bck\" src=\"assets/solveBck.jpg\" alt=\"bck\">\n        </div>\n        <div class=\"section-btn\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"runProgram()\" name=\"button\">{{runBtnTitle}}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"finishProgram()\" name=\"button\">{{finishBtnTitle}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"status\">\n    <p class=\"h3\">{{windowStatus}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/engine-view/computer/it-system-view/error-view/error-view.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/engine-view/computer/it-system-view/error-view/error-view.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorWindow {\n  background-color: white;\n  border-radius: 30px;\n  border: 1px solid black;\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n}\n.errorWindow .title {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n}\n.errorWindow .title h2 {\n  flex: 1;\n  text-align: left;\n  margin: 0;\n}\n.errorWindow .mainWindow {\n  border: 1px solid black;\n  background: darkgray;\n  height: 80%;\n  position: relative;\n  display: flex;\n}\n.errorWindow .mainWindow .show-section {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n}\n.errorWindow .mainWindow .show-section .error-section {\n  flex: 2;\n  height: 100%;\n  background: black;\n  position: relative;\n}\n.errorWindow .mainWindow .show-section .error-section .err-bck {\n  width: 100%;\n  height: 100%;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph {\n  height: 100%;\n  display: flex;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block {\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block div {\n  flex: 1;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .path {\n  height: 5px;\n  width: 100%;\n  margin: 80px 0;\n  border-radius: 10px;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .path .default-state {\n  background: gray;\n  transition: all 1s ease;\n  height: 100%;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .path .success-state {\n  background: green;\n  transition: all 1s ease;\n  height: 100%;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .path .error-state {\n  background: red;\n  transition: all 1s ease;\n  cursor: pointer;\n  height: 100%;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .computer,\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .option2,\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .option3 {\n  width: 150px;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .option-img {\n  position: relative;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .option-img .option2 {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .block .option-img .option3 {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .center {\n  display: flex;\n  flex-direction: column;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .center .path {\n  margin: 0;\n  flex: none;\n  height: 20px;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .left .path {\n  width: 20px;\n  margin: 0;\n  align-self: center;\n  transform: rotate(45deg);\n  border-radius: 10px;\n}\n.errorWindow .mainWindow .show-section .error-section .graph-view .graph .right .path {\n  width: 20px;\n  margin: 0;\n  align-self: center;\n  transform: rotate(-45deg);\n  border-radius: 10px;\n}\n.errorWindow .mainWindow .show-section .solve-section {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.errorWindow .mainWindow .show-section .solve-section .search-bugs {\n  width: 90%;\n  flex: 2.5;\n  margin: 0 15px;\n  background: white;\n  border: 1px solid black;\n  position: relative;\n  transition: all 1s ease;\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.errorWindow .mainWindow .show-section .solve-section .search-bugs p {\n  margin: 0;\n  position: absolute;\n  z-index: 10;\n  top: 45%;\n  width: 100%;\n  opacity: 0.3;\n}\n.errorWindow .mainWindow .show-section .solve-section .search-bugs .err-bck {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.errorWindow .mainWindow .show-section .solve-section .search-bugs .bug-area {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  flex: 1;\n  z-index: 20;\n}\n.errorWindow .mainWindow .show-section .solve-section .search-bugs .bug-area img {\n  width: 50px;\n  height: 50px;\n  opacity: 0;\n  position: absolute;\n}\n.errorWindow .mainWindow .show-section .solve-section .search-bugs .bug-area img:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.errorWindow .mainWindow .show-section .solve-section .section-btn {\n  width: 100%;\n  margin-top: 15px;\n  flex: 0.5;\n  display: flex;\n}\n.errorWindow .mainWindow .show-section .solve-section .section-btn .btn {\n  min-width: 120px;\n  margin: 0 15px;\n  height: 50px;\n  flex: 1;\n}\n.errorWindow .status {\n  width: 100%;\n  padding: 15px;\n}\n.errorWindow .status p {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcHV0ZXIvaXQtc3lzdGVtLXZpZXcvZXJyb3Itdmlldy9lcnJvci12aWV3LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9lbmdpbmUtdmlldy9jb21wdXRlci9pdC1zeXN0ZW0tdmlldy9lcnJvci12aWV3L2Vycm9yLXZpZXcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEUkE7RUFVSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEYkE7RUFlTSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDQ047QURsQkE7RUFzQkksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNESjtBRHpCQTtFQTZCTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNETjtBRGhDQTtFQW9DUSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRHRDQTtFQTBDVSxXQUFBO0VBQ0EsWUFBQTtBQ0RWO0FEMUNBO0VBK0NVLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGVjtBRC9DQTtFQW9EWSxZQUFBO0VBQ0EsYUFBQTtBQ0ZaO0FEbkRBO0VBd0RjLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0ZkO0FEekRBO0VBOERnQixPQUFBO0FDRmhCO0FENURBO0VBa0VnQixXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hoQjtBRGxFQTtFQXdFa0IsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNIbEI7QUR2RUE7RUE2RWtCLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDSGxCO0FENUVBO0VBa0ZrQixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hsQjtBRGxGQTs7O0VBNEZnQixZQUFBO0FDTGhCO0FEdkZBO0VBZ0dnQixrQkFBQTtBQ05oQjtBRDFGQTtFQW1Ha0Isa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ05sQjtBRC9GQTtFQXlHa0Isa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1BsQjtBRHBHQTtFQWlIYyxhQUFBO0VBQ0Esc0JBQUE7QUNWZDtBRHhHQTtFQXFIZ0IsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDVmhCO0FEN0dBO0VBNEhjLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDWmQ7QURwSEE7RUFvSWMsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNiZDtBRDNIQTtFQStJUSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ2pCUjtBRGpJQTtFQXFKVSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDakJWO0FEN0lBO0VBaUtZLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNqQlo7QURySkE7RUEwS1ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2xCWjtBRDFKQTtFQWdMWSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNuQlo7QURqS0E7RUF1TGMsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNuQmQ7QURxQmM7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ25CaEI7QUQzS0E7RUFxTVUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUN2QlY7QURqTEE7RUEyTVksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUN2Qlo7QUR2TEE7RUFzTkksV0FBQTtFQUNBLGFBQUE7QUM1Qko7QUQzTEE7RUEwTk0sU0FBQTtBQzVCTiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXB1dGVyL2l0LXN5c3RlbS12aWV3L2Vycm9yLXZpZXcvZXJyb3Itdmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcldpbmRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcblxuICAgIGgyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYWluV2luZG93IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5zaG93LXNlY3Rpb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAuZXJyb3Itc2VjdGlvbiB7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuZXJyLWJjayB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyYXBoLXZpZXcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAuZ3JhcGgge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLmJsb2NrIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wYXRoIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDgwcHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgLmRlZmF1bHQtc3RhdGUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3VjY2Vzcy1zdGF0ZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXJyb3Itc3RhdGUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbXB1dGVyLFxuICAgICAgICAgICAgICAub3B0aW9uMixcbiAgICAgICAgICAgICAgLm9wdGlvbjMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5vcHRpb24taW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAub3B0aW9uMiB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vcHRpb24zIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAucGF0aCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWZ0IC5wYXRoIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yaWdodCAucGF0aCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNvbHZlLXNlY3Rpb24ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLnNlYXJjaC1idWdzIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGZsZXg6IDIuNTtcbiAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgdG9wOiA0NSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXJyLWJjayB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnVnLWFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgei1pbmRleDogMjA7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWJ0biB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBmbGV4OiAwLjU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3RhdHVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iLCIuZXJyb3JXaW5kb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5lcnJvcldpbmRvdyAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uZXJyb3JXaW5kb3cgLnRpdGxlIGgyIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBoZWlnaHQ6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5lcnJvci1zZWN0aW9uIHtcbiAgZmxleDogMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLmVycm9yLXNlY3Rpb24gLmVyci1iY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLmVycm9yLXNlY3Rpb24gLmdyYXBoLXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGgge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLmJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLmVycm9yLXNlY3Rpb24gLmdyYXBoLXZpZXcgLmdyYXBoIC5ibG9jayBkaXYge1xuICBmbGV4OiAxO1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLmVycm9yLXNlY3Rpb24gLmdyYXBoLXZpZXcgLmdyYXBoIC5ibG9jayAucGF0aCB7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA4MHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLmJsb2NrIC5wYXRoIC5kZWZhdWx0LXN0YXRlIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5lcnJvci1zZWN0aW9uIC5ncmFwaC12aWV3IC5ncmFwaCAuYmxvY2sgLnBhdGggLnN1Y2Nlc3Mtc3RhdGUge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5lcnJvci1zZWN0aW9uIC5ncmFwaC12aWV3IC5ncmFwaCAuYmxvY2sgLnBhdGggLmVycm9yLXN0YXRlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLmJsb2NrIC5jb21wdXRlcixcbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5lcnJvci1zZWN0aW9uIC5ncmFwaC12aWV3IC5ncmFwaCAuYmxvY2sgLm9wdGlvbjIsXG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLmJsb2NrIC5vcHRpb24zIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLmVycm9yLXNlY3Rpb24gLmdyYXBoLXZpZXcgLmdyYXBoIC5ibG9jayAub3B0aW9uLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5lcnJvci1zZWN0aW9uIC5ncmFwaC12aWV3IC5ncmFwaCAuYmxvY2sgLm9wdGlvbi1pbWcgLm9wdGlvbjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5lcnJvci1zZWN0aW9uIC5ncmFwaC12aWV3IC5ncmFwaCAuYmxvY2sgLm9wdGlvbi1pbWcgLm9wdGlvbjMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLmNlbnRlciAucGF0aCB7XG4gIG1hcmdpbjogMDtcbiAgZmxleDogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLmVycm9yLXNlY3Rpb24gLmdyYXBoLXZpZXcgLmdyYXBoIC5sZWZ0IC5wYXRoIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuZXJyb3Itc2VjdGlvbiAuZ3JhcGgtdmlldyAuZ3JhcGggLnJpZ2h0IC5wYXRoIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLnNvbHZlLXNlY3Rpb24ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuc29sdmUtc2VjdGlvbiAuc2VhcmNoLWJ1Z3Mge1xuICB3aWR0aDogOTAlO1xuICBmbGV4OiAyLjU7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuc29sdmUtc2VjdGlvbiAuc2VhcmNoLWJ1Z3MgcCB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiA0NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjM7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuc29sdmUtc2VjdGlvbiAuc2VhcmNoLWJ1Z3MgLmVyci1iY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuc29sdmUtc2VjdGlvbiAuc2VhcmNoLWJ1Z3MgLmJ1Zy1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4OiAxO1xuICB6LWluZGV4OiAyMDtcbn1cbi5lcnJvcldpbmRvdyAubWFpbldpbmRvdyAuc2hvdy1zZWN0aW9uIC5zb2x2ZS1zZWN0aW9uIC5zZWFyY2gtYnVncyAuYnVnLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLnNvbHZlLXNlY3Rpb24gLnNlYXJjaC1idWdzIC5idWctYXJlYSBpbWc6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZXJyb3JXaW5kb3cgLm1haW5XaW5kb3cgLnNob3ctc2VjdGlvbiAuc29sdmUtc2VjdGlvbiAuc2VjdGlvbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZmxleDogMC41O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmVycm9yV2luZG93IC5tYWluV2luZG93IC5zaG93LXNlY3Rpb24gLnNvbHZlLXNlY3Rpb24gLnNlY3Rpb24tYnRuIC5idG4ge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDAgMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmbGV4OiAxO1xufVxuLmVycm9yV2luZG93IC5zdGF0dXMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5lcnJvcldpbmRvdyAuc3RhdHVzIHAge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/engine-view/computer/it-system-view/error-view/error-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/engine-view/computer/it-system-view/error-view/error-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ErrorViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorViewComponent", function() { return ErrorViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorViewComponent = /** @class */ (function () {
    function ErrorViewComponent() {
        this.audio = new Audio('assets/music/click.mp3');
        this.errorClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.returnN1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.runBtnTitle = "Run Program";
        this.finishBtnTitle = "Finish";
        this.windowStatus = "Not solved";
        this.solveSecTitle = "Find a hidden bug here";
        this.defaultStatus = "default-state animated fadeIn";
        this.successStatus = "success-state animated fadeIn";
        this.errorStatus = "error-state animated infinite heartBeat";
        this.positionT = '0';
        this.positionB = '0';
        this.positionL = '0';
        this.positionR = '0';
        this.status1 = 0;
        this.status2 = 0;
        this.status3 = 0;
        this.activeSearch = false;
        this.afterFirstRun = false;
        this.currentSection = 0;
        this.actualError = 0;
        this.statusClass1 = this.defaultStatus;
        this.statusClass2 = this.defaultStatus;
        this.statusClass3 = this.defaultStatus;
    }
    ErrorViewComponent.prototype.ngOnInit = function () { };
    ErrorViewComponent.prototype.firstRun = function () {
        var findError = this.generatedRandomNumber(3);
        if (findError == 0) {
            this.statusClass1 = this.errorStatus;
            this.currentSection = findError;
        }
        else if (findError == 1) {
            this.statusClass1 = this.successStatus;
            this.statusClass2 = this.errorStatus;
            this.currentSection = findError;
        }
        else {
            this.statusClass1 = this.successStatus;
            this.statusClass2 = this.successStatus;
            this.statusClass3 = this.errorStatus;
        }
        this.afterFirstRun = true;
    };
    ErrorViewComponent.prototype.isAnyErrorVisible = function () {
        if (this.statusClass1 == this.errorStatus ||
            this.statusClass2 == this.errorStatus ||
            this.statusClass3 == this.errorStatus) {
            return true;
        }
        return false;
    };
    ErrorViewComponent.prototype.isAllResolved = function () {
        if (this.statusClass1 == this.successStatus &&
            this.statusClass2 == this.successStatus &&
            this.statusClass3 == this.successStatus) {
            return true;
        }
        return false;
    };
    ErrorViewComponent.prototype.checkStatus = function (status, statusClass) {
        if (status == 0) {
            statusClass = this.successStatus;
        }
        else {
            statusClass = this.errorStatus;
        }
        return statusClass;
    };
    ErrorViewComponent.prototype.nextRuns = function () {
        var isError = this.generatedRandomNumber(2);
        if (this.currentSection == 1) {
            this.statusClass2 = this.checkStatus(isError, this.statusClass2);
            this.currentSection = 2;
            this.nextRuns();
        }
        else if (this.currentSection == 2) {
            this.statusClass3 = this.checkStatus(isError, this.statusClass3);
        }
        if (this.isAllResolved()) {
            this.windowStatus = "Solved";
        }
    };
    ErrorViewComponent.prototype.generatedRandomNumber = function (numberOfitems) {
        var randomIndx = Math.floor(Math.random() * (numberOfitems));
        return randomIndx;
    };
    ErrorViewComponent.prototype.runProgram = function () {
        this.audio.play();
        if (this.isAllResolved() || this.isAnyErrorVisible()) {
            return;
        }
        if (this.afterFirstRun == false) {
            this.firstRun();
        }
        else {
            this.nextRuns();
        }
    };
    ErrorViewComponent.prototype.goSearchBug = function (idx) {
        if (idx == 0 && this.statusClass1 == this.errorStatus) {
            this.generateHiddenBugs();
        }
        else if (idx == 1 && this.statusClass2 == this.errorStatus) {
            this.generateHiddenBugs();
        }
        else if (idx == 2 && this.statusClass3 == this.errorStatus) {
            this.generateHiddenBugs();
        }
        this.actualError = idx;
    };
    ErrorViewComponent.prototype.generateHiddenBugs = function () {
        this.activeSearch = true;
        this.positionT = (this.generatedRandomNumber(91)).toString() + '%';
        this.positionB = (this.generatedRandomNumber(91)).toString() + '%';
        this.positionL = (this.generatedRandomNumber(91)).toString() + '%';
        this.positionR = (this.generatedRandomNumber(91)).toString() + '%';
    };
    ErrorViewComponent.prototype.killBug = function () {
        this.audio.play();
        this.activeSearch = false;
        if (this.actualError == 0) {
            this.statusClass1 = this.successStatus;
        }
        else if (this.actualError == 1) {
            this.statusClass2 = this.successStatus;
        }
        else {
            this.statusClass3 = this.successStatus;
        }
        this.currentSection += 1;
        var numberOfBugs = parseInt(window.sessionStorage.getItem("bugs"));
        numberOfBugs += 1;
        window.sessionStorage.setItem("bugs", numberOfBugs.toString());
        if (this.isAllResolved()) {
            this.windowStatus = "Solved";
        }
    };
    ErrorViewComponent.prototype.defaultSetting = function () {
        this.status1 = 0;
        this.status2 = 0;
        this.status3 = 0;
        this.activeSearch = false;
        this.afterFirstRun = false;
        this.windowStatus = "Not solved";
        this.currentSection = 0;
        this.actualError = 0;
        this.statusClass1 = this.defaultStatus;
        this.statusClass2 = this.defaultStatus;
        this.statusClass3 = this.defaultStatus;
    };
    ErrorViewComponent.prototype.finishProgram = function () {
        this.audio.play();
        if (this.isAllResolved()) {
            this.defaultSetting();
            this.returnN1.emit(this.errorNumber1);
            this.closeErrorWindow();
        }
    };
    ErrorViewComponent.prototype.closeErrorWindow = function () {
        this.audio.play();
        this.defaultSetting();
        this.showError = '';
        this.errorClosed.emit(this.showError);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorViewComponent.prototype, "showError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorViewComponent.prototype, "errorTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorViewComponent.prototype, "errorNumber1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorViewComponent.prototype, "errorNumber2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorViewComponent.prototype, "errorClosed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorViewComponent.prototype, "returnN1", void 0);
    ErrorViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-view',
            template: __webpack_require__(/*! ./error-view.component.html */ "./src/app/engine-view/computer/it-system-view/error-view/error-view.component.html"),
            animations: [],
            styles: [__webpack_require__(/*! ./error-view.component.less */ "./src/app/engine-view/computer/it-system-view/error-view/error-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorViewComponent);
    return ErrorViewComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/computer/it-system-view/it-system-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/engine-view/computer/it-system-view/it-system-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"it-program animate bounceIn\" *ngIf='showDEVProgram !== \"\"'>\n  <div class=\"it-development\">\n    <div class=\"error-notification btn-danger\" *ngIf=\"bugNotify\">\n      <div class=\"avatar animate bounceIn\">\n        <img src=\"assets/avatar.png\" alt=\"avatar\">\n      </div>\n      <div class=\"message animate bounceIn\">\n        {{messageText}}\n      </div>\n      <div class=\"accept\">\n        <img class=\"ok-icon\" src=\"assets/ok-icon.png\" (click)=\"acceptBug()\" alt=\"OK\">\n        <img class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"rejectBug()\" alt=\"NO\">\n      </div>\n    </div>\n    <div class=\"collumns\">\n      <div class=\"title-name\">\n        <img class=\"error-icon\" src=\"assets/cancel-icon.png\" (click)=\"closeDevelopment()\" alt=\"cancelIcon\">\n      </div>\n      <div class=\"click-info\">\n        <div class=\"click-area\">\n          <img class=\"clock-icon\" src=\"assets/clock.png\" (click)=\"takeTime()\" [style.opacity]=\"showClock\" [style.top]=\"positionT\" [style.left]=\"positionL\" alt=\"clockIcon\">\n        </div>\n      </div>\n      <div class=\"base-info\">\n        <p>{{workPercentage}}% Completed</p>\n      </div>\n    </div>\n    <img src=\"assets/matrix.gif\" alt=\"matrix\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/engine-view/computer/it-system-view/it-system-view.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/engine-view/computer/it-system-view/it-system-view.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".it-program {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border-radius: 30px;\n  border: 1px solid black;\n}\n.it-program .it-development {\n  border: 1px solid black;\n  background: black;\n  position: relative;\n  transition: all 0.5s ease;\n  border-radius: 30px;\n}\n.it-program .it-development img {\n  border-radius: 30px;\n  padding: 5px;\n}\n.it-program .it-development .error-notification {\n  position: absolute;\n  display: flex;\n  z-index: 10;\n  top: 40%;\n  width: 50%;\n  left: 25%;\n}\n.it-program .it-development .error-notification .avatar img {\n  width: 120px;\n}\n.it-program .it-development .error-notification .message {\n  flex: 4;\n  align-self: center;\n  padding: 0 10px;\n  text-align: left;\n  font-size: 18px;\n}\n.it-program .it-development .error-notification .accept {\n  align-self: center;\n  flex: 1;\n}\n.it-program .it-development .error-notification .accept img {\n  padding: 0;\n  margin: 5px;\n  cursor: pointer;\n}\n.it-program .it-development .collumns {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.it-program .it-development .collumns .title-name {\n  padding: 10px 15px;\n}\n.it-program .it-development .collumns .title-name .error-icon {\n  padding: 0;\n}\n.it-program .it-development .collumns .click-info {\n  flex: 1;\n  width: 100%;\n}\n.it-program .it-development .collumns .click-info .click-area {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.it-program .it-development .collumns .click-info .click-area .clock-icon {\n  width: 80px;\n  transition: all 0.5s ease;\n  cursor: pointer;\n  position: absolute;\n  z-index: 5;\n}\n.it-program .it-development .collumns .base-info {\n  color: white;\n  background: black;\n  margin: 0px 5px 5px;\n  border-bottom-left-radius: 26px;\n  border-bottom-right-radius: 26px;\n}\n.it-program .it-development .collumns .base-info p {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvY29tcHV0ZXIvaXQtc3lzdGVtLXZpZXcvaXQtc3lzdGVtLXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXB1dGVyL2l0LXN5c3RlbS12aWV3L2l0LXN5c3RlbS12aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRE5BO0VBUUksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEYkE7RUFlTSxtQkFBQTtFQUNBLFlBQUE7QUNDTjtBRGpCQTtFQW9CTSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQU47QUR6QkE7RUE0QlEsWUFBQTtBQ0FSO0FENUJBO0VBZ0NRLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNEUjtBRG5DQTtFQXdDUSxrQkFBQTtFQUNBLE9BQUE7QUNGUjtBRHZDQTtFQTRDVSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGVjtBRDVDQTtFQW9ETSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTE47QURuREE7RUEyRFEsa0JBQUE7QUNMUjtBRHREQTtFQThEVSxVQUFBO0FDTFY7QUR6REE7RUFtRVEsT0FBQTtFQUNBLFdBQUE7QUNQUjtBRDdEQTtFQXVFVSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUFY7QURsRUE7RUE0RVksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1BaO0FEekVBO0VBc0ZRLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ1ZSO0FEaEZBO0VBNkZVLFNBQUE7QUNWViIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS12aWV3L2NvbXB1dGVyL2l0LXN5c3RlbS12aWV3L2l0LXN5c3RlbS12aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLml0LXByb2dyYW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgLml0LWRldmVsb3BtZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgLmVycm9yLW5vdGlmaWNhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICB0b3A6IDQwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBsZWZ0OiAyNSU7XG5cbiAgICAgIC5hdmF0YXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgfVxuXG4gICAgICAubWVzc2FnZSB7XG4gICAgICAgIGZsZXg6IDQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC5hY2NlcHQge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jb2xsdW1ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAudGl0bGUtbmFtZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcblxuICAgICAgICAuZXJyb3ItaWNvbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2xpY2staW5mbyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5jbGljay1hcmVhIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgLmNsb2NrLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJhc2UtaW5mbyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4IDVweCA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNnB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLml0LXByb2dyYW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uaXQtcHJvZ3JhbSAuaXQtZGV2ZWxvcG1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5pdC1wcm9ncmFtIC5pdC1kZXZlbG9wbWVudCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaXQtcHJvZ3JhbSAuaXQtZGV2ZWxvcG1lbnQgLmVycm9yLW5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogNDAlO1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiAyNSU7XG59XG4uaXQtcHJvZ3JhbSAuaXQtZGV2ZWxvcG1lbnQgLmVycm9yLW5vdGlmaWNhdGlvbiAuYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5pdC1wcm9ncmFtIC5pdC1kZXZlbG9wbWVudCAuZXJyb3Itbm90aWZpY2F0aW9uIC5tZXNzYWdlIHtcbiAgZmxleDogNDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pdC1wcm9ncmFtIC5pdC1kZXZlbG9wbWVudCAuZXJyb3Itbm90aWZpY2F0aW9uIC5hY2NlcHQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG59XG4uaXQtcHJvZ3JhbSAuaXQtZGV2ZWxvcG1lbnQgLmVycm9yLW5vdGlmaWNhdGlvbiAuYWNjZXB0IGltZyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXQtcHJvZ3JhbSAuaXQtZGV2ZWxvcG1lbnQgLmNvbGx1bW5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLml0LXByb2dyYW0gLml0LWRldmVsb3BtZW50IC5jb2xsdW1ucyAudGl0bGUtbmFtZSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5pdC1wcm9ncmFtIC5pdC1kZXZlbG9wbWVudCAuY29sbHVtbnMgLnRpdGxlLW5hbWUgLmVycm9yLWljb24ge1xuICBwYWRkaW5nOiAwO1xufVxuLml0LXByb2dyYW0gLml0LWRldmVsb3BtZW50IC5jb2xsdW1ucyAuY2xpY2staW5mbyB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLml0LXByb2dyYW0gLml0LWRldmVsb3BtZW50IC5jb2xsdW1ucyAuY2xpY2staW5mbyAuY2xpY2stYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pdC1wcm9ncmFtIC5pdC1kZXZlbG9wbWVudCAuY29sbHVtbnMgLmNsaWNrLWluZm8gLmNsaWNrLWFyZWEgLmNsb2NrLWljb24ge1xuICB3aWR0aDogODBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG59XG4uaXQtcHJvZ3JhbSAuaXQtZGV2ZWxvcG1lbnQgLmNvbGx1bW5zIC5iYXNlLWluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBtYXJnaW46IDBweCA1cHggNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjZweDtcbn1cbi5pdC1wcm9ncmFtIC5pdC1kZXZlbG9wbWVudCAuY29sbHVtbnMgLmJhc2UtaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/engine-view/computer/it-system-view/it-system-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/engine-view/computer/it-system-view/it-system-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ItSystemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItSystemViewComponent", function() { return ItSystemViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ItSystemViewComponent = /** @class */ (function () {
    function ItSystemViewComponent() {
        this.audio = new Audio('assets/music/click.mp3');
        this.closedProgramDEV = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeComputer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.workPercentage = window.sessionStorage.getItem("work");
        this.storeErrors = parseInt(window.sessionStorage.getItem("errors"));
        this.bugNotify = false;
        this.messageText = "Hi I got some problems with my computer. Can you come here pls?";
        this.messagesArr = [
            "Hi I got some problems with my computer. Can you come here pls?",
            "Hi, my PC is broken. Can you come up here?",
            "Please help! My PC is not working. Hurry!!",
            "Hi I think i got some virus here. I need you here.",
        ];
        this.arrayOfPercent = [6, 9, 11];
        this.positionT = (this.generatedRandomNumber(90)).toString() + '%';
        this.positionL = (this.generatedRandomNumber(90)).toString() + '%';
        this.availableClock = true;
        this.showClock = '100';
        this.counterEvery = 1000;
        this.secondsCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.counterEvery);
    }
    ItSystemViewComponent.prototype.ngOnInit = function () { };
    ItSystemViewComponent.prototype.setLocalStorageChecker = function () {
        var _this = this;
        this.localStorageChecker = this.secondsCounter.subscribe(function (val) { return _this.checkLocalStorage(); });
    };
    ItSystemViewComponent.prototype.closeDevelopment = function () {
        this.audio.play();
        this.showDEVProgram = "";
        this.closeComputer.emit(false);
        this.closedProgramDEV.emit(this.showDEVProgram);
    };
    ItSystemViewComponent.prototype.takeTime = function () {
        this.audio.play();
        this.setLocalStorageChecker();
        if (this.availableClock && !this.bugNotify) {
            this.percentNumber = parseInt(this.workPercentage);
            var number = this.generatedRandomNumber(3);
            this.percentNumber += this.arrayOfPercent[number];
            if (this.isItWorkDone(this.percentNumber)) {
                this.workPercentage = "100";
            }
            else {
                this.workPercentage = this.percentNumber;
            }
            this.showClock = '0';
            this.availableClock = false;
            this.generateNextClock();
            window.sessionStorage.setItem("work", this.workPercentage.toString());
        }
    };
    ItSystemViewComponent.prototype.showNotification = function () {
        this.messageText = this.messagesArr[this.generatedRandomNumber(this.messagesArr.length)];
        this.bugNotify = true;
        this.localStorageChecker.unsubscribe();
    };
    ItSystemViewComponent.prototype.acceptBug = function () {
        this.audio.play();
        this.bugNotify = false;
        this.showDEVProgram = "";
        this.closeComputer.emit(true);
        this.localStorageChecker.unsubscribe();
        this.closedProgramDEV.emit(this.showDEVProgram);
    };
    ItSystemViewComponent.prototype.rejectBug = function () {
        this.audio.play();
        var currentFame = parseInt(window.sessionStorage.getItem("fame"));
        if (currentFame > 0) {
            currentFame -= 20;
        }
        window.sessionStorage.setItem("fame", currentFame.toString());
        this.bugNotify = false;
        this.localStorageChecker.unsubscribe();
    };
    //------------------------------
    ItSystemViewComponent.prototype.isItWorkDone = function (progress) {
        if (progress >= 100) {
            return true;
        }
        return false;
    };
    ItSystemViewComponent.prototype.checkLocalStorage = function () {
        var currentErrors = parseInt(window.sessionStorage.getItem("errors"));
        if (currentErrors !== this.storeErrors) {
            this.showNotification();
        }
    };
    ItSystemViewComponent.prototype.generateNextClock = function () {
        var _this = this;
        this.generateClock = this.secondsCounter.subscribe();
        setTimeout(function () { return _this.generateHiddenClock(); }, 5000);
    };
    ItSystemViewComponent.prototype.generatedRandomNumber = function (numberOfitems) {
        var randomIndx = Math.floor(Math.random() * (numberOfitems));
        return randomIndx;
    };
    ItSystemViewComponent.prototype.generateHiddenClock = function () {
        this.showClock = '100';
        this.availableClock = true;
        this.positionT = (this.generatedRandomNumber(90)).toString() + '%';
        this.positionL = (this.generatedRandomNumber(90)).toString() + '%';
        this.generateClock.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ItSystemViewComponent.prototype, "showDEVProgram", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItSystemViewComponent.prototype, "closedProgramDEV", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItSystemViewComponent.prototype, "closeComputer", void 0);
    ItSystemViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-it-system-view',
            template: __webpack_require__(/*! ./it-system-view.component.html */ "./src/app/engine-view/computer/it-system-view/it-system-view.component.html"),
            styles: [__webpack_require__(/*! ./it-system-view.component.less */ "./src/app/engine-view/computer/it-system-view/it-system-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItSystemViewComponent);
    return ItSystemViewComponent;
}());



/***/ }),

/***/ "./src/app/engine-view/engine-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/engine-view/engine-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"time-result\">\n  <h1>LEVEL: {{levelNumber}}</h1>\n  <h1>TIME: {{hoursClock}}h</h1>\n  <h1>WORK: {{workPercentage}}%</h1>\n  <h1>FAME: {{employeFame}}%</h1>\n  <h1>BUGS: {{bugsCatched}}</h1>\n</div>\n<app-start-game [isGameStarted]=\"isGameStarted\" [levelNumber]=\"levelNumber\"\n(closedStartGame)=\"receivedClosedStartGame($event)\">\n</app-start-game>\n<app-game-over [isGameOver]=\"isGameOver\" [workPercentage]=\"workPercentage\"\n[employeFame]=\"employeFame\" [bugsCatched]=\"bugsCatched\" [workDone]=\"workDone\"\n(closedGameOver)=\"receivedClosedGameOver($event)\">\n</app-game-over>\n<app-computer-desktop-view (computerClosed)=\"receivedClosedWindow($event)\"\n(solvedError)=\"receivedErrorId($event)\"[errorId]=\"errorId\" [isItView]=\"isItView\"\n[showComputer]=\"showError\">\n</app-computer-desktop-view>\n\n<div class=\"space-building\">\n  <div class=\"building animated 1 fadeIn\">\n    <div class=\"floors\">\n      <div *ngIf=\"lvl4\" class=\"floor fourth-floor\" id=\"5\" (click)=\"moveToFloor(5)\">\n        <div [style.opacity]=\"invisibleGuyClasses[5] ? '1' : '0'\">\n          <app-person [isMoved]=\"isMoved\"></app-person>\n        </div>\n        <div class=\"windows-section\">\n          <div class=\"window\"><div></div><div></div><div></div><div></div></div>\n        </div>\n        <div class=\"components\">\n          <div class=\"first-end\"></div>\n          <div>\n            <img *ngIf=\"bossError\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Boss PC', 5, 6)\" class=\"error-warning animated infinite heartBeat\">\n            <app-boss-table></app-boss-table>\n          </div>\n          <div class=\"second-end\"></div>\n        </div>\n        <div class=\"deck\"></div>\n      </div>\n      <div *ngIf=\"lvl3\" class=\"floor third-floor\" id=\"4\" (click)=\"moveToFloor(4)\">\n        <div [style.opacity]=\"invisibleGuyClasses[4] ? '1' : '0'\">\n          <app-person [isMoved]=\"isMoved\"></app-person>\n        </div>\n        <div class=\"windows-section\">\n          <div class=\"window\"><div></div><div></div></div>\n          <div class=\"window\"><div></div><div></div></div>\n        </div>\n        <div class=\"components\">\n          <div class=\"first-end\"></div>\n          <div>\n            <img *ngIf=\"financeError\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Finance PC', 4, 5)\" class=\"error-warning animated infinite heartBeat\">\n            <app-work-table></app-work-table>\n          </div>\n          <div>\n            <img *ngIf=\"financeError2\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Finance PC', 4, 4)\" class=\"error-warning animated infinite heartBeat\">\n            <app-work-table></app-work-table>\n          </div>\n          <div class=\"second-end\"></div>\n        </div>\n        <div class=\"deck\"></div>\n      </div>\n      <div *ngIf=\"lvl2\" class=\"floor second-floor\" id=\"3\" (click)=\"moveToFloor(3)\">\n        <div [style.opacity]=\"invisibleGuyClasses[3] ? '1' : '0'\">\n          <app-person [isMoved]=\"isMoved\"></app-person>\n        </div>\n        <div class=\"windows-section\">\n          <div class=\"window\"><div></div><div></div></div>\n          <div class=\"window\"><div></div><div></div></div>\n        </div>\n        <div class=\"components\">\n          <div class=\"first-end\"></div>\n          <div>\n            <img *ngIf=\"marketingError\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Marketing PC', 3, 3)\" class=\"error-warning animated infinite heartBeat\">\n            <app-work-table></app-work-table>\n          </div>\n          <div>\n            <img *ngIf=\"marketingError2\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Marketing PC', 3, 2)\" class=\"error-warning animated infinite heartBeat\">\n            <app-work-table></app-work-table>\n          </div>\n          <div class=\"second-end\"></div>\n        </div>\n        <div class=\"deck\"></div>\n      </div>\n      <div class=\"floor first-floor\" id=\"2\" (click)=\"moveToFloor(2)\">\n        <div [style.opacity]=\"invisibleGuyClasses[2] ? '1' : '0'\">\n          <app-person [isMoved]=\"isMoved\"></app-person>\n        </div>\n        <div class=\"windows-section\">\n          <div class=\"window\"><div></div><div></div></div>\n          <div class=\"window\"><div></div><div></div></div>\n        </div>\n        <div class=\"components\">\n          <div class=\"first-end\"></div>\n          <img src=\"assets/plant2.png\" class=\"component office-plant\">\n          <div>\n            <img *ngIf=\"managmentError\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Managment PC', 2, 1)\" class=\"error-warning animated infinite heartBeat\">\n            <app-work-table></app-work-table>\n          </div>\n          <div class=\"second-end\"></div>\n        </div>\n        <div class=\"deck\"></div>\n      </div>\n      <div class=\"floor zero-floor\" id=\"1\" (click)=\"moveToFloor(1)\">\n        <div [style.opacity]=\"invisibleGuyClasses[1] ? '1' : '0'\">\n          <app-person [isMoved]=\"isMoved\"></app-person>\n        </div>\n        <div class=\"title-name\">\n          <h1>{{ receptionTitle }}</h1>\n        </div>\n        <div class=\"components\">\n          <div class=\"first-end\"></div>\n          <img src=\"assets/plant2.png\" class=\"component office-plant\">\n          <div>\n            <img *ngIf=\"receptionError\" src=\"assets/error.png\" alt=\"error\" (click)=\"openError('Reception PC', 1, 0)\" class=\"error-warning animated infinite heartBeat\">\n            <app-reception></app-reception>\n          </div>\n          <img src=\"assets/plant2.png\" class=\"component office-plant\">\n          <div class=\"second-end\"></div>\n        </div>\n        <div class=\"deck\"></div>\n      </div>\n      <div class=\"floor down-floor\" id=\"0\" (click)=\"moveToFloor(0)\">\n        <div [style.opacity]=\"invisibleGuyClasses[0] ? '1' : '0'\">\n          <app-person [isMoved]=\"isMoved\"></app-person>\n        </div>\n        <div class=\"title-name\">\n          <h1>{{ itSectorTitle }}</h1>\n        </div>\n        <div class=\"components\">\n          <div class=\"first-end\"></div>\n          <div>\n            <img src=\"assets/ErrorSolvingImg/it.png\" alt=\"error\" (click)=\"openError('IT guy PC', 0, 7)\" class=\"error-warning itwork-warning animated infinite heartBeat\">\n            <app-it-table></app-it-table>\n          </div>\n          <div class=\"second-end\"></div>\n        </div>\n        <div class=\"deck\"></div>\n      </div>\n    </div>\n\n    <div class=\"elevator-place\">\n      <div class=\"elevator\" id=\"elevator\" [style.top]=\"elevatorHeight\" (click)=\"enterToElevator()\">\n        <div class=\"elevator-door\" [style.width]=\"elevatorDoorWidth\" [style.transition-delay]=\"elevatorDoorDelay\">\n          <div></div>\n        </div>\n        <div class=\"elevator-space\">\n          <div class=\"elevator-paint\">\n            <div class=\"elevator-control\">\n              <div class=\"display\"></div>\n              <div class=\"elevator-button\"></div>\n              <div class=\"elevator-button\"></div>\n              <div class=\"elevator-button\"></div>\n              <div class=\"elevator-button\"></div>\n              <div class=\"elevator-button\"></div>\n            </div>\n          </div>\n          <div class=\"deck\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/engine-view/engine-view.component.less":
/*!********************************************************!*\
  !*** ./src/app/engine-view/engine-view.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".time-result {\n  position: fixed;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  color: white;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.time-result h1 {\n  font-size: 20px;\n  flex: 1;\n  margin: 5px;\n}\n.space-building {\n  position: absolute;\n  width: 100%;\n  top: 25%;\n}\n.space-building .building {\n  display: flex;\n  width: 50%;\n  margin: 20px auto;\n  height: 100%;\n  border: 5px solid black;\n  background-color: white;\n}\n.space-building .building .floors {\n  flex: 4;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.space-building .building .floors .floor {\n  flex: 1;\n  width: 100%;\n  height: auto;\n  min-height: 150px;\n  border: 5px solid black;\n  position: relative;\n}\n.space-building .building .floors .floor .title-name {\n  text-align: center;\n}\n.space-building .building .floors .floor .windows-section {\n  display: flex;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.space-building .building .floors .floor .windows-section .window {\n  max-width: 150px;\n  flex: 1;\n  display: flex;\n  height: 70%;\n  border: 3px solid black;\n  margin: 0 auto;\n  margin-top: 10px;\n  background-image: url('clouds.png');\n  background-position: center;\n  background-size: contain;\n}\n.space-building .building .floors .floor .windows-section .window div {\n  flex: 1;\n  height: 100%;\n  background: transparent;\n  border: 1px solid black;\n}\n.space-building .building .floors .down-floor {\n  background: #585858;\n}\n.space-building .building .floors .first-floor {\n  background: darkseagreen;\n}\n.space-building .building .floors .second-floor {\n  background: #00CED1;\n}\n.space-building .building .floors .third-floor {\n  background: #fdfd96;\n}\n.space-building .building .floors .fourth-floor {\n  background: #8b5a2b;\n}\n.space-building .building .floors .fourth-floor .windows-section .window {\n  max-width: none;\n  margin: 10px 10px;\n}\n.space-building .building .deck {\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  background: gray;\n  bottom: 0;\n  z-index: 0;\n}\n.space-building .building .components {\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  height: 35%;\n  width: 100%;\n}\n.space-building .building .components .first-end,\n.space-building .building .components .second-end {\n  flex: 1;\n  background: transparent;\n}\n.space-building .building .components .component {\n  width: 80px;\n  height: auto;\n  z-index: 1;\n  margin: 0 auto;\n}\n.space-building .building .components .itwork-warning {\n  width: 30px;\n  border-radius: 0;\n  background: transparent;\n}\n.space-building .building .elevator-place {\n  flex: 1;\n  width: 100%;\n  background: black;\n  position: relative;\n}\n.space-building .building .elevator-place .elevator {\n  width: 100%;\n  border: 5px solid black;\n  border-left: 0;\n  border-right: 0;\n  min-height: 150px;\n  transition: all 1s ease;\n  position: absolute;\n  display: flex;\n}\n.space-building .building .elevator-place .elevator .elevator-door {\n  height: 100%;\n  background-color: darkgray;\n  transition: all 1s ease;\n  z-index: 100;\n  right: 0;\n  position: absolute;\n}\n.space-building .building .elevator-place .elevator .elevator-door div {\n  width: 50%;\n  height: 100%;\n  border: 1px solid black;\n}\n.space-building .building .elevator-place .elevator .elevator-space {\n  width: 100%;\n}\n.space-building .building .elevator-place .elevator .elevator-space .elevator-paint {\n  background-color: #5a9c97;\n  width: 100%;\n  height: 100%;\n}\n.space-building .building .elevator-place .elevator .elevator-space .elevator-paint .elevator-control {\n  max-width: 30px;\n  margin: 0 auto;\n  height: 100%;\n  background-color: silver;\n  padding: 5px;\n}\n.space-building .building .elevator-place .elevator .elevator-space .elevator-paint .elevator-control .display {\n  width: 100%;\n  height: 30px;\n  background-color: black;\n}\n.space-building .building .elevator-place .elevator .elevator-space .elevator-paint .elevator-control .elevator-button {\n  width: 10px;\n  height: 10px;\n  border: 1px solid black;\n  border-radius: 50px;\n  margin: 0 auto;\n  margin-top: 2px;\n}\n.space-building .building .elevator-place .elevator .elevator-space .deck {\n  background: #564444;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZW5naW5lLXZpZXcvZW5naW5lLXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2VuZ2luZS12aWV3L2VuZ2luZS12aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0Y7QURSQTtFQVVJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDREY7QURGQTtFQU1JLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0RKO0FEVkE7RUFjTSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0ROO0FEaEJBO0VBb0JRLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FEeEJBO0VBNEJVLGtCQUFBO0FDRFY7QUQzQkE7RUFnQ1UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZWO0FEbkNBO0VBd0NZLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNGWjtBRC9DQTtFQW9EYyxPQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNGZDtBRHJEQTtFQThEUSxtQkFBQTtBQ05SO0FEeERBO0VBa0VRLHdCQUFBO0FDUFI7QUQzREE7RUFzRVEsbUJBQUE7QUNSUjtBRDlEQTtFQTBFUSxtQkFBQTtBQ1RSO0FEakVBO0VBOEVRLG1CQUFBO0FDVlI7QURwRUE7RUFpRlUsZUFBQTtFQUNBLGlCQUFBO0FDVlY7QUR4RUE7RUF3Rk0sWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNiTjtBRGhGQTtFQWlHTSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNkTjtBRHZGQTs7RUF5R1EsT0FBQTtFQUNBLHVCQUFBO0FDZFI7QUQ1RkE7RUE4R1EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2ZSO0FEbEdBO0VBcUhRLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDaEJSO0FEdkdBO0VBNEhNLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2xCTjtBRDdHQTtFQWtJUSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNsQlI7QUR2SEE7RUE0SVUsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDbEJWO0FEL0hBO0VBb0pZLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNsQlo7QURwSUE7RUEySlUsV0FBQTtBQ3BCVjtBRHZJQTtFQThKWSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDcEJaO0FENUlBO0VBbUtjLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ3BCZDtBRG5KQTtFQTBLZ0IsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ3BCaEI7QUR4SkE7RUFnTGdCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDckJoQjtBRGhLQTtFQTJMWSxtQkFBQTtBQ3hCWiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS12aWV3L2VuZ2luZS12aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWUtcmVzdWx0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxufVxuXG4uc3BhY2UtYnVpbGRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDI1JTtcblxuICAuYnVpbGRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAuZmxvb3JzIHtcbiAgICAgIGZsZXg6IDQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuZmxvb3Ige1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAudGl0bGUtbmFtZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpbmRvd3Mtc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMDtcblxuICAgICAgICAgIC53aW5kb3cge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2Nsb3Vkcy5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kb3duLWZsb29yIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzU4NTg1ODtcbiAgICAgIH1cblxuICAgICAgLmZpcnN0LWZsb29yIHtcbiAgICAgICAgYmFja2dyb3VuZDogZGFya3NlYWdyZWVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWZsb29yIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwQ0VEMTtcbiAgICAgIH1cblxuICAgICAgLnRoaXJkLWZsb29yIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZmQ5NjtcbiAgICAgIH1cblxuICAgICAgLmZvdXJ0aC1mbG9vciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4YjVhMmI7XG5cbiAgICAgICAgLndpbmRvd3Mtc2VjdGlvbiAud2luZG93IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVjayB7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICBib3R0b206IDA7XG4gICAgICB6LWluZGV4OiAwO1xuICAgIH1cblxuICAgIC5jb21wb25lbnRzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDM1JTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuZmlyc3QtZW5kLFxuICAgICAgLnNlY29uZC1lbmQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLmNvbXBvbmVudCB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuaXR3b3JrLXdhcm5pbmcge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVsZXZhdG9yLXBsYWNlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuZWxldmF0b3Ige1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5lbGV2YXRvci1kb29yIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmVsZXZhdG9yLXNwYWNlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIC5lbGV2YXRvci1wYWludCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE5Yzk3O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgIC5lbGV2YXRvci1jb250cm9sIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgICAgICAgICAuZGlzcGxheSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmVsZXZhdG9yLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRlY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU2NDQ0NDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi50aW1lLXJlc3VsdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi50aW1lLXJlc3VsdCBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiA1cHg7XG59XG4uc3BhY2UtYnVpbGRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDI1JTtcbn1cbi5zcGFjZS1idWlsZGluZyAuYnVpbGRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMge1xuICBmbGV4OiA0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zcGFjZS1idWlsZGluZyAuYnVpbGRpbmcgLmZsb29ycyAuZmxvb3Ige1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zcGFjZS1idWlsZGluZyAuYnVpbGRpbmcgLmZsb29ycyAuZmxvb3IgLnRpdGxlLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMgLmZsb29yIC53aW5kb3dzLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMgLmZsb29yIC53aW5kb3dzLXNlY3Rpb24gLndpbmRvdyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzAlO1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2Nsb3Vkcy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMgLmZsb29yIC53aW5kb3dzLXNlY3Rpb24gLndpbmRvdyBkaXYge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5zcGFjZS1idWlsZGluZyAuYnVpbGRpbmcgLmZsb29ycyAuZG93bi1mbG9vciB7XG4gIGJhY2tncm91bmQ6ICM1ODU4NTg7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMgLmZpcnN0LWZsb29yIHtcbiAgYmFja2dyb3VuZDogZGFya3NlYWdyZWVuO1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZmxvb3JzIC5zZWNvbmQtZmxvb3Ige1xuICBiYWNrZ3JvdW5kOiAjMDBDRUQxO1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZmxvb3JzIC50aGlyZC1mbG9vciB7XG4gIGJhY2tncm91bmQ6ICNmZGZkOTY7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMgLmZvdXJ0aC1mbG9vciB7XG4gIGJhY2tncm91bmQ6ICM4YjVhMmI7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5mbG9vcnMgLmZvdXJ0aC1mbG9vciAud2luZG93cy1zZWN0aW9uIC53aW5kb3cge1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZGVjayB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAwO1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuY29tcG9uZW50cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM1JTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5jb21wb25lbnRzIC5maXJzdC1lbmQsXG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5jb21wb25lbnRzIC5zZWNvbmQtZW5kIHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5jb21wb25lbnRzIC5jb21wb25lbnQge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zcGFjZS1idWlsZGluZyAuYnVpbGRpbmcgLmNvbXBvbmVudHMgLml0d29yay13YXJuaW5nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZWxldmF0b3ItcGxhY2Uge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zcGFjZS1idWlsZGluZyAuYnVpbGRpbmcgLmVsZXZhdG9yLXBsYWNlIC5lbGV2YXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5lbGV2YXRvci1wbGFjZSAuZWxldmF0b3IgLmVsZXZhdG9yLWRvb3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgei1pbmRleDogMTAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZWxldmF0b3ItcGxhY2UgLmVsZXZhdG9yIC5lbGV2YXRvci1kb29yIGRpdiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5lbGV2YXRvci1wbGFjZSAuZWxldmF0b3IgLmVsZXZhdG9yLXNwYWNlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5lbGV2YXRvci1wbGFjZSAuZWxldmF0b3IgLmVsZXZhdG9yLXNwYWNlIC5lbGV2YXRvci1wYWludCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTljOTc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5lbGV2YXRvci1wbGFjZSAuZWxldmF0b3IgLmVsZXZhdG9yLXNwYWNlIC5lbGV2YXRvci1wYWludCAuZWxldmF0b3ItY29udHJvbCB7XG4gIG1heC13aWR0aDogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uc3BhY2UtYnVpbGRpbmcgLmJ1aWxkaW5nIC5lbGV2YXRvci1wbGFjZSAuZWxldmF0b3IgLmVsZXZhdG9yLXNwYWNlIC5lbGV2YXRvci1wYWludCAuZWxldmF0b3ItY29udHJvbCAuZGlzcGxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZWxldmF0b3ItcGxhY2UgLmVsZXZhdG9yIC5lbGV2YXRvci1zcGFjZSAuZWxldmF0b3ItcGFpbnQgLmVsZXZhdG9yLWNvbnRyb2wgLmVsZXZhdG9yLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLnNwYWNlLWJ1aWxkaW5nIC5idWlsZGluZyAuZWxldmF0b3ItcGxhY2UgLmVsZXZhdG9yIC5lbGV2YXRvci1zcGFjZSAuZGVjayB7XG4gIGJhY2tncm91bmQ6ICM1NjQ0NDQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/engine-view/engine-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/engine-view/engine-view.component.ts ***!
  \******************************************************/
/*! exports provided: EngineViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineViewComponent", function() { return EngineViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var EngineViewComponent = /** @class */ (function () {
    //----------------------------
    function EngineViewComponent() {
        this.audio = new Audio('assets/music/click.mp3');
        this.errorId = 0;
        this.setHours = 8;
        this.hoursClock = this.setHours;
        this.showError = "";
        this.levelNumber = "1";
        this.bugsCatched = "0";
        this.workPercentage = "0";
        this.employeFame = "100";
        this.resultPoints = "0";
        this.elevatorHeight = "0";
        this.elevatorDoorWidth = "5%";
        this.elevatorDoorDelay = "1.5s";
        this.activeIndex = 0;
        this.targetIndex = 0;
        this.availableErrors = 2;
        this.availableErrorsPerlvl = 1;
        this.isItView = false;
        this.isGameOver = false;
        this.isGameStarted = true;
        this.itError = false;
        this.isClickDisabled = false;
        this.workDone = false;
        this.lvl4 = false;
        this.lvl3 = false;
        this.lvl2 = false;
        this.visibleOnFourth = false;
        this.visibleOnThird = false;
        this.visibleOnSecond = false;
        this.visibleOnFirst = false;
        this.visibleOnZero = false;
        this.visibleOnDown = false;
        this.visibleOnElevator = false;
        this.bossError = false;
        this.financeError = false;
        this.financeError2 = false;
        this.marketingError = false;
        this.marketingError2 = false;
        this.managmentError = false;
        this.receptionError = false;
        this.counterEvery = 21000;
        this.timeGeneratedErrors = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.counterEvery);
        this.counterEvery2 = 1000;
        this.timeElevatorDisable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.counterEvery2);
        this.timeCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(20000);
        this.receptionTitle = "Reception";
        this.itSectorTitle = "IT sector";
        this.isMoved = "notmoved";
        this.arrOfFloors = [];
        this.invisibleGuyClasses = [];
        this.arrayOfGeneratedErrors = [];
    }
    EngineViewComponent.prototype.ngOnInit = function () {
        window.sessionStorage.setItem("bugs", "0");
        window.sessionStorage.setItem("work", "0");
        window.sessionStorage.setItem("fame", "100");
        window.sessionStorage.setItem("level", "0");
        window.sessionStorage.setItem("errors", "0");
    };
    EngineViewComponent.prototype.enterToElevator = function () {
        var _this = this;
        this.audio.play();
        if (!this.isClickDisabled) {
            this.isClickDisabled = true;
            this.isMoved = "moved";
            this.elevatorDoorWidth = "100%";
            this.elevatorDoorDelay = "0s";
            this.timeDisableActions = this.timeElevatorDisable.subscribe();
            setTimeout(function () { return _this.enableActions(); }, 1500);
        }
    };
    EngineViewComponent.prototype.timeChanger = function () {
        this.hoursClock = this.hoursClock - 0.5;
        if (this.hoursClock === 0) {
            this.isGameOver = true;
            var bugs = window.sessionStorage.getItem("bugs");
            var work = window.sessionStorage.getItem("work");
            var fame = window.sessionStorage.getItem("fame");
            var points = parseInt(bugs) + parseInt(work) + parseInt(fame);
            if (work >= "100") {
                this.workDone = true;
            }
            else {
                this.workDone = false;
            }
            this.resultPoints = points.toString();
            this.timeHours.unsubscribe();
        }
    };
    EngineViewComponent.prototype.enableActions = function () {
        this.isClickDisabled = false;
        this.timeDisableActions.unsubscribe();
    };
    EngineViewComponent.prototype.moveToFloor = function (indexFloor) {
        if (this.isMoved === "notmoved" || this.isClickDisabled) {
            return;
        }
        this.audio.play();
        this.targetIndex = indexFloor;
        switch (indexFloor) {
            case 0:
                this.elevatorHeight = (this.positionFloorDown).toString() + 'px';
                break;
            case 1:
                this.elevatorHeight = (this.positionFloorZero).toString() + 'px';
                break;
            case 2:
                this.elevatorHeight = (this.positionFloorOne).toString() + 'px';
                break;
            case 3:
                this.elevatorHeight = (this.positionFloorTwo).toString() + 'px';
                break;
            case 4:
                this.elevatorHeight = (this.positionFloorThree).toString() + 'px';
                break;
            case 5:
                this.elevatorHeight = (this.positionFloorFourth).toString() + 'px';
                break;
        }
        this.isMoved = "notmoved";
        this.elevatorDoorWidth = "5%";
        this.elevatorDoorDelay = "1.5s";
        this.activeIndex = indexFloor;
        this.makeItGuyVisibleOnFloor();
    };
    EngineViewComponent.prototype.getPositionsOfFloors = function () {
        this.downFloor = document.getElementById("0");
        this.zeroFloor = document.getElementById("1");
        this.oneFloor = document.getElementById("2");
        var lvl = window.sessionStorage.getItem("level");
        if (lvl == "1") {
            this.levelNumber = "2";
            this.lvl2 = true;
            this.twoFloor = document.getElementById("3");
            this.positionFloorTwo = this.twoFloor.offsetTop - 25;
            this.availableErrors = 4;
            this.availableErrorsPerlvl = 2;
        }
        else if (lvl == "2") {
            this.levelNumber = "3";
            this.lvl3 = true;
            this.thirdFloor = document.getElementById("4");
            this.positionFloorThree = this.thirdFloor.offsetTop - 25;
            this.availableErrors = 6;
            this.availableErrorsPerlvl = 3;
        }
        else if (lvl == "3") {
            this.levelNumber = "4";
            this.lvl4 = true;
            this.fourthFloor = document.getElementById("5");
            this.positionFloorFourth = this.fourthFloor.offsetTop - 25;
            this.availableErrors = 7;
            this.availableErrorsPerlvl = 4;
        }
        else if (lvl == "4") {
            this.levelNumber = "5";
            this.availableErrorsPerlvl = 5;
        }
        this.elevatorFloor = document.getElementById("elevator");
        this.positionFloorDown = this.downFloor.offsetTop - 25;
        this.positionFloorZero = this.zeroFloor.offsetTop - 25;
        this.positionFloorOne = this.oneFloor.offsetTop - 25;
    };
    EngineViewComponent.prototype.setDefaultValue = function () {
        this.elevatorHeight = (this.positionFloorDown).toString() + 'px';
        this.arrOfFloors = [
            this.downFloor,
            this.zeroFloor,
            this.oneFloor,
            this.twoFloor,
            this.thirdFloor,
            this.fourthFloor
        ];
        this.invisibleGuyClasses = [
            this.visibleOnDown = true,
            this.visibleOnZero = false,
            this.visibleOnFirst = false,
            this.visibleOnSecond = false,
            this.visibleOnThird = false,
            this.visibleOnFourth = false
        ];
    };
    EngineViewComponent.prototype.makeItGuyVisibleOnFloor = function () {
        for (var floor in this.invisibleGuyClasses) {
            if (this.activeIndex !== parseInt(floor)) {
                this.invisibleGuyClasses[floor] = false;
            }
            else {
                this.invisibleGuyClasses[floor] = true;
            }
        }
    };
    EngineViewComponent.prototype.checkIfItGuyIsOnFloor = function (floor) {
        if (this.activeIndex === parseInt(floor)) {
            return true;
        }
        else {
            return false;
        }
    };
    EngineViewComponent.prototype.showOrHideError = function (indexError, boolValue) {
        switch (indexError) {
            case 0:
                this.receptionError = boolValue;
                break;
            case 1:
                this.managmentError = boolValue;
                break;
            case 2:
                this.marketingError2 = boolValue;
                break;
            case 3:
                this.marketingError = boolValue;
                break;
            case 4:
                this.financeError2 = boolValue;
                break;
            case 5:
                this.financeError = boolValue;
                break;
            case 6:
                this.bossError = boolValue;
                break;
        }
    };
    EngineViewComponent.prototype.storedErrors = function (needIncrese) {
        var storeNewErrors = parseInt(window.sessionStorage.getItem("errors"));
        if (needIncrese) {
            storeNewErrors += 1;
        }
        else {
            storeNewErrors -= 1;
        }
        var storeErrors = storeNewErrors.toString();
        window.sessionStorage.setItem("errors", storeErrors);
    };
    EngineViewComponent.prototype.chooseRandomError = function () {
        var randomIndx = Math.floor(Math.random() * (this.availableErrors));
        var generated = false;
        if (this.arrayOfGeneratedErrors.length > 0) {
            for (var i = 0; i <= (this.arrayOfGeneratedErrors.length - 1); i += 1) {
                if (this.arrayOfGeneratedErrors[i] === randomIndx) {
                    generated = true;
                }
            }
        }
        if (!generated && (this.arrayOfGeneratedErrors.length < this.availableErrorsPerlvl)) {
            this.arrayOfGeneratedErrors.push(randomIndx);
            this.storedErrors(true);
        }
        if (this.arrayOfGeneratedErrors.length > 0) {
            for (var e = 0; e <= (this.arrayOfGeneratedErrors.length - 1); e += 1) {
                this.showOrHideError(this.arrayOfGeneratedErrors[e], true);
            }
        }
    };
    EngineViewComponent.prototype.clearAllErrors = function () {
        for (var e = 0; e <= 6; e += 1) {
            this.showOrHideError(e, false);
        }
    };
    EngineViewComponent.prototype.openError = function (typeOfTable, floorIdx, errorIdx) {
        this.audio.play();
        if (errorIdx === 7) {
            this.isItView = true;
        }
        else {
            this.isItView = false;
            this.timeToErrors.unsubscribe();
        }
        if (this.checkIfItGuyIsOnFloor(floorIdx)) {
            this.showError = typeOfTable;
            this.errorId = errorIdx;
        }
    };
    EngineViewComponent.prototype.receivedClosedWindow = function ($event) {
        this.showError = $event;
        this.bugsCatched = window.sessionStorage.getItem("bugs");
        this.workPercentage = window.sessionStorage.getItem("work");
        this.employeFame = window.sessionStorage.getItem("fame");
    };
    EngineViewComponent.prototype.receivedClosedStartGame = function ($event) {
        var _this = this;
        this.getPositionsOfFloors();
        this.setDefaultValue();
        this.hoursClock = this.setHours;
        this.timeToErrors = this.timeGeneratedErrors.subscribe(function (val) { return _this.chooseRandomError(); });
        this.timeHours = this.timeCounter.subscribe(function (val) { return _this.timeChanger(); });
        this.isGameStarted = $event;
    };
    EngineViewComponent.prototype.receivedClosedGameOver = function ($event) {
        window.sessionStorage.setItem("bugs", "0");
        window.sessionStorage.setItem("work", "0");
        window.sessionStorage.setItem("fame", "100");
        window.sessionStorage.setItem("errors", "0");
        this.clearAllErrors();
        this.isGameOver = $event;
        this.isGameStarted = true;
    };
    EngineViewComponent.prototype.receivedErrorId = function ($event) {
        var _this = this;
        this.bugsCatched = window.sessionStorage.getItem("bugs");
        this.workPercentage = window.sessionStorage.getItem("work");
        this.employeFame = window.sessionStorage.getItem("fame");
        this.counterEvery = 30000;
        this.timeToErrors = this.timeGeneratedErrors.subscribe(function (val) { return _this.chooseRandomError(); });
        var idxValue = this.arrayOfGeneratedErrors.indexOf($event);
        if (idxValue !== -1) {
            this.storedErrors(false);
            this.arrayOfGeneratedErrors.splice(idxValue, 1);
            this.clearAllErrors();
        }
        if (this.arrayOfGeneratedErrors.length > 0) {
            for (var e = 0; e <= (this.arrayOfGeneratedErrors.length - 1); e += 1) {
                this.showOrHideError(this.arrayOfGeneratedErrors[e], true);
            }
        }
    };
    EngineViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-engine-view',
            template: __webpack_require__(/*! ./engine-view.component.html */ "./src/app/engine-view/engine-view.component.html"),
            styles: [__webpack_require__(/*! ./engine-view.component.less */ "./src/app/engine-view/engine-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EngineViewComponent);
    return EngineViewComponent;
}());



/***/ }),

/***/ "./src/app/game-over/game-over.component.html":
/*!****************************************************!*\
  !*** ./src/app/game-over/game-over.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isGameOver\" class=\"popup-window-view\">\n  <div class=\"popup animated bounceIn\">\n    <div class=\"results\">\n      <h3 class=\"animated 1 fadeIn\">{{resultTitle}}</h3>\n      <div *ngIf=\"workDone\" class=\"animated 1 fadeIn\">\n        <div class=\"statistic\">\n          <div class=\"stat\">\n            <p>Work copleted</p>\n            <span>{{workPercentage}}</span>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"collectPoints(0)\"\n              [disabled]=\"colWork\" name=\"button\">{{collectBtn}}\n            </button>\n          </div>\n          <div class=\"stat\">\n            <p>Fame earned</p>\n            <span>{{employeFame}}</span>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"collectPoints(1)\"\n              [disabled]=\"colFame\" name=\"button\">{{collectBtn}}\n            </button>\n          </div>\n          <div class=\"stat\">\n            <p>Bugs catched</p>\n            <span>{{bugsCatched}}</span>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"collectPoints(2)\"\n              [disabled]=\"colBugs\" name=\"button\">{{collectBtn}}\n            </button>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"workDone\" class=\"animated 1 fadeIn points\">\n        <div class=\"graph\">\n          <div class=\"coath\">\n            <div class=\"bugs-points\" [style.height]=\"graphBugs\"></div>\n            <div class=\"fame-points\" [style.height]=\"graphFame\"></div>\n            <div class=\"work-points\" [style.height]=\"graphWork\"></div>\n          </div>\n        </div>\n        <div class=\"my-points\">\n          <p>Your points</p>\n          <span>{{resultPoints}}</span>\n        </div>\n      </div>\n      <div *ngIf=\"!workDone\" class=\"animated 1 fadeIn error-view\">\n        <span>Your work is not finished. Start again</span>\n      </div>\n      <div class=\"animated 2 fadeIn result-btn\">\n        <button type=\"button\" class=\"btn btn-primary\" name=\"button\" (click)=\"replayLevel()\">Replay</button>\n        <button type=\"button\" *ngIf=\"workDone\" class=\"btn btn-primary\" name=\"button\" (click)=\"nextLevel()\">Next</button>\n      </div>\n    </div>\n    <img class=\"popup-background\" src=\"assets/errorBck.jpg\" alt=\"bck\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/game-over/game-over.component.less":
/*!****************************************************!*\
  !*** ./src/app/game-over/game-over.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: black;\n  flex-direction: column;\n  padding: 10px;\n  margin: 0 auto;\n}\n.results h3 {\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  padding: 5px;\n  margin: 0;\n}\n.results .error-view {\n  padding: 20px 10px;\n}\n.results .statistic {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n.results .statistic .stat {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.results .statistic .stat p {\n  flex: 1;\n  padding: 0 5px;\n  margin: 0;\n}\n.results .statistic .stat span {\n  flex: 1;\n  padding: 0 5px;\n}\n.results .points {\n  padding-top: 10px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.results .points .graph {\n  flex: 1;\n}\n.results .points .graph .coath {\n  width: 25%;\n  height: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  border-radius: 10px;\n  margin: 0 auto;\n  border: 0.5px solid black;\n}\n.results .points .graph .coath .bugs-points {\n  background: red;\n  transition: all 1s ease;\n}\n.results .points .graph .coath .fame-points {\n  background: green;\n  transition: all 1s ease;\n}\n.results .points .graph .coath .work-points {\n  background: blue;\n  transition: all 1s ease;\n}\n.results .points .my-points {\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n}\n.results .points .my-points span,\n.results .points .my-points p {\n  margin: 10px;\n}\n.results .result-btn {\n  padding: 0;\n}\n.results .result-btn button {\n  margin: 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDRjtBRFRBO0VBV0ksOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ0o7QURmQTtFQWtCSSxrQkFBQTtBQ0FKO0FEbEJBO0VBc0JJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNESjtBRHZCQTtFQTJCTSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNETjtBRDdCQTtFQWlDUSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNEUjtBRGxDQTtFQXVDUSxPQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FEdENBO0VBOENJLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0xKO0FENUNBO0VBb0RNLE9BQUE7QUNMTjtBRC9DQTtFQXVEUSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDTFI7QUR4REE7RUFnRVUsZUFBQTtFQUNBLHVCQUFBO0FDTFY7QUQ1REE7RUFvRVUsaUJBQUE7RUFDQSx1QkFBQTtBQ0xWO0FEaEVBO0VBd0VVLGdCQUFBO0VBQ0EsdUJBQUE7QUNMVjtBRHBFQTtFQStFTSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JOO0FEekVBOztFQXFGUSxZQUFBO0FDUlI7QUQ3RUE7RUEyRkksVUFBQTtBQ1hKO0FEaEZBO0VBOEZNLGNBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtb3Zlci9nYW1lLW92ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICBoMyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZXJyb3ItdmlldyB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICB9XG5cbiAgLnN0YXRpc3RpYyB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAuc3RhdCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wb2ludHMge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmdyYXBoIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5jb2F0aCB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcblxuICAgICAgICAuYnVncy1wb2ludHMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAuZmFtZS1wb2ludHMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC53b3JrLXBvaW50cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5teS1wb2ludHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgIHNwYW4sXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZXN1bHQtYnRuIHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLnJlc3VsdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucmVzdWx0cyBoMyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnJlc3VsdHMgLmVycm9yLXZpZXcge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4ucmVzdWx0cyAuc3RhdGlzdGljIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5yZXN1bHRzIC5zdGF0aXN0aWMgLnN0YXQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlc3VsdHMgLnN0YXRpc3RpYyAuc3RhdCBwIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5yZXN1bHRzIC5zdGF0aXN0aWMgLnN0YXQgc3BhbiB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLnJlc3VsdHMgLnBvaW50cyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJlc3VsdHMgLnBvaW50cyAuZ3JhcGgge1xuICBmbGV4OiAxO1xufVxuLnJlc3VsdHMgLnBvaW50cyAuZ3JhcGggLmNvYXRoIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuLnJlc3VsdHMgLnBvaW50cyAuZ3JhcGggLmNvYXRoIC5idWdzLXBvaW50cyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG4ucmVzdWx0cyAucG9pbnRzIC5ncmFwaCAuY29hdGggLmZhbWUtcG9pbnRzIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuLnJlc3VsdHMgLnBvaW50cyAuZ3JhcGggLmNvYXRoIC53b3JrLXBvaW50cyB7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuLnJlc3VsdHMgLnBvaW50cyAubXktcG9pbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnJlc3VsdHMgLnBvaW50cyAubXktcG9pbnRzIHNwYW4sXG4ucmVzdWx0cyAucG9pbnRzIC5teS1wb2ludHMgcCB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5yZXN1bHRzIC5yZXN1bHQtYnRuIHtcbiAgcGFkZGluZzogMDtcbn1cbi5yZXN1bHRzIC5yZXN1bHQtYnRuIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/game-over/game-over.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-over/game-over.component.ts ***!
  \**************************************************/
/*! exports provided: GameOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverComponent", function() { return GameOverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameOverComponent = /** @class */ (function () {
    function GameOverComponent() {
        this.closedGameOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resultTitle = "End of day";
        this.collectBtn = "Collect";
        this.graphBugs = "0";
        this.graphFame = "0";
        this.graphWork = "0";
        this.colWork = "";
        this.colFame = "";
        this.colBugs = "";
        this.showMyPoints = 0;
        this.audio = new Audio('assets/music/click.mp3');
    }
    GameOverComponent.prototype.ngOnInit = function () {
    };
    GameOverComponent.prototype.checkLevel = function () {
        var lvl = window.sessionStorage.getItem("level");
        if (lvl == "1") {
            return 2;
        }
        else if (lvl == "2") {
            return 3;
        }
        else if (lvl == "3") {
            return 4;
        }
        else {
            return 1;
        }
    };
    GameOverComponent.prototype.replayThisLvl = function () {
        var level = this.checkLevel();
        if (level == 1) {
            window.sessionStorage.setItem("level", "0");
        }
        else if (level == 2) {
            window.sessionStorage.setItem("level", "1");
        }
        else if (level == 3) {
            window.sessionStorage.setItem("level", "2");
        }
        else if (level == 4) {
            window.sessionStorage.setItem("level", "3");
        }
        else {
            window.sessionStorage.setItem("level", "4");
        }
    };
    GameOverComponent.prototype.newLvl = function () {
        var level = this.checkLevel();
        if (level == 1) {
            window.sessionStorage.setItem("level", "1");
        }
        else if (level == 2) {
            window.sessionStorage.setItem("level", "2");
        }
        else if (level == 3) {
            window.sessionStorage.setItem("level", "3");
        }
        else {
            window.sessionStorage.setItem("level", "4");
        }
    };
    GameOverComponent.prototype.setNewGame = function (nextLvl) {
        if (nextLvl) {
            this.newLvl();
        }
        else {
            this.replayThisLvl();
        }
        this.colWork = "";
        this.colFame = "";
        this.colBugs = "";
        this.graphBugs = "0";
        this.graphFame = "0";
        this.graphWork = "0";
        this.closedGameOver.emit(false);
    };
    GameOverComponent.prototype.collectPoints = function (e) {
        this.audio.play();
        if (e == 0) {
            var halfPoints = parseInt(this.workPercentage) / 2;
            this.graphWork = String(halfPoints) + "%";
            this.colWork = "disabled";
            this.showMyPoints += 1;
        }
        else if (e == 1) {
            var halfPoints = parseInt(this.employeFame) / 2;
            this.graphFame = String(halfPoints) + "%";
            this.colFame = "disabled";
            this.showMyPoints += 1;
        }
        else {
            var halfPoints = parseInt(this.bugsCatched) / 2;
            this.graphBugs = String(halfPoints) + "%";
            this.colBugs = "disabled";
            this.showMyPoints += 1;
        }
        if (this.showMyPoints === 3) {
            var result = parseInt(this.workPercentage) + parseInt(this.employeFame) + parseInt(this.bugsCatched);
            this.resultPoints = String(result);
        }
    };
    GameOverComponent.prototype.nextLevel = function () {
        this.audio.play();
        this.setNewGame(true);
    };
    GameOverComponent.prototype.replayLevel = function () {
        this.audio.play();
        this.setNewGame(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameOverComponent.prototype, "isGameOver", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameOverComponent.prototype, "workPercentage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GameOverComponent.prototype, "workDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameOverComponent.prototype, "employeFame", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameOverComponent.prototype, "bugsCatched", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameOverComponent.prototype, "resultPoints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameOverComponent.prototype, "closedGameOver", void 0);
    GameOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-over',
            template: __webpack_require__(/*! ./game-over.component.html */ "./src/app/game-over/game-over.component.html"),
            styles: [__webpack_require__(/*! ./game-over.component.less */ "./src/app/game-over/game-over.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameOverComponent);
    return GameOverComponent;
}());



/***/ }),

/***/ "./src/app/info-view/info-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/info-view/info-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-content\">\n  <div class=\"headline blue-bck animate bounceIn\">\n    <a href=\"/\">\n      <img class=\"error-icon\" src=\"assets/cancel-icon.png\" alt=\"back\">\n    </a>\n    <h1 class=\"h1 title-name\">{{ InformationTitle }}</h1>\n  </div>\n  <div class=\"first-half animate bounceIn\">\n    <div class=\"blue-bck icon-table\">\n      <h1 class=\"h1 title-name\">{{IconTitle}}</h1>\n      <div class=\"icons\">\n        <div class=\"icon\" *ngFor=\"let icon of iconInfo | keyvalue\">\n          <div class=\"icon-preview\">\n            <img src='{{icon.value.img}}' alt=\"\" class=\"error-icon\">\n          </div>\n          <span>{{icon.value.title}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"second-half animate bounceIn\">\n    <div class=\"blue-bck text\">\n      <h1 class=\"h1 title-name\">{{DescriptionTitle}}</h1>\n      <br>\n      <h1 class=\"h1 title-name\">{{DescriptionGame}}</h1>\n    </div>\n    <div class=\"quater blue-bck\" *ngFor=\"let info of startInfo | keyvalue\">\n      <h3>{{info.value.title}}</h3>\n      <div class=\"hidden-section\" *ngIf=\"info.value.status\">\n        <p class=\"title-name\">{{info.value.desc}}</p>\n        <div class=\"section-img\">\n          <img src='{{info.value.img1}}' alt=\"\">\n          <img *ngIf=\"info.value.img2\" src='{{info.value.img2}}' alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/info-view/info-view.component.less":
/*!****************************************************!*\
  !*** ./src/app/info-view/info-view.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-content {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  color: white;\n}\n.info-content .headline {\n  display: flex;\n  flex-direction: row;\n}\n.info-content .headline .error-icon {\n  padding: 0;\n  margin: 5px;\n  cursor: pointer;\n}\n.info-content .headline .title-name {\n  flex: 1;\n  margin: 10px;\n}\n.info-content .first-half,\n.info-content .second-half {\n  width: 100%;\n  flex: 1;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n}\n.info-content .first-half .text,\n.info-content .second-half .text,\n.info-content .first-half .quater,\n.info-content .second-half .quater {\n  flex: 1;\n}\n.info-content .first-half .text h3,\n.info-content .second-half .text h3,\n.info-content .first-half .quater h3,\n.info-content .second-half .quater h3 {\n  margin: 20px;\n}\n.info-content .first-half .text .section-img,\n.info-content .second-half .text .section-img,\n.info-content .first-half .quater .section-img,\n.info-content .second-half .quater .section-img {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 10px;\n}\n.info-content .first-half .text .section-img img,\n.info-content .second-half .text .section-img img,\n.info-content .first-half .quater .section-img img,\n.info-content .second-half .quater .section-img img {\n  width: 50%;\n}\n.info-content .first-half .icon-table,\n.info-content .second-half .icon-table {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.info-content .first-half .icon-table .icons,\n.info-content .second-half .icon-table .icons {\n  display: flex;\n  flex-direction: row;\n}\n.info-content .first-half .icon-table .icons .icon,\n.info-content .second-half .icon-table .icons .icon {\n  flex: 1;\n  display: flex;\n  padding: 5px 0;\n  align-items: center;\n}\n.info-content .first-half .icon-table .icons .icon span,\n.info-content .second-half .icon-table .icons .icon span {\n  min-width: 150px;\n  text-align: left;\n  padding: 0 10px;\n}\n.info-content .first-half .icon-table .icons .icon .icon-preview,\n.info-content .second-half .icon-table .icons .icon .icon-preview {\n  flex: none;\n}\n.info-content .first-half .title-name,\n.info-content .second-half .title-name {\n  flex: 1;\n  margin: 10px 0;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvaW5mby12aWV3L2luZm8tdmlldy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvaW5mby12aWV3L2luZm8tdmlldy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FETkE7RUFRSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRFZBO0VBWU0sVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ047QURmQTtFQWtCTSxPQUFBO0VBQ0EsWUFBQTtBQ0FOO0FEbkJBOztFQXlCSSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRDNCQTs7OztFQWlDTSxPQUFBO0FDQU47QURqQ0E7Ozs7RUFvQ1EsWUFBQTtBQ0dSO0FEdkNBOzs7O0VBd0NRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDS1I7QURoREE7Ozs7RUE4Q1UsVUFBQTtBQ1FWO0FEdERBOztFQW9ETSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDTU47QUQ1REE7O0VBeURRLGFBQUE7RUFDQSxtQkFBQTtBQ09SO0FEakVBOztFQTZEVSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1FWO0FEeEVBOztFQW1FWSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1NaO0FEOUVBOztFQXdFWSxVQUFBO0FDVVo7QURsRkE7O0VBK0VNLE9BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNPTiIsImZpbGUiOiJzcmMvYXBwL2luZm8tdmlldy9pbmZvLXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIC5oZWFkbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLmVycm9yLWljb24ge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC50aXRsZS1uYW1lIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZpcnN0LWhhbGYsXG4gIC5zZWNvbmQtaGFsZiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRleHQsXG4gICAgLnF1YXRlciB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24taW1nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uLXRhYmxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAuaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uLXByZXZpZXcge1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUtbmFtZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCIuaW5mby1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmluZm8tY29udGVudCAuaGVhZGxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmluZm8tY29udGVudCAuaGVhZGxpbmUgLmVycm9yLWljb24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmluZm8tY29udGVudCAuaGVhZGxpbmUgLnRpdGxlLW5hbWUge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDEwcHg7XG59XG4uaW5mby1jb250ZW50IC5maXJzdC1oYWxmLFxuLmluZm8tY29udGVudCAuc2Vjb25kLWhhbGYge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAudGV4dCxcbi5pbmZvLWNvbnRlbnQgLnNlY29uZC1oYWxmIC50ZXh0LFxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAucXVhdGVyLFxuLmluZm8tY29udGVudCAuc2Vjb25kLWhhbGYgLnF1YXRlciB7XG4gIGZsZXg6IDE7XG59XG4uaW5mby1jb250ZW50IC5maXJzdC1oYWxmIC50ZXh0IGgzLFxuLmluZm8tY29udGVudCAuc2Vjb25kLWhhbGYgLnRleHQgaDMsXG4uaW5mby1jb250ZW50IC5maXJzdC1oYWxmIC5xdWF0ZXIgaDMsXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAucXVhdGVyIGgzIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAudGV4dCAuc2VjdGlvbi1pbWcsXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAudGV4dCAuc2VjdGlvbi1pbWcsXG4uaW5mby1jb250ZW50IC5maXJzdC1oYWxmIC5xdWF0ZXIgLnNlY3Rpb24taW1nLFxuLmluZm8tY29udGVudCAuc2Vjb25kLWhhbGYgLnF1YXRlciAuc2VjdGlvbi1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaW5mby1jb250ZW50IC5maXJzdC1oYWxmIC50ZXh0IC5zZWN0aW9uLWltZyBpbWcsXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAudGV4dCAuc2VjdGlvbi1pbWcgaW1nLFxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAucXVhdGVyIC5zZWN0aW9uLWltZyBpbWcsXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAucXVhdGVyIC5zZWN0aW9uLWltZyBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAuaWNvbi10YWJsZSxcbi5pbmZvLWNvbnRlbnQgLnNlY29uZC1oYWxmIC5pY29uLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAuaWNvbi10YWJsZSAuaWNvbnMsXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAuaWNvbi10YWJsZSAuaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmluZm8tY29udGVudCAuZmlyc3QtaGFsZiAuaWNvbi10YWJsZSAuaWNvbnMgLmljb24sXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAuaWNvbi10YWJsZSAuaWNvbnMgLmljb24ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbmZvLWNvbnRlbnQgLmZpcnN0LWhhbGYgLmljb24tdGFibGUgLmljb25zIC5pY29uIHNwYW4sXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAuaWNvbi10YWJsZSAuaWNvbnMgLmljb24gc3BhbiB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5pbmZvLWNvbnRlbnQgLmZpcnN0LWhhbGYgLmljb24tdGFibGUgLmljb25zIC5pY29uIC5pY29uLXByZXZpZXcsXG4uaW5mby1jb250ZW50IC5zZWNvbmQtaGFsZiAuaWNvbi10YWJsZSAuaWNvbnMgLmljb24gLmljb24tcHJldmlldyB7XG4gIGZsZXg6IG5vbmU7XG59XG4uaW5mby1jb250ZW50IC5maXJzdC1oYWxmIC50aXRsZS1uYW1lLFxuLmluZm8tY29udGVudCAuc2Vjb25kLWhhbGYgLnRpdGxlLW5hbWUge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/info-view/info-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-view/info-view.component.ts ***!
  \**************************************************/
/*! exports provided: InfoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoViewComponent", function() { return InfoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoViewComponent = /** @class */ (function () {
    function InfoViewComponent() {
        this.InformationTitle = "How to play";
        this.IconTitle = "Icons";
        this.DescriptionTitle = "Actions (Recommended to read)";
        this.DescriptionGame = "Game have 5 levels | Each level give you next floor to be care of | Bugs, Your work or Fame everything is count";
        this.startInfo = [{
                title: "Elevator",
                status: "false",
                img1: "assets/howToPlay/elev1.png",
                img2: "assets/howToPlay/elev2.png",
                desc: "Elevator allows you to travel bettwen rooms. First click on elevator and then on the room."
            }, {
                title: "Coding",
                status: "false",
                img1: "assets/howToPlay/coding.png",
                img2: "",
                desc: "Coding is your priority job and you must to have your job done before end of the day. If you want to start you need to go to basement click" +
                    " on 'Work' icon. After that you get pc desktop where you need to click on 'doors' icon on bottom and select 'IT program'." +
                    " coding lines are automatic but you need to claim spending hours which are showing anywhere and anytime. To claim your time spended by coding you need to click on clock icon."
            }, {
                title: "Fame",
                status: "false",
                img1: "assets/howToPlay/fame.png",
                img2: "",
                desc: "Fame is represent your relationship with yours co-workers. When you decline the request then you will loose a lot of fame." +
                    " You can earn some small number of fame back after you fix and complete the request. The fame is plus points for total result" +
                    " points."
            }, {
                title: "Errors, sections and bugs",
                status: "false",
                img1: "assets/howToPlay/errors.png",
                img2: "assets/howToPlay/errors2.png",
                desc: "If you can see 'Error' icon that means some error is on computer. Click on it. After that you get pc desktop where you need to " +
                    "click on 'doors' icon on bottom and select 'Debug program'. Then you need to scan each of section where is possible to get a bugs. " +
                    "\nYou do not know how many sections have error so that why you need scan all of them. when you find a error in section click on 'X' icon. " +
                    "Then will open debug section where you need too first run program by 'Run program' button for discover where is the bug. After that you " +
                    "should see the red line (that means problem in this path). Click on it and then you need to find with your mouse at white square the bug. " +
                    "Did you find bug? Ok.. then click on bug and that will kill it. Then run program again and if it all green that means you fix that problem." +
                    "\n Every killed bug give you extra points."
            }
        ];
        this.iconInfo = [{
                title: "Work hours", img: "assets/clock.png"
            }, {
                title: "work", img: "assets/ErrorSolvingImg/it.png"
            }, {
                title: "Bug", img: "assets/bug.png"
            }, {
                title: "Error", img: "assets/error.png"
            }
        ];
    }
    InfoViewComponent.prototype.ngOnInit = function () {
    };
    InfoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-view',
            template: __webpack_require__(/*! ./info-view.component.html */ "./src/app/info-view/info-view.component.html"),
            styles: [__webpack_require__(/*! ./info-view.component.less */ "./src/app/info-view/info-view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoViewComponent);
    return InfoViewComponent;
}());



/***/ }),

/***/ "./src/app/intro-view/intro-view-style.less":
/*!**************************************************!*\
  !*** ./src/app/intro-view/intro-view-style.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-background {\n  width: 100%;\n  padding: 20px;\n  margin-top: 10%;\n}\n.main-background img {\n  min-width: 20%;\n}\n.main-background .intro-btns {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.main-background .intro-btns .btn {\n  min-width: 250px;\n  margin: 20px 10px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvaW50cm8tdmlldy9pbnRyby12aWV3LXN0eWxlLmxlc3MiLCJzcmMvYXBwL2ludHJvLXZpZXcvaW50cm8tdmlldy1zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7QURKQTtFQU1JLGNBQUE7QUNDSjtBRFBBO0VBVUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEYkE7RUFnQk0sZ0JBQUE7RUFDQSxtQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvaW50cm8tdmlldy9pbnRyby12aWV3LXN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcblxuICBpbWcge1xuICAgIG1pbi13aWR0aDogMjAlO1xuICB9XG5cbiAgLmludHJvLWJ0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAuYnRuIHtcbiAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICBtYXJnaW46IDIwcHggMTBweCAwO1xuICAgIH1cbiAgfVxufVxuIiwiLm1haW4tYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4ubWFpbi1iYWNrZ3JvdW5kIGltZyB7XG4gIG1pbi13aWR0aDogMjAlO1xufVxuLm1haW4tYmFja2dyb3VuZCAuaW50cm8tYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbi1iYWNrZ3JvdW5kIC5pbnRyby1idG5zIC5idG4ge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IDIwcHggMTBweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/intro-view/intro-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/intro-view/intro-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-background animated 1 bounceInDown\">\n  <img src=\"assets/mainImage.png\" alt=\"mainImage\">\n  <h1>{{ title }}</h1>\n  <div class=\"intro-btns\">\n    <a href=\"/itguygame.github.io/itguy/engineView\" class=\"btn btn-primary animated 1 zoomIn delay-1s\">{{ playBtn }}</a>\n    <a href=\"/itguygame.github.io/itguy/informationView\" class=\"btn btn-primary animated 1 zoomIn delay-1s\">{{ infoBtn }}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/intro-view/intro-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/intro-view/intro-view.component.ts ***!
  \****************************************************/
/*! exports provided: IntroViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroViewComponent", function() { return IntroViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroViewComponent = /** @class */ (function () {
    function IntroViewComponent() {
        this.title = 'Welcome to IT guy';
        this.playBtn = "Play";
        this.infoBtn = "How to play";
    }
    IntroViewComponent.prototype.ngOnInit = function () {
    };
    IntroViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro-view',
            template: __webpack_require__(/*! ./intro-view.component.html */ "./src/app/intro-view/intro-view.component.html"),
            styles: [__webpack_require__(/*! ./intro-view-style.less */ "./src/app/intro-view/intro-view-style.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroViewComponent);
    return IntroViewComponent;
}());



/***/ }),

/***/ "./src/app/start-game/start-game.component.html":
/*!******************************************************!*\
  !*** ./src/app/start-game/start-game.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isGameStarted\" class=\"popup-window-view\">\n  <div class=\"popup animated bounceIn\">\n    <div class=\"before-play\">\n      <h3 class=\"animated 1 fadeIn\">{{playTitle}} {{levelNumber}}</h3>\n      <div class=\"animated 2 fadeIn desc-text\">\n        <ul>\n          <li *ngFor=\"let info of startInfo\">\n            {{info}}\n          </li>\n        </ul>\n      </div>\n      <div class=\"animated 2 fadeIn start-btn\">\n        <button type=\"button\" class=\"btn btn-primary\" name=\"button\" (click)=\"playLevel()\">{{startTitle}}</button>\n      </div>\n    </div>\n    <img class=\"popup-background\" src=\"assets/errorBck.jpg\" alt=\"bck\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/start-game/start-game.component.less":
/*!******************************************************!*\
  !*** ./src/app/start-game/start-game.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\n  height: 40%;\n  top: 30%;\n}\n.popup .before-play {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: black;\n  flex-direction: column;\n  padding: 10px;\n  margin: 0 auto;\n}\n.popup .before-play h3 {\n  border-bottom: 1px solid black;\n  font-weight: bold;\n  padding: 5px;\n  margin: 0;\n}\n.popup .before-play .desc-text {\n  padding: 10px;\n  flex: 1;\n}\n.popup .before-play .desc-text ul {\n  list-style: none;\n}\n.popup .before-play .start-btn {\n  padding: 0;\n}\n.popup .before-play .start-btn button {\n  margin: 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub21CL0Rlc2t0b3AvRG8gUm9ib3R5L0pBQVA3L0lUR1VZL3NyYy9hcHAvc3RhcnQtZ2FtZS9zdGFydC1nYW1lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zdGFydC1nYW1lL3N0YXJ0LWdhbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtBQ0NGO0FESEE7RUFLSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7QURiQTtFQWVNLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NOO0FEbkJBO0VBc0JNLGFBQUE7RUFDQSxPQUFBO0FDQU47QUR2QkE7RUEwQlEsZ0JBQUE7QUNBUjtBRDFCQTtFQStCTSxVQUFBO0FDRk47QUQ3QkE7RUFrQ1EsY0FBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQtZ2FtZS9zdGFydC1nYW1lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIHRvcDogMzAlO1xuXG4gIC5iZWZvcmUtcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBoMyB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuZGVzYy10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXJ0LWJ0biB7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5wb3B1cCB7XG4gIGhlaWdodDogNDAlO1xuICB0b3A6IDMwJTtcbn1cbi5wb3B1cCAuYmVmb3JlLXBsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucG9wdXAgLmJlZm9yZS1wbGF5IGgzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDA7XG59XG4ucG9wdXAgLmJlZm9yZS1wbGF5IC5kZXNjLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbGV4OiAxO1xufVxuLnBvcHVwIC5iZWZvcmUtcGxheSAuZGVzYy10ZXh0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wb3B1cCAuYmVmb3JlLXBsYXkgLnN0YXJ0LWJ0biB7XG4gIHBhZGRpbmc6IDA7XG59XG4ucG9wdXAgLmJlZm9yZS1wbGF5IC5zdGFydC1idG4gYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/start-game/start-game.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-game/start-game.component.ts ***!
  \****************************************************/
/*! exports provided: StartGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameComponent", function() { return StartGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartGameComponent = /** @class */ (function () {
    function StartGameComponent() {
        this.closedStartGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playTitle = "Level";
        this.startTitle = "Continue";
        this.startInfo = [
            'You need to earn 200 points',
            'Your work need to be finished',
            'You need to be quick while you solving problems',
            'You get a new floor with every new level'
        ];
    }
    StartGameComponent.prototype.ngOnInit = function () {
    };
    StartGameComponent.prototype.playLevel = function () {
        var audio = new Audio('assets/music/click.mp3');
        audio.play();
        this.closedStartGame.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StartGameComponent.prototype, "isGameStarted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StartGameComponent.prototype, "levelNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StartGameComponent.prototype, "closedStartGame", void 0);
    StartGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-game',
            template: __webpack_require__(/*! ./start-game.component.html */ "./src/app/start-game/start-game.component.html"),
            styles: [__webpack_require__(/*! ./start-game.component.less */ "./src/app/start-game/start-game.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartGameComponent);
    return StartGameComponent;
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

module.exports = __webpack_require__(/*! /Users/TomB/Desktop/Do Roboty/JAAP7/ITGUY/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map