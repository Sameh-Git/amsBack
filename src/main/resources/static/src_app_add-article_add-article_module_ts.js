(self["webpackChunkamsIonic"] = self["webpackChunkamsIonic"] || []).push([["src_app_add-article_add-article_module_ts"],{

/***/ 5625:
/*!***********************************************************!*\
  !*** ./src/app/add-article/add-article-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticlePageRoutingModule": () => (/* binding */ AddArticlePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_article_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-article.page */ 6249);




const routes = [
    {
        path: '',
        component: _add_article_page__WEBPACK_IMPORTED_MODULE_0__.AddArticlePage
    }
];
let AddArticlePageRoutingModule = class AddArticlePageRoutingModule {
};
AddArticlePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddArticlePageRoutingModule);



/***/ }),

/***/ 3370:
/*!***************************************************!*\
  !*** ./src/app/add-article/add-article.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticlePageModule": () => (/* binding */ AddArticlePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_article_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-article-routing.module */ 5625);
/* harmony import */ var _add_article_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-article.page */ 6249);







let AddArticlePageModule = class AddArticlePageModule {
};
AddArticlePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_article_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddArticlePageRoutingModule
        ],
        declarations: [_add_article_page__WEBPACK_IMPORTED_MODULE_1__.AddArticlePage]
    })
], AddArticlePageModule);



/***/ }),

/***/ 6249:
/*!*************************************************!*\
  !*** ./src/app/add-article/add-article.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticlePage": () => (/* binding */ AddArticlePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_article_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-article.page.html */ 3800);
/* harmony import */ var _add_article_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-article.page.scss */ 5893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article.service */ 73);
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/provider.service */ 5872);







let AddArticlePage = class AddArticlePage {
    constructor(service, router, servicep) {
        this.service = service;
        this.router = router;
        this.servicep = servicep;
    }
    ngOnInit() {
        this.refreshListProviders();
    }
    refreshListProviders() {
        this.servicep.listProviders().subscribe(response => {
            this.providers = response;
        });
    }
    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }
    createArticle(myform) {
        this.id = myform.value.articleProvider;
        const article = new FormData();
        article.append('label', myform.value.articleLabel);
        article.append('price', myform.value.articlePrice);
        article.append('provider', myform.value.articleProvider);
        article.append('imageFile', this.selectedFile, this.selectedFile.name);
        article.append('imageName', this.selectedFile.name);
        this.service.createArticle(article).subscribe((response) => {
            console.log(response);
            alert("Ajout avec succes!");
            this.router.navigate(['article']);
        });
    }
};
AddArticlePage.ctorParameters = () => [
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__.ArticleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_3__.ProviderService }
];
AddArticlePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-article',
        template: _raw_loader_add_article_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_article_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddArticlePage);



/***/ }),

/***/ 5893:
/*!***************************************************!*\
  !*** ./src/app/add-article/add-article.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXJ0aWNsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3800:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-article/add-article.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons collapse=\"true\" slot=\"end\">\n      <ion-button><a routerLink=\"/login\" >\n      <img src=\"../../assets/logout.png\" width=\"30\" height=\"15\"> </a> </ion-button>\n    </ion-buttons> \n    <ion-title>Add Article</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div style=\"padding-top: 30px;\" >\n    <ion-card align=\"center\"  >\n      <ion-card-header>\n       \n  \n        <ion-card-title>  <h1 style=\"color:rgb(115, 170, 241)\">Add Article </h1></ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n  <form #myform=\"ngForm\" (ngSubmit)=\"createArticle(myform)\" >\n   \n    <ion-item >\n      <ion-label>Article Label</ion-label>\n      <ion-input ngModel name=\"articleLabel\" placeholder=\"Enter Label\"  ></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label>Article Price</ion-label>\n      <ion-input ngModel name=\"articlePrice\"  type=\"text\" placeholder=\"Enter Price\"   ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Article Provider</ion-label>\n      <ion-select ngModel name=\"articleProvider\"  ok-text=\"Ok\" cancel-text=\"Cancel\">\n        <ion-select-option  *ngFor=\"let provider of providers\" [value]=\"provider.id\">\n          {{provider.name}}\n      </ion-select-option>\n\n      </ion-select>\n    </ion-item>\n      <ion-item>\n      <ion-label>Article Picture</ion-label>\n      <ion-input  type=\"file\" ngModel name=\"articleImage\" id=\"providerImage\" (change)=\"onFileChanged($event)\" placeholder=\"Enter Logo\" ></ion-input>\n    </ion-item>\n\n    \n   \n   <br>\n    <ion-button type=\"submit\"  expand=\"block\"  style=\"margin: 4%;\">Add Article</ion-button>\n  </form></ion-card-content></ion-card>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n  <ion-title align=\"center\">©2021</ion-title>\n  </ion-toolbar>\n  </ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_add-article_add-article_module_ts.js.map