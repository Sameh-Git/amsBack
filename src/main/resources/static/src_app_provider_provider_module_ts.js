(self["webpackChunkamsIonic"] = self["webpackChunkamsIonic"] || []).push([["src_app_provider_provider_module_ts"],{

/***/ 4488:
/*!*****************************************************!*\
  !*** ./src/app/provider/provider-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderPageRoutingModule": () => (/* binding */ ProviderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _provider_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider.page */ 9389);




const routes = [
    {
        path: '',
        component: _provider_page__WEBPACK_IMPORTED_MODULE_0__.ProviderPage
    }
];
let ProviderPageRoutingModule = class ProviderPageRoutingModule {
};
ProviderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProviderPageRoutingModule);



/***/ }),

/***/ 4533:
/*!*********************************************!*\
  !*** ./src/app/provider/provider.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderPageModule": () => (/* binding */ ProviderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _provider_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider-routing.module */ 4488);
/* harmony import */ var _provider_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider.page */ 9389);







let ProviderPageModule = class ProviderPageModule {
};
ProviderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _provider_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProviderPageRoutingModule
        ],
        declarations: [_provider_page__WEBPACK_IMPORTED_MODULE_1__.ProviderPage]
    })
], ProviderPageModule);



/***/ }),

/***/ 9389:
/*!*******************************************!*\
  !*** ./src/app/provider/provider.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderPage": () => (/* binding */ ProviderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_provider_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./provider.page.html */ 3697);
/* harmony import */ var _provider_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider.page.scss */ 919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/provider.service */ 5872);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);







let ProviderPage = class ProviderPage {
    constructor(service, router, loginService) {
        this.service = service;
        this.router = router;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.refreshListProviders();
    }
    refreshListProviders() {
        this.service.listProviders().subscribe(response => {
            this.providers = response;
        });
    }
    updateProvider(myObj) {
        this.router.navigate(['update-provider' + '/' + myObj['id']]);
    }
    deleteProvider(myObj) {
        this.service.deleteProvider(myObj).subscribe(response => {
            console.log(response);
            this.refreshListProviders();
        });
    }
};
ProviderPage.ctorParameters = () => [
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_2__.ProviderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService }
];
ProviderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-provider',
        template: _raw_loader_provider_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_provider_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProviderPage);



/***/ }),

/***/ 919:
/*!*********************************************!*\
  !*** ./src/app/provider/provider.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#l {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQUE7QUFBSiIsImZpbGUiOiJwcm92aWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbCB7XHJcblxyXG4gICAgd2lkdGg6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ 3697:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons collapse=\"true\" slot=\"end\">\n      <ion-button><a routerLink=\"/login\" >\n      <img src=\"../../assets/logout.png\" width=\"30\" height=\"15\"> </a> </ion-button>\n    </ion-buttons> \n    <ion-title>Providers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div style=\"padding-top: 0px;\" >\n   \n  <ion-list>\n    <h1 style=\"color:rgb(115, 170, 241)\">List of Providers</h1>\n  <ion-item *ngFor=\"let p of providers\">\n \n    <ion-label id=\"l\">\n      <img src=\"http://127.0.0.1:8080/images/provider/{{p.logo}}\"  with=\"6%\" height=\"5%\">\n    </ion-label>\n    <ion-label>\n      <h2>{{p.name}}</h2>\n      <p>{{p.email}}</p>\n      <p>{{p.address}}</p>\n      <div  >\n      <ion-button (click)=\"updateProvider(p)\"  color=\"warning\"  *ngIf=\"loginService.srole=='Admin' || loginService.srole=='Superadmin'\">Edit</ion-button>\n      <ion-button (click)=\"deleteProvider(p)\"  color=\"danger\" *ngIf=\"loginService.srole=='Admin' || loginService.srole=='Superadmin'\">Delete</ion-button>\n      </div>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n  <ion-title align=\"center\" >©2021</ion-title>\n  </ion-toolbar>\n  </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_provider_provider_module_ts.js.map