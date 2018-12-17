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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#esb-header {\r\n  text-align: left;\r\n  color: #0079c1;\r\n}\r\n\r\n#canvas {\r\n  border: 1px solid black;\r\n  position: absolute;\r\n  z-index: 10000;\r\n}\r\n\r\n#flake {\r\n  color: #fff;\r\n  position: absolute;\r\n  font-size: 25px;\r\n  top: -50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFHRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VzYi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDc5YzE7XHJcbn1cclxuXHJcbiNjYW52YXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuXHJcbiNmbGFrZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0b3A6IC01MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img alt=\"\" src=\"assets/images/logo-svg.svg\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/scout\" routerLinkActive=\"active\">СКАУТ </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/crm\" routerLinkActive=\"active\">Личный кабинет</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <h1 id=\"esb-header\" class=\"esb-header\">ESB сервисная шина</h1>\r\n  <img alt=\"\" src=\"assets/images/snow_tree.png\"  height=\"60px\">\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n"

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
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_scout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/scout.service */ "./src/app/services/scout.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_crm_crm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/crm/crm.component */ "./src/app/pages/crm/crm.component.ts");
/* harmony import */ var _pages_scout_scout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/scout/scout.component */ "./src/app/pages/scout/scout.component.ts");
/* harmony import */ var _pages_scout_unit_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/scout/unit-picker.component */ "./src/app/pages/scout/unit-picker.component.ts");
/* harmony import */ var _services_crm_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/crm.service */ "./src/app/services/crm.service.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
















