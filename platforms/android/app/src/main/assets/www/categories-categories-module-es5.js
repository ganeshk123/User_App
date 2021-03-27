function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{util.getString('Categories')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content class=\"ion-padding\" *ngIf=\"!util.appClosed\">\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <div class=\"main\" *ngIf=\"categories?.length && !dummy?.length\">\n\n    <div class=\"flex_main\" *ngFor=\"let item of categories\">\n      <div class=\"flex_div\" (click)=\"change(item.id)\">\n        <img [src]=\"api.mediaURL+ item.cover\" alt=\"\" class=\"cateIcon\">\n        <div class=\"detail_div\">\n          <ion-label class=\"title_name\" [class.boldFont]=\"selectedIndex === item.id\">{{item.name}}</ion-label>\n        </div>\n        <ion-icon name=\"chevron-down-outline\" class=\"arrow\"></ion-icon>\n      </div>\n\n      <div class=\"details\" *ngIf=\"selectedIndex === item.id\">\n        <div class=\"inlnes\" *ngFor=\"let sub of item.subCates\" (click)=\"goToProductList(sub)\">\n          <ion-label class=\"titles\" [class.boldFont]=\"subIndex === sub.id\">{{sub.name}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/categories/categories-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesPageRoutingModule */

  /***/
  function srcAppPagesCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
      return CategoriesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/pages/categories/categories.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }];

    var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
      _classCallCheck(this, CategoriesPageRoutingModule);
    };

    CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriesPageModule */

  /***/
  function srcAppPagesCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
      return CategoriesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categories-routing.module */
    "./src/app/pages/categories/categories-routing.module.ts");
    /* harmony import */


    var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/pages/categories/categories.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CategoriesPageModule = function CategoriesPageModule() {
      _classCallCheck(this, CategoriesPageModule);
    };

    CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })], CategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-grid {\n  padding: 0;\n}\n.main_content_div ion-grid ion-col {\n  text-align: center;\n}\n.main_content_div ion-grid ion-col .cat_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div ion-grid ion-col img {\n  height: 80px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  width: 100%;\n}\n.main_content_div ion-grid ion-col .lbl {\n  margin: 10px 0px;\n}\n.main {\n  margin-bottom: 10px;\n  padding-bottom: 70px;\n}\n.main ion-label {\n  display: block;\n}\n.main .flex_main {\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  background: white;\n  border-radius: 12px;\n  margin-bottom: 10px;\n}\n.main .flex_main .flex_div {\n  display: flex;\n  height: 56px;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: relative;\n}\n.main .flex_main .flex_div .cateIcon {\n  height: 50px;\n  width: 50px;\n}\n.main .flex_main .flex_div .detail_div {\n  margin-left: 20px;\n}\n.main .flex_main .flex_div .detail_div .title_name {\n  font-size: 14px;\n}\n.main .flex_main .flex_div .detail_div .boldFont {\n  font-weight: bold;\n}\n.main .flex_main .flex_div .detail_div .time {\n  font-size: 12px;\n  color: #707070;\n}\n.main .flex_main .flex_div ion-icon {\n  position: absolute;\n  right: 20px;\n  color: #3D4148;\n  font-size: 20px;\n}\n.main .name {\n  margin: 0px;\n  font-size: 18px;\n  color: black;\n}\n.main .time {\n  margin: 5px 0px 0px 0px;\n  font-size: 15px;\n  color: gray;\n}\n.main .drop {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main .details {\n  padding: 10px;\n}\n.main .details .inlnes {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: gray;\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.main .details .inlnes .boldFont {\n  font-weight: bold;\n}\n.main .details .inlnes ion-label {\n  font-size: 14px;\n  color: #575D67;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0dyb2NlcnkgRGVsaXZlcnkvaW9uaWM1R3JvY2VyeWVlQXBwRnVsbF9WNy9BcHBfY29kZS9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBREVKO0FDREk7RUFDSSxjQUFBO0FER1I7QUNBSTtFQUNJLFVBQUE7QURFUjtBQ0FRO0VBQ0ksa0JBQUE7QURFWjtBQ0RZO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FER2hCO0FDRFk7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QURHaEI7QUNEWTtFQUNJLGdCQUFBO0FER2hCO0FDR0E7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FEQUo7QUNDSTtFQUNFLGNBQUE7QURDTjtBQ0VJO0VBQ0ksMENBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURBUjtBQ0VRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREFaO0FDQ1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRENoQjtBQ0NZO0VBQ0ksaUJBQUE7QURDaEI7QUNBZ0I7RUFDSSxlQUFBO0FERXBCO0FDQWdCO0VBQ0ksaUJBQUE7QURFcEI7QUNBZ0I7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBREVsQjtBQ0NZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURDaEI7QUNNSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREpSO0FDT0k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FETFI7QUNRSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUROUjtBQ1NJO0VBQ0ksYUFBQTtBRFBSO0FDUVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUROWjtBQ09ZO0VBQ0ksaUJBQUE7QURMaEI7QUNPWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FETGQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tZ3JpZCBpb24tY29sIC5jYXRfZGl2IHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLWNvbCBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1jb2wgLmxibCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5tYWluIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4ubWFpbiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluIC5mbGV4X21haW4ge1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYgLmNhdGVJY29uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IC5kZXRhaWxfZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiAuZGV0YWlsX2RpdiAudGl0bGVfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IC5kZXRhaWxfZGl2IC5ib2xkRm9udCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYgLmRldGFpbF9kaXYgLnRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzNENDE0ODtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW4gLm5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWFpbiAudGltZSB7XG4gIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW4gLmRyb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluIC5kZXRhaWxzIC5pbmxuZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW4gLmRldGFpbHMgLmlubG5lcyAuYm9sZEZvbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluIC5kZXRhaWxzIC5pbmxuZXMgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU3NUQ2Nztcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLmNhdF9kaXZ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJse1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYWlue1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5mbGV4X21haW57XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgLmZsZXhfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLmNhdGVJY29ue1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWxfZGl2e1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIC50aXRsZV9uYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2xkRm9udHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aW1le1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM0Q0MTQ4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgLm5hbWV7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAudGltZSB7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5kcm9we1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciA7XG4gICAgfVxuXG4gICAgLmRldGFpbHN7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC5pbmxuZXN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAuYm9sZEZvbnR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTc1RDY3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categories/categories.page.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppPagesCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CategoriesPage = /*#__PURE__*/function () {
      function CategoriesPage(util, cat, router, api) {
        _classCallCheck(this, CategoriesPage);

        this.util = util;
        this.cat = cat;
        this.router = router;
        this.api = api;
        this.categories = [];
        this.dummy = Array(20);
        this.getCates();
      }

      _createClass(CategoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "getCates",
        value: function getCates() {
          var _this = this;

          this.categories = [];
          this.dummy = Array(20);
          this.api.get('categories').subscribe(function (datas) {
            _this.dummy = [];

            if (datas && datas.data && datas.data.length) {
              datas.data.forEach(function (element) {
                if (element.status === '1') {
                  var info = {
                    id: element.id,
                    name: element.name,
                    cover: element.cover,
                    subCates: []
                  };

                  _this.categories.push(info);
                }
              });
            }

            _this.api.get('subcate').subscribe(function (subCates) {
              console.log('sub cates', subCates);

              if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
                _this.categories.forEach(function (element, i) {
                  subCates.data.forEach(function (sub) {
                    if (sub.status === '1' && element.id === sub.cate_id) {
                      _this.categories[i].subCates.push(sub);
                    }
                  });
                });

                console.log('=>>', _this.categories);
              }
            }, function (error) {
              console.log(error);

              _this.util.errorToast(_this.util.getString('Something went wrong'));
            });
          }, function (error) {
            console.log(error);

            _this.util.errorToast(_this.util.getString('Something went wrong'));

            _this.dummy = [];
          });
        }
      }, {
        key: "change",
        value: function change(id) {
          if (this.selectedIndex === id) {
            this.selectedIndex = '';
          } else {
            this.selectedIndex = id;
          }
        }
      }, {
        key: "goToProductList",
        value: function goToProductList(val) {
          this.subIndex = val.id;
          var navData = {
            queryParams: {
              id: val.id,
              name: val.name,
              from: 'categories'
            }
          };
          this.router.navigate(['/tabs/categories/products'], navData);
        }
      }]);

      return CategoriesPage;
    }();

    CategoriesPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/pages/categories/categories.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], CategoriesPage);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CategoryService = function CategoryService() {
      _classCallCheck(this, CategoryService);

      this.category = [{
        img: 'assets/imgs/category/fruit.png',
        name: 'Fruits',
        color: 'rgba(226, 61, 61, 0.2)'
      }, {
        img: 'assets/imgs/category/beverages.png',
        name: 'Beverages',
        color: 'rgba(113, 239, 239,0.2)'
      }, {
        img: 'assets/imgs/category/veg.png',
        name: 'Veg',
        color: 'rgba(237, 129, 21, 0.2)'
      }, {
        img: 'assets/imgs/category/non-veg.png',
        name: 'Non-veg',
        color: 'rgba(243, 210, 146,0.3)'
      }, {
        img: 'assets/imgs/category/bread.png',
        name: 'Backery',
        color: 'rgba(195, 132, 91,0.3)'
      }, {
        img: 'assets/imgs/category/grain.png',
        name: 'Grains',
        color: 'rgba(246, 225, 127,0.3)'
      }, {
        img: 'assets/imgs/category/meat.png',
        name: 'Meat',
        color: 'rgba(250, 118, 141,0.3)'
      }, {
        img: 'assets/imgs/category/dairy.png',
        name: 'Dairy',
        color: 'rgb(216, 242, 246)'
      }, {
        img: 'assets/imgs/category/clean2.png',
        name: 'Cleaners',
        color: 'rgba(250, 118, 141,0.3)'
      }];
    };

    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CategoryService);
    /***/
  }
}]);
//# sourceMappingURL=categories-categories-module-es5.js.map