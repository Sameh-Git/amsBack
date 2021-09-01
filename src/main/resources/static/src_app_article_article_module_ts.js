(self["webpackChunkamsIonic"] = self["webpackChunkamsIonic"] || []).push([["src_app_article_article_module_ts"],{

/***/ 1218:
/*!***************************************************!*\
  !*** ./src/app/article/article-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePageRoutingModule": () => (/* binding */ ArticlePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.page */ 4283);




const routes = [
    {
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_0__.ArticlePage
    }
];
let ArticlePageRoutingModule = class ArticlePageRoutingModule {
};
ArticlePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticlePageRoutingModule);



/***/ }),

/***/ 5745:
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePageModule": () => (/* binding */ ArticlePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-routing.module */ 1218);
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.page */ 4283);







let ArticlePageModule = class ArticlePageModule {
};
ArticlePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _article_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticlePageRoutingModule
        ],
        declarations: [_article_page__WEBPACK_IMPORTED_MODULE_1__.ArticlePage]
    })
], ArticlePageModule);



/***/ }),

/***/ 4283:
/*!*****************************************!*\
  !*** ./src/app/article/article.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePage": () => (/* binding */ ArticlePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./article.page.html */ 373);
/* harmony import */ var _article_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.page.scss */ 8175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/article.service */ 73);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);







let ArticlePage = class ArticlePage {
    constructor(loginService, service, router) {
        this.loginService = loginService;
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.listArticles().subscribe(response => {
            this.articles = response;
        });
    }
    deleteArticle(myObj) {
        this.service.deleteArticle(myObj).subscribe(response => {
            console.log(response);
            this.refreshListArticles();
        });
    }
    refreshListArticles() {
        this.service.listArticles().subscribe(response => {
            this.articles = response;
        });
        if (this.articles.size() == 0) {
            this.articles = null;
        }
    }
    updateArticle(myObj) {
        this.router.navigate(['update-article' + '/' + myObj['id']]);
    }
};
ArticlePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__.ArticleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ArticlePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-article',
        template: _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_article_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArticlePage);



/***/ }),

/***/ 8175:
/*!*******************************************!*\
  !*** ./src/app/article/article.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 373:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons collapse=\"true\" slot=\"end\">\n      <ion-button><a routerLink=\"/login\" >\n      <img src=\"../../assets/logout.png\" width=\"30\" height=\"15\"> </a> </ion-button>\n    </ion-buttons> \n    <ion-title>Articles</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div style=\"padding-top: 0px;\" >\n  \n        <h1 style=\"color:rgb(115, 170, 241)\">List of Articles</h1>\n  <ion-list>\n    \n  <ion-item *ngFor=\"let a of articles\">\n \n    <ion-label id=\"l\">\n      <img src=\"http://127.0.0.1:8080/images/article/{{a.picture}}\"  with=\"6%\" height=\"5%\">\n    </ion-label>\n    <ion-label>\n      <h2>{{a.label}}</h2>\n      <p>{{a.provider.name}}</p>\n      <p>{{a.price}}</p>\n      <div  >\n      <ion-button (click)=\"updateArticle(a)\"   color=\"warning\"  *ngIf=\"loginService.srole=='Admin' || loginService.srole=='Superadmin'\">Edit</ion-button>\n      <ion-button (click)=\"deleteArticle(a)\"  color=\"danger\" *ngIf=\"loginService.srole=='Admin' || loginService.srole=='Superadmin'\">Delete</ion-button>\n      </div>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n  <ion-title align=\"center\" >©2021</ion-title>\n  </ion-toolbar>\n  </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_article_article_module_ts.js.map