var routes = [
    { path: '', redirectTo: '/scout', pathMatch: 'full' },
    { path: 'scout', component: _pages_scout_scout_component__WEBPACK_IMPORTED_MODULE_12__["ScoutComponent"] },
    { path: 'crm', component: _pages_crm_crm_component__WEBPACK_IMPORTED_MODULE_11__["CrmComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_scout_scout_component__WEBPACK_IMPORTED_MODULE_12__["ScoutComponent"],
                _pages_crm_crm_component__WEBPACK_IMPORTED_MODULE_11__["CrmComponent"],
                _pages_scout_unit_picker_component__WEBPACK_IMPORTED_MODULE_13__["UnitPickerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["PaginatorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["TabViewModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["InputSwitchModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["PanelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["GMapModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
            providers: [_services_scout_service__WEBPACK_IMPORTED_MODULE_7__["ScoutService"], _services_crm_service__WEBPACK_IMPORTED_MODULE_14__["CrmService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/FltGasStationsListRequest.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/model/FltGasStationsListRequest.model.ts ***!
  \**********************************************************/
/*! exports provided: FltGasStationsListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FltGasStationsListRequest", function() { return FltGasStationsListRequest; });
var FltGasStationsListRequest = /** @class */ (function () {
    function FltGasStationsListRequest() {
    }
    return FltGasStationsListRequest;
}());



/***/ }),

/***/ "./src/app/model/azs-details-request.model.ts":
/*!****************************************************!*\
  !*** ./src/app/model/azs-details-request.model.ts ***!
  \****************************************************/
/*! exports provided: AzsDetailsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzsDetailsRequest", function() { return AzsDetailsRequest; });
var AzsDetailsRequest = /** @class */ (function () {
    function AzsDetailsRequest() {
    }
    return AzsDetailsRequest;
}());



/***/ }),

/***/ "./src/app/model/unit-pick.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/unit-pick.model.ts ***!
  \******************************************/
/*! exports provided: UnitPick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitPick", function() { return UnitPick; });
var UnitPick = /** @class */ (function () {
    function UnitPick() {
    }
    return UnitPick;
}());



/***/ }),

/***/ "./src/app/pages/crm/crm.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/crm/crm.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NybS9jcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/crm/crm.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/crm/crm.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<H1>Уже почти сейчас!</H1>-->\r\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<p-panel header=\"Получение данных из CRM Siebel\">\r\n    <p-tabView>\r\n        <p-tabPanel header=\"АЗС\">\r\n\r\n\r\n            <div class=\"form-group container\">\r\n\r\n                <div class=\"row\">\r\n                    <label class=\"control-label col-sm-2\">Дата последнего изменения</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <p-calendar [(ngModel)]=\"dateLastChange\"\r\n                                    required=\"true\" dateFormat=\"dd.mm.yy\"></p-calendar>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row \">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <p-checkbox\r\n                            class=\"col-sm-4\"\r\n                            [(ngModel)]=\"fuelCardsFilterSelect\"\r\n                            binary=\"true\"\r\n                            label=\"Приём топливных карт\"></p-checkbox>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <p-checkbox\r\n                            class=\"col-sm-4\"\r\n                            [(ngModel)]=\"loyalCardsFilterSelect\"\r\n                            binary=\"true\"\r\n                            label=\"Приём карт лояльности\"></p-checkbox>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <p-checkbox\r\n                            class=\"col-sm-4\"\r\n                            [(ngModel)]=\"bankCardsFilterSelect\"\r\n                            binary=\"true\"\r\n                            label=\"Приём банковских карт\"></p-checkbox>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <p-button (onClick)=\"stationList($event)\"\r\n                              class=\"col-sm-2\"\r\n                              label=\"Список АЗС\"\r\n                              style=\"padding-left: 20px\"\r\n                              styleClass=\"ui-button-success\"></p-button>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <input type=\"text\"\r\n                           class=\"col-sm-4\"\r\n                           pInputText\r\n                           [(ngModel)]=\"azsListcorrId\"\r\n                           placeholder=\"CorrelationId\"/>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <p-button (onClick)=\"stationListResult($event)\"\r\n                              class=\"col-sm-2\"\r\n                              label=\"Получить данные по CorId\"\r\n                              style=\"padding-left: 20px\"\r\n                              styleClass=\"ui-button-success\"></p-button>\r\n                </div>\r\n            </div>\r\n\r\n            <!--<p-button (onClick)=\"stationDetailsList($event)\"-->\r\n                      <!--class=\"col-sm-2\"-->\r\n                      <!--label=\"Детальный список АЗС\"-->\r\n                      <!--style=\"padding-left: 20px\"-->\r\n                      <!--styleClass=\"ui-button-success\"></p-button>-->\r\n\r\n            <!--<p-button (onClick)=\"details($event)\"-->\r\n            <!--class=\"col-sm-2\"-->\r\n            <!--label=\"Получение деталей\"-->\r\n            <!--style=\"padding-left: 20px\"-->\r\n            <!--styleClass=\"ui-button-success\"></p-button>-->\r\n\r\n            <p-table (onRowSelect)=\"onRowSelect($event)\"\r\n                     [(selection)]=\"selectedAzs\" [paginator]=\"true\"\r\n                     [responsive]=\"true\"\r\n                     [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                     [rows]=\"5\"\r\n                     [value]=\"azsList?.data\"\r\n                     dataKey=\"ID\"\r\n                     selectionMode=\"single\"\r\n            >\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th scope=\"col-sm\">ID</th>\r\n                        <th scope=\"col-sm\">ContractName</th>\r\n                        <th scope=\"col-sm\">ContractNumber</th>\r\n                        <th scope=\"col-sm\">RegionCode</th>\r\n                        <th scope=\"col-sm\">AddInfo03</th>\r\n                        <th scope=\"col-sm\">TrCountry</th>\r\n                        <th scope=\"col-sm\">FLTCards</th>\r\n                        <th scope=\"col-sm\">LTYCards</th>\r\n                        <th scope=\"col-sm\">GPBCards</th>\r\n                        <th scope=\"col-sm\">Region</th>\r\n                        <th scope=\"col-sm\">Детально</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template let-dt let-rowIndex=\"ID\" pTemplate=\"body\">\r\n                    <tr [pSelectableRow]=\"dt\">\r\n                        <td>{{dt.ID}} </td>\r\n                        <td>{{dt.ContractName}}</td>\r\n                        <td>{{dt.ContractNumber}}</td>\r\n                        <td>{{dt.RegionCode}}</td>\r\n                        <td>{{dt.AddInfo03}}</td>\r\n                        <td>{{dt.TrCountry}}</td>\r\n                        <td>{{dt.FLTCards}}</td>\r\n                        <td>{{dt.LTYCards}}</td>\r\n                        <td>{{dt.GPBCards}}</td>\r\n                        <td>{{dt.Region}}</td>\r\n                        <td>\r\n                            <div class=\"row\">\r\n                                <p-button (onClick)=\"onRowButton(dt)\" icon=\"pi pi-question\"\r\n                                          style=\"padding-left: 10px\"></p-button>\r\n                                <p-button (onClick)=\"onRowButtonMap(dt)\" icon=\"pi pi-search\"\r\n                                          style=\"padding-left: 10px\"></p-button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n\r\n            <p-dialog [(visible)]=\"azsDialogVisible\"\r\n                      [width]=\"1200\"\r\n                      header=\"Детальная информация по АЗС\"\r\n                      positionLeft=\"300\"\r\n                      positionTop=\"50\"\r\n            >\r\n\r\n                <p-accordion>\r\n                    <p-accordionTab [selected]=\"true\" header=\"Основные данные\">\r\n\r\n                        <table *ngIf=\"azsDetails\" class=\"table\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>ID WAY4</td>\r\n                                <td>{{azsDetails.data.ID}}</td>\r\n                                <td>ID Siebel</td>\r\n                                <td>{{azsDetails.data.SiebelID}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Номер АЗС</td>\r\n                                <td>{{azsDetails.data.GasStationNum}}</td>\r\n                                <td>Наименование</td>\r\n                                <td>{{azsDetails.data.Name}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Брэнд</td>\r\n                                <td>{{azsDetails.data.Brand}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Дата открытия</td>\r\n                                <td>{{azsDetails.data.OpenDate}}</td>\r\n                                <td>Дата закрытия</td>\r\n                                <td>{{azsDetails.data.CloseDate}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Статус</td>\r\n                                <td>{{azsDetails.data.Status}}</td>\r\n                                <td>Тип принадлежности</td>\r\n                                <td>{{azsDetails.data.OwnType}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Партнер</td>\r\n                                <td>{{azsDetails.data.Partner}}</td>\r\n                                <td>Тип местоположения</td>\r\n                                <td>{{azsDetails.data.LocationType}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Широта</td>\r\n                                <td>{{azsDetails.data.Latitude}}</td>\r\n                                <td>Долгота</td>\r\n                                <td>{{azsDetails.data.Longitude}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Адрес</td>\r\n                                <td>{{azsDetails.data.Country}}, {{azsDetails.data.Region}}, {{azsDetails.data.City}},\r\n                                    {{azsDetails.data.Street}}, {{azsDetails.data.House}}\r\n                                    , {{azsDetails.data.Building}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Телефон</td>\r\n                                <td>{{azsDetails.data.Phone}}</td>\r\n                                <td>Факс</td>\r\n                                <td>{{azsDetails.data.Fax}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Принадлежность АЗС</td>\r\n                                <td>{{azsDetails.data.ITSCGSBelongsTo}}</td>\r\n                                <td>Тип АЗС</td>\r\n                                <td>{{azsDetails.data.AddInfo03}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Отделение ГПН</td>\r\n                                <td>{{azsDetails.data.ITSCSecessionGPN}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <p-checkbox\r\n                                            [(ngModel)]=\"fuelCardsAvailable\"\r\n                                            binary=\"true\"\r\n                                            disabled=\"true\"\r\n                                            label=\"Приём топливных карт\"></p-checkbox>\r\n                                </td>\r\n                                <td>\r\n                                    <p-checkbox\r\n                                            [(ngModel)]=\"loyalCardsAvailable\"\r\n                                            binary=\"true\"\r\n                                            disabled=\"true\"\r\n                                            label=\"Приём карт лояльности\"></p-checkbox>\r\n                                </td>\r\n                                <td>\r\n                                    <p-checkbox\r\n                                            [(ngModel)]=\"bankCardsAvailable\"\r\n                                            binary=\"true\"\r\n                                            disabled=\"true\"\r\n                                            label=\"Приём банковских карт\"></p-checkbox>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <label class=\"control-label\">Трассы: </label>\r\n                                </td>\r\n                                <td>\r\n                                    <label *ngFor=\"let track of azsDetails?.data?.ListOfTracks\"\r\n                                           class=\"control-label\">{{track?.id}}</label>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </p-accordionTab>\r\n                    <p-accordionTab header=\"Терминалы\">\r\n\r\n                        <p-table *ngIf=\"azsDetails?.data?.ListOfTerminals\"\r\n                                 [responsive]=\"true\"\r\n                                 [value]=\"azsDetails?.data?.ListOfTerminals[0].Terminal\"\r\n                        >\r\n                            <ng-template pTemplate=\"header\">\r\n                                <tr>\r\n                                    <th scope=\"col-sm\">Способ подключения</th>\r\n                                    <th scope=\"col-sm\">Статус</th>\r\n                                    <th scope=\"col-sm\">Идентификатор терминала</th>\r\n                                    <th scope=\"col-sm\">Наименование</th>\r\n                                    <th scope=\"col-sm\">Номер</th>\r\n                                    <th scope=\"col-sm\">Тип</th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template let-term pTemplate=\"body\">\r\n                                <tr>\r\n                                    <td>{{term.ConnectionType}}</td>\r\n                                    <td>{{term.Status}}</td>\r\n                                    <td>{{term.TerminalId}}</td>\r\n                                    <td>{{term.TerminalName}}</td>\r\n                                    <td>{{term.TerminalNumber}}</td>\r\n                                    <td>{{term.TerminalType}}</td>\r\n                                </tr>\r\n                            </ng-template>\r\n                        </p-table>\r\n                    </p-accordionTab>\r\n                    <p-accordionTab header=\"Сервисы\">\r\n                        <p-table *ngIf=\"azsDetails?.data?.ListOfServices\"\r\n                                 [responsive]=\"true\"\r\n                                 [value]=\"azsDetails?.data?.ListOfServices[0].Service\"\r\n                        >\r\n                            <ng-template pTemplate=\"header\">\r\n                                <tr>\r\n                                    <th scope=\"col-sm\">Id услуги</th>\r\n                                    <th scope=\"col-sm\">Наименование</th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template let-serv pTemplate=\"body\">\r\n                                <tr>\r\n                                    <td>{{serv.SiebelID}}</td>\r\n                                    <td>{{serv.Value}}</td>\r\n                                </tr>\r\n                            </ng-template>\r\n                        </p-table>\r\n                    </p-accordionTab>\r\n                </p-accordion>\r\n            </p-dialog>\r\n\r\n\r\n            <p-dialog [(visible)]=\"gMapDialogVisible\"\r\n                      header=\"АЗС на карте\"\r\n                      positionTop=\"50\">\r\n                <p-gmap [options]=\"options\"\r\n                        [overlays]=\"overlays\"\r\n                        [style]=\"{'width':'640px','height':'640px'}\"></p-gmap>\r\n            </p-dialog>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Схема взаимодействия\">\r\n            <img class=\"img-fluid\" id=\"scheme-crm-azsdetails\" src=\"assets/images/scheme-crm.png\">\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Инфраструктура\">\r\n            <img class=\"img-fluid\" id=\"scheme-infr\" src=\"assets/images/infr-crm.jpg\">\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Swagger\">\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n                <iframe class=\"embed-responsive-item\"\r\n                        src=\"http://crmintegration-crmintegration.dmz-apps.demo.rht.ru/webjars/swagger-ui/index.html?url=/crm/api-doc\"></iframe>\r\n            </div>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</p-panel>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/crm/crm.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/crm/crm.component.ts ***!
  \********************************************/
/*! exports provided: CrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmComponent", function() { return CrmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crm.service */ "./src/app/services/crm.service.ts");
/* harmony import */ var _model_FltGasStationsListRequest_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/FltGasStationsListRequest.model */ "./src/app/model/FltGasStationsListRequest.model.ts");
/* harmony import */ var _model_azs_details_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/azs-details-request.model */ "./src/app/model/azs-details-request.model.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var CrmComponent = /** @class */ (function () {
    function CrmComponent(crmService, messageService) {
        this.crmService = crmService;
        this.messageService = messageService;
        this.fuelCardsAvailable = false;
        this.loyalCardsAvailable = false;
        this.bankCardsAvailable = false;
    }
    CrmComponent.prototype.ngOnInit = function () {
    };
    CrmComponent.prototype.stationList = function () {
        var _this = this;
        var requestBody = new _model_FltGasStationsListRequest_model__WEBPACK_IMPORTED_MODULE_3__["FltGasStationsListRequest"]();
        // requestBody.AmndDate = this.dateLastChange.getMonth() + '/' + this.dateLastChange.getDate() + '/'
        //     + this.dateLastChange.getFullYear();
        requestBody.FLTCards = this.true2Y(this.fuelCardsFilterSelect);
        requestBody.LTYCards = this.true2Y(this.loyalCardsFilterSelect);
        requestBody.GPBCards = this.true2Y(this.bankCardsFilterSelect);
        //mocked fields
        requestBody.ClientIP = '127.0.0.1';
        requestBody.ClientSource = 'WebClientESB';
        requestBody.RequestTime = this.dateLastChange.getMonth() + '/' + this.dateLastChange.getDate() + '/'
            + this.dateLastChange.getFullYear();
        requestBody.languageID = 'RUS';
        requestBody.SessionID = 'N/A';
        requestBody.UserLogin = 'N/A';
        requestBody.ContractID = 'N/A';
        this.crmService.postfltGasStationsList(requestBody).subscribe(function (correlationIdObject) {
            _this.azsListcorrId = correlationIdObject.correlationId;
            console.log('Получение корИд по списку АЗС: ' + correlationIdObject.correlationId);
        }, function (error) {
            console.log('Ошибка обращения к сервису!');
            console.log(error);
        });
    };
    CrmComponent.prototype.stationListResult = function () {
        var _this = this;
        this.crmService.getResultGasStationsList(this.azsListcorrId).subscribe(function (azsListResponse) {
            _this.azsList = azsListResponse;
            if (azsListResponse.code == 204) {
                _this.showWarn(azsListResponse.description);
            }
            if (azsListResponse.status.code == 0) {
                _this.showSuccess();
            }
        }, function (error) {
            console.log('Ошибка обращения к сервису!');
            console.log(error);
            _this.showError(error);
        });
    };
    CrmComponent.prototype.stationDetailsList = function () {
        var _this = this;
        this.crmService.postfltGasStationsDetailedList('empty string').subscribe(function (azsDetailsListResponse) {
            _this.azsDetailedList = azsDetailsListResponse;
        }, function (error) {
            console.log('Ошибка обращения к сервису!');
            console.log(error);
            _this.showError(error);
        });
    };
    CrmComponent.prototype.showWarn = function (serviceMessage) {
        this.messageService.add({ severity: 'warn', summary: 'Ошибка получения данных', detail: 'Данные ещё не обработаны: ' +
                serviceMessage });
    };
    CrmComponent.prototype.showSuccess = function () {
        this.messageService.add({ severity: 'success', summary: 'Получение', detail: 'Данные получены!' });
    };
    CrmComponent.prototype.showError = function (serviceMessage) {
        this.messageService.add({ severity: 'error', summary: 'Ошибка', detail: 'Ошибка обращения к сервису: ' +
                serviceMessage });
    };
    CrmComponent.prototype.details = function (inId) {
        var _this = this;
        var requestBody = new _model_azs_details_request_model__WEBPACK_IMPORTED_MODULE_4__["AzsDetailsRequest"]();
        requestBody.ID = inId;
        requestBody.ClientSource = 'WebClientESB';
        requestBody.LTYCards = this.true2Y(this.loyalCardsFilterSelect);
        ;
        requestBody.ClientIP = '127.0.0.1';
        requestBody.UserLogin = 'N/A';
        requestBody.RequestTime = this.dateLastChange.getMonth() + '/' + this.dateLastChange.getDate() + '/'
            + this.dateLastChange.getFullYear();
        requestBody.FLTCards = this.true2Y(this.fuelCardsFilterSelect);
        requestBody.SessionID = 'N/A';
        requestBody.GPBCards = this.true2Y(this.bankCardsFilterSelect);
        requestBody.languageID = 'RUS';
        requestBody.ContractID = 'N/A';
        // requestBody.AmndDate = this.dateLastChange.getMonth() + '/' + this.dateLastChange.getDay() + '/'
        //     + this.dateLastChange.getFullYear();
        this.crmService.azsDetails(requestBody).subscribe(function (azsDetailsResponse) {
            _this.getAszDetails(azsDetailsResponse.correlationId);
        }, function (error) {
            console.log('Ошибка обращения к сервису!');
            console.log(error);
        });
    };
    CrmComponent.prototype.getAszDetails = function (corId) {
        var _this = this;
        var i;
        for (i = 0; i <= 5; i++) {
            console.log('Попытка: ' + i);
            this.delay(1000).then(function (any) {
                console.log('Делей на попытке: ' + i);
                _this.crmService.getResultAzsDetails(corId).subscribe(function (azsDetailsResponse) {
                    _this.azsDetails = azsDetailsResponse;
                    _this.fuelCardsAvailable = _this.y2True(_this.azsDetails.data.FLTCards);
                    _this.loyalCardsAvailable = _this.y2True(_this.azsDetails.data.LTYCards);
                    _this.bankCardsAvailable = _this.y2True(_this.azsDetails.data.GPBCards);
                    console.log('Данные получены!');
                    return;
                    console.log('Выход из цикла');
                }, function (error) {
                    console.log('Ошибка обращения к сервису на попытке: ' + i);
                    console.log(error);
                });
            });
        }
    };
    CrmComponent.prototype.delay = function (ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CrmComponent.prototype.onRowSelect = function (event) {
        console.log('ROW SELECTED! ' + event.data.ID);
    };
    CrmComponent.prototype.onRowButton = function (data) {
        console.log('Extracting data AZS: ' + data.ID);
        this.details(data.ID);
        this.azsDialogVisible = true;
    };
    CrmComponent.prototype.onRowButtonMap = function (data) {
        this.gMapDialogVisible = true;
        console.log('AZS SELECTED! ' + data.ID);
        this.details(data.ID);
        var laty = Number(this.azsDetails.data.Latitude);
        var longti = Number(this.azsDetails.data.Longitude);
        this.options = {
            center: { lat: laty, lng: longti },
            zoom: 20
        };
        this.overlays = [];
    };
    CrmComponent.prototype.y2True = function (value) {
        if (value === 'Y') {
            return true;
        }
        return false;
    };
    CrmComponent.prototype.true2Y = function (value) {
        if (value === true) {
            return 'Y';
        }
        return '';
    };
    CrmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crm',
            template: __webpack_require__(/*! ./crm.component.html */ "./src/app/pages/crm/crm.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./crm.component.css */ "./src/app/pages/crm/crm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_crm_service__WEBPACK_IMPORTED_MODULE_2__["CrmService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], CrmComponent);
    return CrmComponent;
}());



/***/ }),

