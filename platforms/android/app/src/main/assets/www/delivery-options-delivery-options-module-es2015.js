(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-options-delivery-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Delivery Options')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"header\"> {{util.getString('Delivery from')}} </p>\n  <ion-list lines=\"none\" class=\"delivery\">\n    <ion-radio-group [(ngModel)]=\"deliveryOption\">\n      <ion-item>\n        <ion-thumbnail>\n          <img src=\"assets/imgs/home.png\" />\n        </ion-thumbnail>\n        <ion-label> {{util.getString('At Home')}} </ion-label>\n        <ion-radio value=\"home\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item>\n      \n    </ion-radio-group>\n  </ion-list>\n\n  <div>\n    <p class=\"header\"> {{util.getString('Receive at')}} </p>\n    <div class=\"ion-activatable\" style=\"position: relative;overflow: hidden;padding: 10px 20px;\"\n      (click)=\"openTime($event)\">\n      <ion-label> {{time}} </ion-label>\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </div>\n  </div>\n\n  \n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"btm\">\n    \n    <div (click)=\"payment()\" class=\"btmbar\">\n      <ion-label>{{cart.cart.length}} {{util.getString('Items')}}:\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.totalPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} </span>\n      </ion-label>\n      <ion-label>{{util.getString('Payment')}}\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-label>\n    </div>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DeliveryOptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPageRoutingModule", function() { return DeliveryOptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _delivery_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-options.page */ "./src/app/pages/delivery-options/delivery-options.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _delivery_options_page__WEBPACK_IMPORTED_MODULE_3__["DeliveryOptionsPage"]
    }
];
let DeliveryOptionsPageRoutingModule = class DeliveryOptionsPageRoutingModule {
};
DeliveryOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliveryOptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.module.ts ***!
  \*******************************************************************/
/*! exports provided: DeliveryOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPageModule", function() { return DeliveryOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _delivery_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-options-routing.module */ "./src/app/pages/delivery-options/delivery-options-routing.module.ts");
/* harmony import */ var _delivery_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-options.page */ "./src/app/pages/delivery-options/delivery-options.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let DeliveryOptionsPageModule = class DeliveryOptionsPageModule {
};
DeliveryOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _delivery_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryOptionsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_delivery_options_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryOptionsPage"]]
    })
], DeliveryOptionsPageModule);



/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-thumbnail {\n  --size: 25px;\n  height: 25px;\n  width: 25px;\n  margin-right: 10px;\n}\n.header {\n  font-size: 16px;\n  font-weight: bold;\n  background: #f3f3f3;\n  margin: 0px;\n  padding: 10px;\n}\n.stores {\n  border-bottom: 1px solid lightgray;\n  padding: 0px 20px;\n  margin-top: 20px;\n}\n.name {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0px;\n}\n.address {\n  font-size: 12px;\n  margin: 0px;\n  margin-bottom: 5px;\n}\n.btm {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n.btm .bottomText {\n  font-size: 10px;\n  color: gray;\n  padding: 0px 20px;\n}\n.btm .bottomText .bolder {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n.btm .btmbar {\n  height: 60px;\n  width: 100%;\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n}\n.btm .btmbar ion-label {\n  color: white;\n  font-family: muli-bold;\n  display: flex;\n}\n.btm .btmbar ion-label ion-icon {\n  padding-left: 5px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVsaXZlcnktb3B0aW9ucy9kZWxpdmVyeS1vcHRpb25zLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0dyb2NlcnkgRGVsaXZlcnkvaW9uaWM1R3JvY2VyeWVlQXBwRnVsbF9WNy9BcHBfY29kZS9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5LW9wdGlvbnMvZGVsaXZlcnktb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBREVKO0FDQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FER0o7QUNEQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRElKO0FDRkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FES0o7QUNIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURNSjtBQ0hBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRE1KO0FDTEk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FET1I7QUNOUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURRWjtBQ0xJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QURLUjtBQ0hRO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBREtaO0FDSFk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURLaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWxpdmVyeS1vcHRpb25zL2RlbGl2ZXJ5LW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi10aHVtYm5haWwge1xuICAtLXNpemU6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3RvcmVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRtIC5ib3R0b21UZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4uYnRtIC5ib3R0b21UZXh0IC5ib2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYnRtIC5idG1iYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG4uYnRtIC5idG1iYXIgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ0bSAuYnRtYmFyIGlvbi1sYWJlbCBpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi10aHVtYm5haWwge1xuICAgIC0tc2l6ZTogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlcntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnN0b3Jlc3tcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubmFtZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uYWRkcmVzc3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRte1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuYm90dG9tVGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIC5ib2xkZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRtYmFye1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgLy8gYm90dG9tOiAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.page.ts ***!
  \*****************************************************************/
/*! exports provided: DeliveryOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPage", function() { return DeliveryOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_components_time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/time/time.component */ "./src/app/components/time/time.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let DeliveryOptionsPage = class DeliveryOptionsPage {
    constructor(navCtrl, api, util, cart, popoverController, router) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.popoverController = popoverController;
        this.router = router;
        this.deliveryOption = 'home';
        this.storeAddress = [];
        this.getStoreList();
        this.datetime = 'today';
        this.time = this.util.getString('Today - ') + moment__WEBPACK_IMPORTED_MODULE_7__().format('dddd, MMMM Do YYYY');
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    getStoreList() {
        const info = [...new Set(this.cart.cart.map(item => item.store_id))];
        console.log('store iddss==================>>', info);
        // test
        // info.push(10, 17);
        // test
        const param = {
            id: info.join()
        };
        this.api.post('stores/getStoresData', param).subscribe((data) => {
            console.log(data);
            if (data && data.status === 200 && data.data.length) {
                this.storeAddress = data.data;
                this.cart.stores = this.storeAddress;
            }
            else {
                this.util.showToast(this.util.getString('No Stores Found'), 'danger', 'bottom');
                this.back();
            }
        }, error => {
            console.log('error', error);
            this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    }
    openTime(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
                event: ev,
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data.data) {
                    if (data.data === 'today') {
                        this.datetime = 'today';
                        this.time = this.util.getString('Today - ') + moment__WEBPACK_IMPORTED_MODULE_7__().format('dddd, MMMM Do YYYY');
                    }
                    else {
                        this.datetime = 'tomorrow';
                        this.time = this.util.getString('Tomorrow - ') + moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('dddd, MMMM Do YYYY');
                    }
                }
            });
            yield popover.present();
        });
    }
    payment() {
        this.cart.deliveryAt = this.deliveryOption;
        this.cart.datetime = this.datetime;
        if (this.deliveryOption === 'home') {
            console.log('address');
            const param = {
                queryParams: {
                    from: 'cart'
                }
            };
            this.cart.calcuate();
            this.router.navigate(['tabs/cart/address'], param);
        }
        else {
            console.log('payment');
            this.cart.calcuate();
            this.router.navigate(['tabs/cart/payment']);
        }
    }
};
DeliveryOptionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
DeliveryOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-options',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-options.page.scss */ "./src/app/pages/delivery-options/delivery-options.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], DeliveryOptionsPage);



/***/ })

}]);
//# sourceMappingURL=delivery-options-delivery-options-module-es2015.js.map