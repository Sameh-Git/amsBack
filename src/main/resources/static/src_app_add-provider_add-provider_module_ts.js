(self["webpackChunkamsIonic"] = self["webpackChunkamsIonic"] || []).push([["src_app_add-provider_add-provider_module_ts"],{

/***/ 2871:
/*!*************************************************************!*\
  !*** ./src/app/add-provider/add-provider-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProviderPageRoutingModule": () => (/* binding */ AddProviderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_provider_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-provider.page */ 2151);




const routes = [
    {
        path: '',
        component: _add_provider_page__WEBPACK_IMPORTED_MODULE_0__.AddProviderPage
    }
];
let AddProviderPageRoutingModule = class AddProviderPageRoutingModule {
};
AddProviderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddProviderPageRoutingModule);



/***/ }),

/***/ 2642:
/*!*****************************************************!*\
  !*** ./src/app/add-provider/add-provider.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProviderPageModule": () => (/* binding */ AddProviderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_provider_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-provider-routing.module */ 2871);
/* harmony import */ var _add_provider_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-provider.page */ 2151);







let AddProviderPageModule = class AddProviderPageModule {
};
AddProviderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_provider_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProviderPageRoutingModule
        ],
        declarations: [_add_provider_page__WEBPACK_IMPORTED_MODULE_1__.AddProviderPage]
    })
], AddProviderPageModule);



/***/ }),

/***/ 2151:
/*!***************************************************!*\
  !*** ./src/app/add-provider/add-provider.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProviderPage": () => (/* binding */ AddProviderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_provider_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-provider.page.html */ 7203);
/* harmony import */ var _add_provider_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-provider.page.scss */ 6108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/provider.service */ 5872);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let AddProviderPage = class AddProviderPage {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }
    createProvider(myform) {
        const provider = new FormData();
        provider.append('imageFile', this.selectedFile, this.selectedFile.name);
        provider.append('imageName', this.selectedFile.name);
        provider.append('name', myform.value.providerName);
        provider.append('email', myform.value.providerEmail);
        provider.append('address', myform.value.providerAdress);
        this.service.createProvider(provider).subscribe((response) => {
            console.log(response);
            alert("Ajout avec succes!");
            this.router.navigate(['provider']);
        });
    }
};
AddProviderPage.ctorParameters = () => [
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_2__.ProviderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AddProviderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-provider',
        template: _raw_loader_add_provider_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_provider_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddProviderPage);



/***/ }),

/***/ 6108:
/*!*****************************************************!*\
  !*** ./src/app/add-provider/add-provider.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n#container {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm92aWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJhZGQtcHJvdmlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvdW5kZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6MnB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMnB4OyBcclxufSJdfQ== */");

/***/ }),

/***/ 7203:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-provider/add-provider.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons collapse=\"true\" slot=\"end\">\n      <ion-button><a routerLink=\"/login\" >\n      <img src=\"../../assets/logout.png\" width=\"30\" height=\"15\"> </a> </ion-button>\n    </ion-buttons> \n    <ion-title>Add Provider</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div style=\"padding-top: 30px;\" >\n    <ion-card align=\"center\"  >\n      <ion-card-header>\n       \n  \n        <ion-card-title>  <h1 style=\"color:rgb(115, 170, 241)\">Add Provider </h1></ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n  <form #myform=\"ngForm\" (ngSubmit)=\"createProvider(myform)\" >\n   \n    <ion-item >\n      <ion-label>Provider Name</ion-label>\n      <ion-input ngModel name=\"providerName\"  type=\"text\" id=\"providerName\" placeholder=\"Enter Name\"  ></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label>Provider Email</ion-label>\n      <ion-input ngModel name=\"providerEmail\"  type=\"text\" id=\"providerEmail\" placeholder=\"Enter Email\"   ></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label>Provider Address</ion-label>\n      <ion-input  type=\"text\" ngModel name=\"providerAdress\"  id=\"providerAdress\"  placeholder=\"Enter Address\" ></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label>Provider Logo</ion-label>\n      <ion-input  type=\"file\" ngModel name=\"providerImage\"  id=\"providerImage\" (change)=\"onFileChanged($event)\" placeholder=\"Enter Logo\" ></ion-input>\n    </ion-item>\n\n    \n   \n   <br>\n    <ion-button type=\"submit\"  expand=\"block\"  style=\"margin: 4%;\">Add Provider</ion-button>\n  </form></ion-card-content></ion-card>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n  <ion-title align=\"center\">©2021</ion-title>\n  </ion-toolbar>\n  </ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_add-provider_add-provider_module_ts.js.map