function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Checkout')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <div class=\"coupones\" (click)=\"openCoupon()\">\n    <img src=\"assets/imgs/discount.png\" class=\"badge\" />\n    <ion-label class=\"title\">{{util.getString('Apply coupon code')}} <br>\n      <p *ngIf=\"cart.coupon\">{{util.getString('Coupon Applied')}} </p>\n    </ion-label>\n  </div>\n\n  <div class=\"billing\">\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Item Total')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.totalPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\" *ngIf=\"cart.coupon\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Discount')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.discount}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.discount}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Taxes & Charges')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.orderTax}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.orderTax}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Delivery Charges')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.deliveryPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.deliveryPrice}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTotal boldClass\"> {{util.getString('Grand Total')}} </ion-label>\n      <ion-label class=\"priceTotal boldClass\">\n\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.grandTotal}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.grandTotal}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n  </div>\n  <div class=\"header\">\n    <ion-label class=\"title\"> {{util.getString('Payment with')}} </ion-label>\n  </div>\n  <ion-item (click)=\"openStripe()\" lines=\"none\" *ngIf=\"havePayment && haveStripe\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/stripe.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with Stripe')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"createOrder()\" lines=\"none\" *ngIf=\"havePayment && haveCOD\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/cod.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Cash on Delivery')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paypalPayment()\" lines=\"none\" *ngIf=\"havePayment && havePayPal\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paypal.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with PayPal')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paytm()\" lines=\"none\" *ngIf=\"havePayment && havePayTM\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paytm.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with PayTM')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n\n  <ion-item (click)=\"instaPay()\" lines=\"none\" *ngIf=\"havePayment && haveInstamojo\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/instamojoapp.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with Instamojo')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"proceed()\" lines=\"none\" *ngIf=\"havePayment && haveRazor\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/razor.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with RazorPay')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paystackPay()\" lines=\"none\" *ngIf=\"havePayment && havepayStack\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paystack.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with PayStack')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"flutterpay()\" lines=\"none\" *ngIf=\"havePayment && havepayStack\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/flutter.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with Flutterwave')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/payment/payment-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentPageRoutingModule */

  /***/
  function srcAppPagesPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
      return PaymentPageRoutingModule;
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


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");
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
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
      _classCallCheck(this, PaymentPageRoutingModule);
    };

    PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.module.ts ***!
    \*************************************************/

  /*! exports provided: PaymentPageModule */

  /***/
  function srcAppPagesPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
      return PaymentPageModule;
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


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/pages/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var PaymentPageModule = function PaymentPageModule() {
      _classCallCheck(this, PaymentPageModule);
    };

    PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })], PaymentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.coupones {\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n.coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n.coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n.billing {\n  padding: 5px 10px;\n}\n.billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n.billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n.billing .singleRow .boldClass {\n  font-weight: bold;\n}\n.billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .price {\n  font-size: 0.8rem;\n}\n.header {\n  background: #f3f3f3;\n  padding: 20px;\n  margin-top: 20px;\n}\n.header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0dyb2NlcnkgRGVsaXZlcnkvaW9uaWM1R3JvY2VyeWVlQXBwRnVsbF9WNy9BcHBfY29kZS9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FER1I7QUNESTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QURHUjtBQ0FBO0VBQ0ksaUJBQUE7QURHSjtBQ0ZJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBRElSO0FDSFE7RUFDSSxpQkFBQTtBREtaO0FDSFE7RUFDSSxpQkFBQTtBREtaO0FDSFE7RUFDSSxlQUFBO0FES1o7QUNIUTtFQUNJLGVBQUE7QURLWjtBQ0hRO0VBQ0ksaUJBQUE7QURLWjtBQ0FBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0ZJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FESVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5jb3Vwb25lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb3Vwb25lcyAuYmFkZ2Uge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmNvdXBvbmVzIC50aXRsZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYmlsbGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAuaGVhZGVyVGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5iaWxsaW5nIC5zaW5nbGVSb3cgLmJvbGRDbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAuaGVhZGVyVG90YWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYmlsbGluZyAuc2luZ2xlUm93IC5wcmljZVRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAucHJpY2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5jb3Vwb25lc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmJhZGdle1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICB9XG59XG4uYmlsbGluZ3tcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAuc2luZ2xlUm93e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgLmhlYWRlclRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJvbGRDbGFzc3tcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJUb3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2VUb3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/payment/payment.page.ts ***!
    \***********************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPagesPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var PaymentPage = /*#__PURE__*/function () {
      function PaymentPage(router, navCtrl, cart, util, api, iab) {
        var _this = this;

        _classCallCheck(this, PaymentPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.util = util;
        this.api = api;
        this.iab = iab;
        this.instamojo = {
          key: '',
          token: '',
          code: ''
        };
        this.paystack = {
          pk: '',
          sk: '',
          code: ''
        };
        this.flutterwave = {
          pk: '',
          code: ''
        };
        console.log('delivery at', this.cart.deliveryAt);
        this.util.getCouponObservable().subscribe(function (data) {
          console.log(data);

          _this.cart.calcuate();

          console.log(_this.cart.discount);
        }, function (error) {
          console.log(error);
        });
        this.getPayments();
      }

      _createClass(PaymentPage, [{
        key: "getPayments",
        value: function getPayments() {
          var _this2 = this;

          this.util.show();
          this.api.get('payments').subscribe(function (data) {
            console.log(data);

            _this2.util.hide();

            if (data && data.status === 200 && data.data) {
              var info = data.data.filter(function (x) {
                return x.status === '1';
              });
              console.log('total payments', info);

              if (info && info.length > 0) {
                console.log('---->>', info);
                _this2.havePayment = true;
                var stripe = info.filter(function (x) {
                  return x.id === '1';
                });
                _this2.haveStripe = stripe && stripe.length > 0 ? true : false;
                var cod = info.filter(function (x) {
                  return x.id === '2';
                });
                _this2.haveCOD = cod && cod.length > 0 ? true : false;
                var payPal = info.filter(function (x) {
                  return x.id === '3';
                });
                _this2.havePayPal = payPal && payPal.length > 0 ? true : false;
                var razor = info.filter(function (x) {
                  return x.id === '4';
                });
                _this2.haveRazor = razor && razor.length > 0 ? true : false;
                var paytm = info.filter(function (x) {
                  return x.id === '5';
                });
                _this2.havePayTM = paytm && paytm.length > 0 ? true : false;
                var insta = info.filter(function (x) {
                  return x.id === '6';
                });
                _this2.haveInstamojo = insta && insta.length > 0 ? true : false;
                var paystack = info.filter(function (x) {
                  return x.id === '7';
                });
                _this2.havepayStack = paystack && paystack.length > 0 ? true : false;
                var flutterwave = info.filter(function (x) {
                  return x.id === '8';
                });
                _this2.haveflutterwave = flutterwave && flutterwave.length > 0 ? true : false;

                if (_this2.haveStripe) {
                  // this.util.stripe = stripe;
                  if (stripe) {
                    var creds = JSON.parse(stripe[0].creds);

                    if (stripe[0].env === '1') {
                      _this2.util.stripe = creds.live;
                    } else {
                      _this2.util.stripe = creds.test;
                    }

                    _this2.util.stripeCode = creds && creds.code ? creds.code : 'USD';
                  }

                  console.log('============>>', _this2.util.stripe);
                }

                if (_this2.haveInstamojo) {
                  var datas = info.filter(function (x) {
                    return x.id === '6';
                  });
                  _this2.instaENV = datas[0].env;

                  if (insta) {
                    var instaPay = JSON.parse(datas[0].creds);
                    _this2.instamojo = instaPay;
                    console.log('instaMOJO', _this2.instamojo);
                  }
                }

                if (_this2.haveRazor) {
                  var razorPay = info.filter(function (x) {
                    return x.id === '4';
                  });
                  var env = razorPay[0].env;

                  if (razorPay) {
                    var keys = JSON.parse(razorPay[0].creds);
                    console.log('evnof razor pay', env);
                    _this2.razorKey = env === '0' ? keys.test : keys.live;
                    console.log('----------', _this2.razorKey);
                  }
                }

                if (_this2.havepayStack) {
                  var _keys = JSON.parse(paystack[0].creds);

                  _this2.paystack = _keys;
                  console.log('paystack variables', _this2.paystack);
                }

                if (_this2.haveflutterwave) {
                  var _keys2 = JSON.parse(flutterwave[0].creds);

                  _this2.flutterwave = _keys2;
                  console.log('flutterwave config', _this2.flutterwave);
                }
              } else {
                _this2.havePayment = false;

                _this2.util.showToast(_this2.util.getString('No Payment Found'), 'danger', 'bottom');
              }
            } else {
              _this2.havePayment = false;

              _this2.util.showToast(_this2.util.getString('No Payment Found'), 'danger', 'bottom');
            }
          }, function (error) {
            console.log(error);

            _this2.util.hide();

            _this2.havePayment = false;

            _this2.util.showToast(_this2.util.getString('Something went wrong'), 'danger', 'bottom');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "proceed",
        value: function proceed() {
          var _this3 = this;

          // this.util.errorToast('ongoing');
          var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
          };
          var param = {
            key: this.razorKey,
            amount: this.cart.grandTotal ? this.cart.grandTotal * 100 : 5,
            email: this.getEmail(),
            logo: this.api.mediaURL + this.util.logo
          };
          console.log('to url===>', this.api.JSON_to_URLEncoded(param));
          var url = this.api.baseUrl + 'razorpay?' + this.api.JSON_to_URLEncoded(param);
          var browser = this.iab.create(url, '_blank', options);
          browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;

            if (navUrl.includes('success')) {
              console.log('close');
              browser.close();
              var urlItems = new URL(event.url);
              var orderId = urlItems.searchParams.get('id');

              _this3.makeOrder('razorpay', orderId);
            }
          });
        }
      }, {
        key: "cardInfo",
        value: function cardInfo(val) {}
      }, {
        key: "openStripe",
        value: function openStripe() {
          this.router.navigate(['tabs/cart/stripe-payments']);
        }
      }, {
        key: "goToSucess",
        value: function goToSucess() {
          this.router.navigate(['/success']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "openCoupon",
        value: function openCoupon() {
          this.router.navigate(['offers']);
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var storeId, orderStatus, notes, param;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //////////// new
                    //////////// new
                    storeId = _toConsumableArray(new Set(this.cart.cart.map(function (item) {
                      return item.store_id;
                    })));
                    orderStatus = [];
                    storeId.forEach(function (element) {
                      var info = {
                        id: element,
                        status: 'created'
                      };
                      orderStatus.push(info);
                    });
                    notes = [{
                      status: 1,
                      value: 'Order Created',
                      time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll')
                    }];
                    param = {
                      uid: localStorage.getItem('uid'),
                      store_id: storeId.join(),
                      date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                      paid_method: 'cod',
                      order_to: this.cart.deliveryAt,
                      orders: JSON.stringify(this.cart.cart),
                      notes: JSON.stringify(notes),
                      address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                      driver_id: '',
                      total: this.cart.totalPrice,
                      tax: this.cart.orderTax,
                      grand_total: this.cart.grandTotal,
                      delivery_charge: this.cart.deliveryPrice,
                      coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                      discount: this.cart.discount,
                      pay_key: '',
                      status: JSON.stringify(orderStatus),
                      assignee: '',
                      extra: JSON.stringify(this.cart.userOrderTaxByStores)
                    };
                    console.log('param----->', param);
                    this.util.show();
                    this.api.post('orders/save', param).subscribe(function (data) {
                      console.log(data);

                      _this4.util.hide();

                      _this4.api.createOrderNotification(_this4.cart.stores);

                      _this4.cart.clearCart();

                      _this4.util.publishNewOrder();

                      _this4.navCtrl.navigateRoot(['/tabs/orders'], {
                        replaceUrl: true,
                        skipLocationChange: true
                      });
                    }, function (error) {
                      console.log(error);

                      _this4.util.hide();

                      _this4.util.showToast(_this4.util.getString('Something went wrong'), 'danger', 'bottom');
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "makeOrder",
        value: function makeOrder(method, key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var storeId, orderStatus, notes, param;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //////////// new
                    //////////// new
                    storeId = _toConsumableArray(new Set(this.cart.cart.map(function (item) {
                      return item.store_id;
                    })));
                    orderStatus = [];
                    storeId.forEach(function (element) {
                      var info = {
                        id: element,
                        status: 'created'
                      };
                      orderStatus.push(info);
                    });
                    notes = [{
                      status: 1,
                      value: 'Order Created',
                      time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll')
                    }];
                    param = {
                      uid: localStorage.getItem('uid'),
                      store_id: storeId.join(),
                      date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                      paid_method: method,
                      order_to: this.cart.deliveryAt,
                      orders: JSON.stringify(this.cart.cart),
                      notes: JSON.stringify(notes),
                      address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                      driver_id: '',
                      total: this.cart.totalPrice,
                      tax: this.cart.orderTax,
                      grand_total: this.cart.grandTotal,
                      delivery_charge: this.cart.deliveryPrice,
                      coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                      discount: this.cart.discount,
                      pay_key: key,
                      status: JSON.stringify(orderStatus),
                      assignee: '',
                      extra: JSON.stringify(this.cart.userOrderTaxByStores)
                    };
                    console.log('param----->', param);
                    this.util.show();
                    this.api.post('orders/save', param).subscribe(function (data) {
                      console.log(data);

                      _this5.util.hide();

                      _this5.api.createOrderNotification(_this5.cart.stores);

                      _this5.cart.clearCart();

                      _this5.util.publishNewOrder();

                      _this5.navCtrl.navigateRoot(['/tabs/orders'], {
                        replaceUrl: true,
                        skipLocationChange: true
                      });
                    }, function (error) {
                      console.log(error);

                      _this5.util.hide();

                      _this5.util.showToast(_this5.util.getString('Something went wrong'), 'danger', 'bottom');
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "paypalPayment",
        value: function paypalPayment() {
          var _this6 = this;

          var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
          };
          var param = {
            uid: localStorage.getItem('uid'),
            itemName: 'groceryee',
            grandTotal: this.cart.grandTotal,
            dateTime: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm'),
            logo: this.api.mediaURL + this.util.logo
          };
          console.log('to url===>', this.api.JSON_to_URLEncoded(param));
          var url = this.api.baseUrl + 'paypal/buyProduct?' + this.api.JSON_to_URLEncoded(param);
          var browser = this.iab.create(url, '_blank', options);
          browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;

            if (navUrl.includes('success') || navUrl.includes('checkout/done')) {
              console.log('close');
              browser.close();

              _this6.makeOrder('paypal', 'fromApp');
            }
          });
        }
      }, {
        key: "flutterpay",
        value: function flutterpay() {
          var _this7 = this;

          var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
          };
          var param = {
            key: this.flutterwave.pk,
            amount: this.cart.grandTotal,
            email: this.getEmail(),
            phone: this.util.userInfo.mobile,
            name: this.getName(),
            code: this.flutterwave.code,
            logo: this.api.mediaURL + this.util.logo
          };
          console.log('to url===>', this.api.JSON_to_URLEncoded(param));
          var url = this.api.baseUrl + 'flutterwave?' + this.api.JSON_to_URLEncoded(param);
          var browser = this.iab.create(url, '_blank', options);
          browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;

            if (navUrl.includes('success') || navUrl.includes('closed')) {
              console.log('close');
              browser.close();

              if (navUrl.includes('success')) {
                var urlItems = new URL(event.url);
                var orderId = urlItems.searchParams.get('transaction_id');

                _this7.makeOrder('flutterwave', orderId);
              }
            }
          });
        }
      }, {
        key: "paystackPay",
        value: function paystackPay() {
          var _this8 = this;

          var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
          };
          var paykey = '' + Math.floor(Math.random() * 1000000000 + 1);
          var param = {
            key: this.paystack.pk,
            email: this.util.userInfo.email,
            amount: this.cart.grandTotal * 100,
            firstname: this.util.userInfo.first_name,
            lastname: this.util.userInfo.last_name,
            ref: paykey
          };
          console.log('to url===>', this.api.JSON_to_URLEncoded(param));
          var url = this.api.baseUrl + 'paystack?' + this.api.JSON_to_URLEncoded(param);
          var browser = this.iab.create(url, '_blank', options);
          browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;

            if (navUrl.includes('success') || navUrl.includes('close')) {
              console.log('close');
              browser.close();

              if (navUrl.includes('success')) {
                console.log('closed---->>>>>');

                _this8.makeOrder('paystack', paykey);
              } else {
                console.log('closed');
              }
            }
          });
        }
      }, {
        key: "paytm",
        value: function paytm() {
          var _this9 = this;

          var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
          };
          var orderId = this.util.makeid(20);
          var param = {
            ORDER_ID: orderId,
            CUST_ID: localStorage.getItem('uid'),
            INDUSTRY_TYPE_ID: 'Retail',
            CHANNEL_ID: 'WAP',
            TXN_AMOUNT: this.cart.grandTotal ? this.cart.grandTotal : 5
          };
          console.log('to url===>', this.api.JSON_to_URLEncoded(param));
          var url = this.api.baseUrl + 'paytm/pay?' + this.api.JSON_to_URLEncoded(param);
          var browser = this.iab.create(url, '_blank', options);
          browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;

            if (navUrl.includes('success')) {
              console.log('close');
              browser.close();

              _this9.makeOrder('paytm', orderId);
            }
          });
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Groceryee';
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@groceryee.com';
        }
      }, {
        key: "instaPay",
        value: function instaPay() {
          var _this10 = this;

          var url;

          if (this.instaENV === '0') {
            url = 'https://test.instamojo.com/api/1.1/payment-requests/';
          } else {
            url = 'https://www.instamojo.com/api/1.1/payment-requests/';
          }

          ;
          var param = {
            allow_repeated_payments: 'False',
            amount: this.cart.grandTotal,
            buyer_name: this.getName(),
            purpose: 'Groceryee order',
            redirect_url: this.api.baseUrl + 'paypal/success',
            phone: this.util.userInfo && this.util.userInfo.mobile ? this.util.userInfo.mobile : '',
            send_email: 'True',
            webhook: this.api.baseUrl,
            send_sms: 'True',
            email: this.getEmail()
          };
          this.util.show();
          this.api.instaPay(url, param, this.instamojo.key, this.instamojo.token).then(function (data) {
            console.log(data);

            _this10.util.hide();

            console.log(JSON.parse(data.data));
            var info = JSON.parse(data.data);
            console.log('data.status', data.status);

            if (data.status === 201 && info && info.success === true) {
              var options = {
                location: 'no',
                clearcache: 'yes',
                zoom: 'yes',
                toolbar: 'yes',
                closebuttoncaption: 'close'
              };

              var browser = _this10.iab.create(info.payment_request.longurl, '_blank', options);

              browser.on('loadstop').subscribe(function (event) {
                var navUrl = event.url;
                console.log('navURL', navUrl);

                if (navUrl.includes('success')) {
                  browser.close();
                  var urlItems = new URL(event.url);
                  console.log(urlItems);
                  var orderId = urlItems.searchParams.get('payment_id');

                  _this10.makeOrder('instamojo', orderId);
                }
              });
            } else {
              var error = JSON.parse(data.error);
              console.log('error message', error);

              if (error && error.message) {
                _this10.util.showToast(error.message, 'danger', 'bottom');

                return false;
              }

              _this10.util.showToast(_this10.util.getString('Something went wrong'), 'danger', 'bottom');
            }
          }, function (error) {
            console.log(error);

            _this10.util.hide();

            var message = JSON.parse(error.error);
            console.log('error message', message);

            if (message && message.message) {
              _this10.util.showToast(message.message, 'danger', 'bottom');

              return false;
            }

            _this10.util.showToast(_this10.util.getString('Something went wrong'), 'danger', 'bottom');
          })["catch"](function (error) {
            console.log(error);

            _this10.util.hide();

            var message = JSON.parse(error.error);
            console.log('error message', message);

            if (message && message.message) {
              _this10.util.showToast(message.message, 'danger', 'bottom');

              return false;
            }

            _this10.util.showToast(_this10.util.getString('Something went wrong'), 'danger', 'bottom');
          });
        }
      }]);

      return PaymentPage;
    }();

    PaymentPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }];
    };

    PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/pages/payment/payment.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=payment-payment-module-es5.js.map