/***/ "./src/app/pages/scout/scout.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/scout/scout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Njb3V0L3Njb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/scout/scout.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/scout/scout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid align-self-end\">\r\n    <p-panel header=\"Получение статистики из системы СКАУТ\">\r\n        <p-tabView>\r\n            <p-tabPanel header=\"топливо\">\r\n\r\n                <app-unit-picker (selChanged)=\"selectorChanged($event)\"></app-unit-picker>\r\n                <div class=\"form-group container\">\r\n                    <div class=\"row\">\r\n                        <label class=\"control-label col-sm-2\">По дням</label>\r\n                        <p-inputSwitch (onChange)=\"handleFuelDaylyChange($event)\"\r\n                                       [(ngModel)]=\"daylyFuelChecked\"\r\n                                       class=\"col-sm-2\"\r\n                                       styleClass=\"padding-left: 20px\">По дням\r\n                        </p-inputSwitch>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-2\"></div>\r\n                        <p-button (onClick)=\"fuel($event)\"\r\n                                  class=\"col-sm-2\"\r\n                                  label=\"Топливо\"\r\n                                  style=\"padding-left: 20px\"\r\n                                  styleClass=\"ui-button-success\"></p-button>\r\n                    </div>\r\n                </div>\r\n\r\n                <h5 *ngIf=\"fuelStatistic\">Ответ по топливу:</h5>\r\n                <br>\r\n\r\n\r\n                <table *ngIf=\"fuelStatistic\" class=\"table table-bordered\">\r\n                    <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th scope=\"col-sm-4\">Дата</th>\r\n                        <th scope=\"col-sm-4\">Количество</th>\r\n                        <th scope=\"col-sm-4\">Примечание</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let interval of fuelStatistic?.intervals\">\r\n                    <tr>\r\n                        <td>{{interval.begin | date:'dd/MM/yy'}} - {{interval.end | date:'dd/MM/yy'}} </td>\r\n                        <td>{{interval.beginFuel.value}}</td>\r\n                        <td>{{interval.beginFuel.noValueReason}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n                <p-accordion>\r\n                    <p-accordionTab header=\"Диаграмма последовательности для отчета по топливу\">\r\n                        <img class=\"img-fluid\" id=\"scheme_infr\" src=\"assets/images/fuel_scheme.png\">\r\n                    </p-accordionTab>\r\n                </p-accordion>\r\n\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"одометр\">\r\n                <app-unit-picker (selChanged)=\"selectorChanged($event)\"></app-unit-picker>\r\n\r\n                <div class=\"form-group container\">\r\n                    <label class=\"control-label col-sm-2\">По дням</label>\r\n                    <p-inputSwitch\r\n                            (onChange)=\"handleOdoDaylyChange($event)\"\r\n                            [(ngModel)]=\"daylyOdoChecked\"\r\n                            class=\"col-sm-2\"\r\n                            styleClass=\"padding-left: 20px\">По дням\r\n                    </p-inputSwitch>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-2\"></div>\r\n                        <p-button (onClick)=\"odometer($event)\"\r\n                                  class=\"col-sm-2\"\r\n                                  label=\"Одометр\"\r\n                                  style=\"padding-left: 20px\"\r\n                                  styleClass=\"ui-button-success\"></p-button>\r\n                    </div>\r\n                </div>\r\n\r\n                <h5 *ngIf=\"odoStatistic\">Показания по одометру:</h5>\r\n                <br>\r\n\r\n\r\n                <table *ngIf=\"odoStatistic\" class=\"table table-bordered\">\r\n                    <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th scope=\"col-sm-4\">Дата</th>\r\n                        <th scope=\"col-sm-4\">Показанания начало</th>\r\n                        <th scope=\"col-sm-4\">Показанания конец</th>\r\n                        <th scope=\"col-sm-4\">Итоговое показание</th>\r\n                        <th scope=\"col-sm-4\">Примечание</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let odointerv of odoStatistic?.intervals\">\r\n                    <tr>\r\n                        <td>{{odointerv.begin | date:'dd/MM/yy'}} - {{odointerv.end | date:'dd/MM/yy'}} </td>\r\n                        <td>{{odointerv.beginMileageKm.value}}</td>\r\n                        <td>{{odointerv.endMileageKm.value}}</td>\r\n                        <td>{{odointerv.totalMileageKm.value}}</td>\r\n                        <td>{{odointerv.totalMileageKm.noValueReason}} {{odointerv.beginMileageKm.noValueReason}}\r\n                            {{odointerv.totalMileageKm.noValueReason}}</td>\r\n                        <!--<td>{{odointerv.}}</td>-->\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n                <p-accordion>\r\n                    <p-accordionTab header=\"Диаграмма последовательности для отчета по топливу\">\r\n                <img class=\"img-fluid\" id=\"scheme2\" src=\"assets/images/odo_scheme.png\">\r\n                    </p-accordionTab>\r\n                </p-accordion>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"Swagger\">\r\n                <div class=\"embed-responsive embed-responsive-16by9\">\r\n                    <iframe class=\"embed-responsive-item\"\r\n                            src=\"http://scoutintegration-scoutintegration.kspd-apps.demo.rht.ru/webjars/swagger-ui/index.html?url=/scout/api-doc\"></iframe>\r\n                </div>\r\n            </p-tabPanel>\r\n\r\n            <p-tabPanel header=\"Инфраструктура\">\r\n                <img class=\"img-fluid\" id=\"scheme1\" src=\"assets/images/infr_scheme.png\">\r\n            </p-tabPanel>\r\n        </p-tabView>\r\n    </p-panel>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/scout/scout.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/scout/scout.component.ts ***!
  \************************************************/
