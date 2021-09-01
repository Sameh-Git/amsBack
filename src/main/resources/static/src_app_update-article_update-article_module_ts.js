(self["webpackChunkamsIonic"] = self["webpackChunkamsIonic"] || []).push([["src_app_update-article_update-article_module_ts"],{

/***/ 6048:
/*!*****************************************************************!*\
  !*** ./src/app/update-article/update-article-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateArticlePageRoutingModule": () => (/* binding */ UpdateArticlePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _update_article_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-article.page */ 616);




const routes = [
    {
        path: '',
        component: _update_article_page__WEBPACK_IMPORTED_MODULE_0__.UpdateArticlePage
    }
];
let UpdateArticlePageRoutingModule = class UpdateArticlePageRoutingModule {
};
UpdateArticlePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateArticlePageRoutingModule);



/***/ }),

/***/ 6651:
/*!*********************************************************!*\
  !*** ./src/app/update-article/update-article.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateArticlePageModule": () => (/* binding */ UpdateArticlePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _update_article_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-article-routing.module */ 6048);
/* harmony import */ var _update_article_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-article.page */ 616);







let UpdateArticlePageModule = class UpdateArticlePageModule {
};
UpdateArticlePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_article_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateArticlePageRoutingModule
        ],
        declarations: [_update_article_page__WEBPACK_IMPORTED_MODULE_1__.UpdateArticlePage]
    })
], UpdateArticlePageModule);



/***/ }),

/***/ 616:
/*!*******************************************************!*\
  !*** ./src/app/update-article/update-article.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateArticlePage": () => (/* binding */ UpdateArticlePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_update_article_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-article.page.html */ 7834);
/* harmony import */ var _update_article_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-article.page.scss */ 201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article.service */ 73);
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/provider.service */ 5872);








let UpdateArticlePage = class UpdateArticlePage {
    constructor(service, router, route, servicep) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.servicep = servicep;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.articleToUpdate = this.service.getArticle(this.id).subscribe(response => {
                console.log(response);
                this.label = response["label"];
                this.price = response["price"];
                this.provider = response["provider"];
                this.nomImage = response["picture"];
            });
        });
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
    updateArticle() {
        this.articleToUpdate = {
            'label': this.label,
            'price': this.price,
            'id': this.id
        };
        const article = new FormData();
        article.append('imageFile', this.selectedFile, this.selectedFile.name);
        article.append('imageName', this.selectedFile.name);
        article.append('label', this.label);
        article.append('price', this.price);
        // article.append('provider', this.provider);
        article.append('id', this.id);
        this.service.updateArticle(article, this.id).subscribe(response => {
            console.log(response);
            alert("Modification successfully!");
            this.router.navigate(['article']);
        });
    }
};
UpdateArticlePage.ctorParameters = () => [
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__.ArticleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_3__.ProviderService }
];
UpdateArticlePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update-article',
        template: _raw_loader_update_article_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_article_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateArticlePage);



/***/ }),

/***/ 201:
/*!*********************************************************!*\
  !*** ./src/app/update-article/update-article.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYXJ0aWNsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7834:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-article/update-article.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons collapse=\"true\" slot=\"end\">\n      <ion-button><a routerLink=\"/login\" >\n      <img src=\"../../assets/logout.png\" width=\"30\" height=\"15\"> </a> </ion-button>\n    </ion-buttons> \n    <ion-title>Update Article</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div style=\"padding-top: 0px;\" >\n    <ion-card align=\"center\"  >\n      <ion-card-header>\n       \n  \n        <ion-card-title></ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n \n  <form (ngSubmit)=\"updateArticle()\">\n    <ion-item>\n      <ion-label> <b style=\"color: rgb(1, 92, 153);\"> Article Label </b></ion-label>\n      <ion-input [(ngModel)]=\"label\" name=\"articleLabel\" type=\"text\" id=\"providerName\"   ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><b style=\"color: rgb(1, 92, 153);\">Article Price </b></ion-label>\n      <ion-input [(ngModel)]=\"price\" name=\"articlePrice\"  type=\"text\"   ></ion-input>\n    </ion-item>\n\n   \n  \n    <ion-item >\n      \n       <img src=\"http://127.0.0.1:8080/images/article/{{nomImage}}\">\n    \n    </ion-item>\n    \n    <ion-item >\n      <ion-label>  <b style=\"color: rgb(1, 92, 153);\">New Picture </b></ion-label>\n      <ion-input  type=\"file\"  ngModel name=\"articlePicture\"  (change)=\"onFileChanged($event)\" placeholder=\"Enter Logo\" ></ion-input>\n    </ion-item>\n   <br>\n    <ion-button type=\"submit\"  expand=\"block\" style=\"margin: 4%;\">Update Article</ion-button>\n  </form>\n  </ion-card-content></ion-card>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n  <ion-title align=\"center\">©2021</ion-title>\n  </ion-toolbar>\n  </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_update-article_update-article_module_ts.js.map