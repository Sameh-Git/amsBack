(self["webpackChunkamsIonic"] = self["webpackChunkamsIonic"] || []).push([["src_app_update-provider_update-provider_module_ts"],{

/***/ 2895:
/*!*******************************************************************!*\
  !*** ./src/app/update-provider/update-provider-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProviderPageRoutingModule": () => (/* binding */ UpdateProviderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _update_provider_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-provider.page */ 2754);




const routes = [
    {
        path: '',
        component: _update_provider_page__WEBPACK_IMPORTED_MODULE_0__.UpdateProviderPage
    }
];
let UpdateProviderPageRoutingModule = class UpdateProviderPageRoutingModule {
};
UpdateProviderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateProviderPageRoutingModule);



/***/ }),

/***/ 5090:
/*!***********************************************************!*\
  !*** ./src/app/update-provider/update-provider.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProviderPageModule": () => (/* binding */ UpdateProviderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _update_provider_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-provider-routing.module */ 2895);
/* harmony import */ var _update_provider_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-provider.page */ 2754);







let UpdateProviderPageModule = class UpdateProviderPageModule {
};
UpdateProviderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_provider_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateProviderPageRoutingModule
        ],
        declarations: [_update_provider_page__WEBPACK_IMPORTED_MODULE_1__.UpdateProviderPage]
    })
], UpdateProviderPageModule);



/***/ }),

/***/ 2754:
/*!*********************************************************!*\
  !*** ./src/app/update-provider/update-provider.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProviderPage": () => (/* binding */ UpdateProviderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_update_provider_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-provider.page.html */ 5125);
/* harmony import */ var _update_provider_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-provider.page.scss */ 9166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/provider.service */ 5872);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);







let UpdateProviderPage = class UpdateProviderPage {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.providerToUpdate = this.service.getProvider(this.id).subscribe(response => {
                console.log(response);
                this.name = response["name"];
                this.email = response["email"];
                this.adress = response["address"];
                this.nomImage = response["logo"];
            });
        });
    }
    onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }
    updateProvider() {
        this.providerToUpdate = {
            'name': this.name,
            'email': this.email,
            'address': this.adress,
            'id': this.id
        };
        const provider = new FormData();
        provider.append('imageFile', this.selectedFile, this.selectedFile.name);
        provider.append('imageName', this.selectedFile.name);
        provider.append('name', this.name);
        provider.append('email', this.email);
        provider.append('address', this.adress);
        provider.append('id', this.id);
        //this.service.updateProvider(this.providerToUpdate).subscribe(
        this.service.updateProvider(provider, this.id).subscribe(response => {
            console.log(response);
            alert("Modification successfully!");
            this.router.navigate(['provider']);
        });
    }
};
UpdateProviderPage.ctorParameters = () => [
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_2__.ProviderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
UpdateProviderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-update-provider',
        template: _raw_loader_update_provider_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_provider_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateProviderPage);



/***/ }),

/***/ 9166:
/*!***********************************************************!*\
  !*** ./src/app/update-provider/update-provider.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n#container {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm92aWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJ1cGRhdGUtcHJvdmlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvdW5kZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6MnB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMnB4OyBcclxufSJdfQ== */");

/***/ }),

/***/ 5125:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-provider/update-provider.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons collapse=\"true\" slot=\"end\">\n      <ion-button><a routerLink=\"/login\" >\n      <img src=\"../../assets/logout.png\" width=\"30\" height=\"15\"> </a> </ion-button>\n    </ion-buttons> \n    <ion-title>Update Provider</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div style=\"padding-top: 0px;\" >\n    <ion-card align=\"center\"  >\n      <ion-card-header>\n       \n  \n        <ion-card-title></ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n \n  <form (ngSubmit)=\"updateProvider()\">\n    <ion-item>\n      <ion-label> <b style=\"color: rgb(1, 92, 153);\"> Provider Name </b></ion-label>\n      <ion-input [(ngModel)]=\"name\" name=\"providerName\" type=\"text\" id=\"providerName\" placeholder=\"Provider Name\"  ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><b style=\"color: rgb(1, 92, 153);\">Provider Email </b></ion-label>\n      <ion-input [(ngModel)]=\"email\" name=\"providerEmail\"  type=\"text\" id=\"providerEmail\" placeholder=\"Provider Email\" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><b style=\"color: rgb(1, 92, 153);\"> Provider Address </b></ion-label>\n      <ion-input  type=\"text\" [(ngModel)]=\"adress\" name=\"providerAdress\"  id=\"providerAdress\"  placeholder=\"Provider Address\" ></ion-input>\n    </ion-item>\n  \n    <ion-item >\n      \n       <img src=\"http://127.0.0.1:8080/images/provider/{{nomImage}}\">\n    \n    </ion-item>\n    \n    <ion-item >\n      <ion-label>  <b style=\"color: rgb(1, 92, 153);\">New Logo </b></ion-label>\n      <ion-input  type=\"file\" ngModel name=\"providerImage\"  id=\"providerImage\" (change)=\"onFileChanged($event)\" placeholder=\"Enter Logo\" ></ion-input>\n    </ion-item>\n   <br>\n    <ion-button type=\"submit\"  expand=\"block\" style=\"margin: 4%;\">Update Provider</ion-button>\n  </form>\n  </ion-card-content></ion-card>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n  <ion-title align=\"center\">©2021</ion-title>\n  </ion-toolbar>\n  </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_update-provider_update-provider_module_ts.js.map