/*! exports provided: ScoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoutComponent", function() { return ScoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scout.service */ "./src/app/services/scout.service.ts");



var ScoutComponent = /** @class */ (function () {
    // constructor (private scoutService: ScoutService) { }
    function ScoutComponent(scoutService) {
        this.scoutService = scoutService;
        this.title = 'front';
        this.units = [{ id: 51005 }, { id: 51006 }, { id: 51007 }, { id: 51008 }, { id: 51010 }, { id: 51011 }, { id: 51164 }];
    }
    ScoutComponent.prototype.ngOnInit = function () {
        console.log('Initialization');
    };
    // handleClick() {
    //   console.log('БУТОНЕД!');
    //   // let unitList: Unit[];
    //   // let arrayUnits: ConcatArray<Unit>;
    //   this.scoutService.getUnits().subscribe(
    //     (response: number[]) => {
    //       response.forEach(function(value) {
    //         let currentUnit: Unit;
    //         currentUnit = new Unit(value);
    //         // arrayUnits.(currentUnit);
    //         console.log('Pushed: ' + value);
    //         // console.log('Pushed: ' + this.units);
    //       });
    //     },
    //     error => console.log(error)
    //   );
    // }
    ScoutComponent.prototype.fuel = function () {
        var _this = this;
        console.log('Получение топлива');
        this.scoutService.getFuel(this.selectedUnit, this.startDate, this.endDate, this.daylyFuelChecked).subscribe(function (fuelStatistic) {
            // const data = response.json();
            // this.responseResult = response.json();
            // response.forEach(function(value) {
            _this.fuelStatistic = fuelStatistic;
            // });
        }, function (error) {
            console.log('факеншит!');
            console.log(error);
        });
    };
    ScoutComponent.prototype.odometer = function () {
        var _this = this;
        console.log('Статистика по одометру');
        this.scoutService.getOdometer(this.selectedUnit, this.startDate, this.endDate, this.daylyOdoChecked).subscribe(function (odoStatistic) {
            _this.odoStatistic = odoStatistic;
        }, function (error) { return console.log(error); });
    };
    ScoutComponent.prototype.handleFuelDaylyChange = function (e) {
        this.fuel();
    };
    ScoutComponent.prototype.handleOdoDaylyChange = function (e) {
        this.odometer();
    };
    ScoutComponent.prototype.selectorChanged = function (selector) {
        console.log('Готово!');
        this.startDate = selector.startDate;
        this.endDate = selector.endDate;
        this.selectedUnit = selector.selectedUnit;
    };
    ScoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scout',
            template: __webpack_require__(/*! ./scout.component.html */ "./src/app/pages/scout/scout.component.html"),
            styles: [__webpack_require__(/*! ./scout.component.css */ "./src/app/pages/scout/scout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scout_service__WEBPACK_IMPORTED_MODULE_2__["ScoutService"]])
    ], ScoutComponent);
    return ScoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/scout/unit-picker.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/scout/unit-picker.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Njb3V0L3VuaXQtcGlja2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/scout/unit-picker.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/scout/unit-picker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group container\">\r\n  <div class=\"row\">\r\n    <label class=\"control-label col-sm-2\">Ид бензовоза: </label>\r\n    <p-dropdown\r\n      [(ngModel)]=\"statusSelect.selectedUnit\"\r\n      [options]=\"units\"\r\n      [style]=\"{'width':100}\"\r\n      class=\"col-sm-2\"\r\n      editable=\"true\"\r\n      name=\"Юнит\"\r\n      optionLabel=\"id\"\r\n      required=\"true\"\r\n      (ngModelChange)=\"selectorUnitChanged()\">\r\n    </p-dropdown>\r\n    <div class=\"col-sm-10\"></div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <label class=\"control-label col-sm-2\">Период от</label>\r\n    <div class=\"col-sm-2\">\r\n      <p-calendar [(ngModel)]=\"statusSelect.startDate\"\r\n                  (ngModelChange)=\"selectorUnitChanged()\"\r\n                  required=\"true\" dateFormat=\"dd.mm.yy\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <label class=\"control-label col-sm-2\">Период по</label>\r\n    <div class=\"col-sm-2\">\r\n      <p-calendar [(ngModel)]=\"statusSelect.endDate\"\r\n                  (ngModelChange)=\"selectorUnitChanged()\"\r\n                  required=\"true\" dateFormat=\"dd.mm.yy\"></p-calendar>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/scout/unit-picker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/scout/unit-picker.component.ts ***!
  \******************************************************/
/*! exports provided: UnitPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitPickerComponent", function() { return UnitPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_unit_pick_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/unit-pick.model */ "./src/app/model/unit-pick.model.ts");



var UnitPickerComponent = /** @class */ (function () {
    // constructor (private scoutService: ScoutService) { }
    function UnitPickerComponent() {
        this.selChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusSelect = new _model_unit_pick_model__WEBPACK_IMPORTED_MODULE_2__["UnitPick"]();
        this.units = [{ id: 51005 }, { id: 51006 }, { id: 51007 }, { id: 51008 }, { id: 51010 }, { id: 51011 }, { id: 51164 }];
    }
    UnitPickerComponent.prototype.ngOnInit = function () {
    };
    UnitPickerComponent.prototype.selectorUnitChanged = function () {
        console.log('ВЖУХ!');
        this.selChanged.emit(this.statusSelect);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UnitPickerComponent.prototype, "selChanged", void 0);
    UnitPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unit-picker',
            template: __webpack_require__(/*! ./unit-picker.component.html */ "./src/app/pages/scout/unit-picker.component.html"),
            styles: [__webpack_require__(/*! ./unit-picker.component.css */ "./src/app/pages/scout/unit-picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnitPickerComponent);
    return UnitPickerComponent;
}());



/***/ }),

/***/ "./src/app/services/crm.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/crm.service.ts ***!
  \*****************************************/
/*! exports provided: CrmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmService", function() { return CrmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CrmService = /** @class */ (function () {
    function CrmService(http) {
        this.http = http;
        this.serviceURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].crmUrl;
        this.crmGasStationListURL = this.serviceURL + '/crm/fltGasStationsList';
        this.crmtGasStationDetailedListURL = this.serviceURL + '/crm/fltGasStationsDetailedList';
        this.crmGasStationDetails = this.serviceURL + '/crm/fltGasStationDetails';
        this.crmGetResultURL = this.serviceURL + '/crm/getResponse';
    }
    /**
     * Получение списка АЗС.
     */
    CrmService.prototype.postfltGasStationsList = function (body) {
        return this.http.post(this.crmGasStationListURL, body);
        // .pipe(
        //     this.handleError(new HttpErrorResponse(body))
        // );
    };
    /**
     * Результаты по списку АЗС.
     * @param corId
     */
    CrmService.prototype.getResultGasStationsList = function (corId) {
        return this.http.get(this.crmGetResultURL + '/' + corId);
    };
    CrmService.prototype.postfltGasStationsDetailedList = function (body) {
        return this.http.post(this.crmtGasStationDetailedListURL, body);
    };
    CrmService.prototype.azsDetails = function (body) {
        return this.http.post(this.crmGasStationDetails, body);
    };
    /**
     * Результаты по списку АЗС.
     * @param corId
     */
    CrmService.prototype.getResultAzsDetails = function (corId) {
        return this.http.get(this.crmGetResultURL + '/' + corId);
    };
    //TODO сделать обработку ошибок.
    CrmService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    CrmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CrmService);
    return CrmService;
}());



/***/ }),

/***/ "./src/app/services/scout.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/scout.service.ts ***!
  \*******************************************/
/*! exports provided: ScoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoutService", function() { return ScoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




/**
 * Сервис для обращения к шине данныех.
 */
var ScoutService = /** @class */ (function () {
    function ScoutService(http) {
        this.http = http;
        this.serviceURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].scoutUrl;
        this.scoutIdsURL = this.serviceURL + '/scout/api/units/availableIds';
        this.scoutFuelURL = this.serviceURL + '/scout/statistics/fuel?';
        this.scoutOdoURL = this.serviceURL + '/scout/statistics/odometer?';
    }
    /**
     * Получение списка техники.
     */
    ScoutService.prototype.getUnits = function () {
        return this.http.get(this.scoutIdsURL);
    };
    /**
     * Получение статистики по топливу.
     * @param unit - ид техники
     * @param startDate - начало
     * @param endDate - окончание
     * @param dayly - тип отчета по дням
     */
    ScoutService.prototype.getFuel = function (unit, startDate, endDate, dayly) {
        console.log('ENV VALUE: ' + this.serviceURL);
        console.log('Date To String:' + startDate.getFullYear() + '%2F' + startDate.getMonth() + '%2F' + startDate.getDate() + ' 00:00:00');
        return this.http.get(this.scoutFuelURL +
            this.requestHelper(unit, startDate, endDate, dayly));
    };
    /**
     * Получение статистики по одометру.
     * @param unit - ид техники
     * @param startDate - начало
     * @param endDate - окончание
     * @param dayly - тип отчета по дням
     */
    ScoutService.prototype.getOdometer = function (unit, startDate, endDate, dayly) {
        return this.http.get(this.scoutOdoURL +
            this.requestHelper(unit, startDate, endDate, dayly));
    };
    ScoutService.prototype.requestHelper = function (unit, startDate, endDate, dayly) {
        var pathstring = 'request.unitId=' + unit.id + '&request.beginDateTime=' + startDate.getFullYear() + '%2F' + startDate.getMonth()
            + '%2F' + startDate.getDate() + ' 00:00:00' + '&request.endDateTime=' + endDate.getFullYear()
            + '%2F' + endDate.getMonth() + '%2F' + endDate.getDate() + ' 00:00:00';
        if (dayly) {
            pathstring = pathstring + '&request.interval=day';
        }
        return pathstring;
    };
    ScoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScoutService);
    return ScoutService;
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
    production: false,
    scoutUrl: 'http://scoutintegration-scoutintegration.kspd-apps.demo.rht.ru',
    crmUrl: 'http://crmintegration-crmintegration.dmz-apps.demo.rht.ru'
    // scoutUrl: 'http://localhost:8090',
    // crmUrl: 'http://localhost:8085'
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

module.exports = __webpack_require__(/*! C:\WORKSPACE\fronteap\src\main\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map