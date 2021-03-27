(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\" *ngIf=\"util.user_login ==='0'\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n      <ion-input type=\"email\" [placeholder]=\"util.getString('Email')\" [(ngModel)]=\"email\">\n        <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n      <ion-input type=\"password\" [placeholder]=\"util.getString('Password')\" [(ngModel)]=\"password\">\n        <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n      <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label>\n      <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"login()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\"> {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.user_login ==='1'\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-label class=\"mobiles\">{{mobileccCode}}</ion-label>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-input [(ngModel)]=\"mobileNumber\" type=\"number\" [placeholder]=\"util.getString('Mobile Number')\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-input [(ngModel)]=\"mobilePassword\" name=\"password\" [placeholder]=\"util.getString('Password')\"\n        type=\"password\">\n      </ion-input>\n      <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label>\n      <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"onPhoneLogin()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\">\n          {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.user_login ==='2'\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-label class=\"mobiles\">{{mobileccCode}}</ion-label>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-input [(ngModel)]=\"mobileNumber\" type=\"number\" [placeholder]=\"util.getString('Mobile Number')\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label>\n      <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"onOTPLogin()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\">\n          {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");

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
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .mobiles {\n  background: white;\n  border-radius: 20px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n  font-size: 18px;\n  color: gray;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 6px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL2FkbWluL0Rlc2t0b3AvR3JvY2VyeSBEZWxpdmVyeS9pb25pYzVHcm9jZXJ5ZWVBcHBGdWxsX1Y3L0FwcF9jb2RlL1VzZXJfYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksc0NBQUE7QURFSjtBQ0NBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QURFSjtBQ0FJO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBREVSO0FDQUk7RUFFSSxrQkFBQTtBRENSO0FDQVE7RUFFSSxXQUFBO0FEQ1o7QUNFSTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtBRERSO0FDRVE7RUFDSSxjQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUREWjtBQ0dRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUREWjtBQ0lRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBREZaO0FDSVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FERlo7QUNLUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURIWjtBQ0tRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBREhaO0FDS1E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBREhaO0FDS1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURIWjtBQ0tRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREhaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubWFpbl9oZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubW9iaWxlcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAudHJpIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubGJsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuaWNvbkRpdntcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuaWNvbntcbiAgICAgICAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtX2RpdntcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLm1haW5faGVhZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3Jnb3R7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlc3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICB9XG4gICAgICAgIC50cmkge1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICAubGJse1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zaWdudXBfc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-country/select-country.page */ "./src/app/pages/select-country/select-country.page.ts");
/* harmony import */ var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../verify/verify.page */ "./src/app/pages/verify/verify.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let LoginPage = class LoginPage {
    constructor(router, util, navCtrl, api, modalController) {
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalController = modalController;
        this.email = '';
        this.password = '';
        this.mobileccCode = '';
        this.mobileNumber = '';
        this.mobilePassword = '';
        if (!this.util.user_login || this.util.user_login === '') {
            this.util.user_login = '0';
        }
        console.log('Home Type==================>>', this.util.user_login);
        this.mobileccCode = '+91';
    }
    ngOnInit() {
    }
    login() {
        console.log('login');
        if (!this.email || !this.password) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
        }
        this.loggedIn = true;
        const param = {
            email: this.email,
            password: this.password
        };
        this.api.post('users/login', param).subscribe((data) => {
            this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                if (data && data.data && data.data.type === 'user') {
                    if (data.data.status === '1') {
                        localStorage.setItem('uid', data.data.id);
                        this.util.userInfo = data.data;
                        const fcm = localStorage.getItem('fcm');
                        if (fcm && fcm !== null && fcm !== 'null') {
                            const updateParam = {
                                id: data.data.id,
                                fcm_token: fcm
                            };
                            this.api.post('users/edit_profile', updateParam).subscribe((data) => {
                                console.log('user info=>', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        const favParam = {
                            id: data.data.id
                        };
                        this.api.post('favourite/getByUid', favParam).subscribe((data) => {
                            console.log('fav data', data);
                            if (data && data.status === 200 && data.data.length > 0) {
                                this.util.haveFav = true;
                                try {
                                    this.util.favIds = data.data[0].ids.split(',');
                                }
                                catch (error) {
                                    console.log('eroor', error);
                                }
                            }
                            else {
                                this.util.haveFav = false;
                            }
                        }, error => {
                            this.util.haveFav = false;
                            console.log('fav error', error);
                        });
                        this.navCtrl.navigateRoot(['']);
                    }
                    else {
                        console.log('not valid');
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: this.util.getString('Error'),
                            text: this.util.getString('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.getString('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(status => {
                            if (status && status.value) {
                                // localStorage.setItem('helpId', data.data.id);
                                // this.router.navigate(['inbox']);
                                const inboxParam = {
                                    queryParams: {
                                        id: 0,
                                        name: 'Support',
                                        uid: data.data.id
                                    }
                                };
                                this.router.navigate(['inbox'], inboxParam);
                            }
                        });
                    }
                }
                else {
                    this.util.errorToast(this.util.getString('Not valid user'));
                    this.email = '';
                    this.password = '';
                }
            }
            else if (data && data.status === 500) {
                this.util.errorToast(data.data.message);
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loggedIn = false;
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    ionViewDidEnter() {
        console.log('enter');
    }
    create() {
        this.router.navigate(['register']);
    }
    reset() {
        this.router.navigate(['reset-password']);
    }
    openCountry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('open ccode');
            const modal = yield this.modalController.create({
                component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__["SelectCountryPage"],
                backdropDismiss: false,
                showBackdrop: true,
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.role === 'selected') {
                    console.log('ok');
                    this.mobileccCode = '+' + data.data;
                }
            });
            yield modal.present();
        });
    }
    onPhoneLogin() {
        if (!this.mobileccCode || !this.mobileNumber || !this.mobilePassword) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
        }
        const param = {
            cc: this.mobileccCode,
            mobile: this.mobileNumber,
            password: this.mobilePassword
        };
        this.loggedIn = true;
        this.api.post('users/loginWithPhoneAndPassword', param).subscribe((data) => {
            this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                if (data && data.data && data.data.type === 'user') {
                    if (data.data.status === '1') {
                        localStorage.setItem('uid', data.data.id);
                        this.util.userInfo = data.data;
                        const fcm = localStorage.getItem('fcm');
                        if (fcm && fcm !== null && fcm !== 'null') {
                            const updateParam = {
                                id: data.data.id,
                                fcm_token: fcm
                            };
                            this.api.post('users/edit_profile', updateParam).subscribe((data) => {
                                console.log('user info=>', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        const favParam = {
                            id: data.data.id
                        };
                        this.api.post('favourite/getByUid', favParam).subscribe((data) => {
                            console.log('fav data', data);
                            if (data && data.status === 200 && data.data.length > 0) {
                                this.util.haveFav = true;
                                try {
                                    this.util.favIds = data.data[0].ids.split(',');
                                }
                                catch (error) {
                                    console.log('eroor', error);
                                }
                            }
                            else {
                                this.util.haveFav = false;
                            }
                        }, error => {
                            this.util.haveFav = false;
                            console.log('fav error', error);
                        });
                        this.navCtrl.navigateRoot(['']);
                    }
                    else {
                        console.log('not valid');
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: this.util.getString('Error'),
                            text: this.util.getString('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.getString('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(status => {
                            if (status && status.value) {
                                // localStorage.setItem('helpId', data.data.id);
                                // this.router.navigate(['inbox']);
                                const inboxParam = {
                                    queryParams: {
                                        id: 0,
                                        name: 'Support',
                                        uid: data.data.id
                                    }
                                };
                                this.router.navigate(['inbox'], inboxParam);
                            }
                        });
                    }
                }
                else {
                    this.util.errorToast(this.util.getString('Not valid user'));
                }
            }
            else if (data && data.status === 500) {
                this.util.errorToast(data.data.message);
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loggedIn = false;
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    onOTPLogin() {
        if (!this.mobileccCode || !this.mobileNumber) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
        }
        const param = {
            mobile: this.mobileNumber,
            cc: this.mobileccCode
        };
        this.loggedIn = true;
        this.api.post('users/checkMobileNumber', param).subscribe((data) => {
            this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                console.log('open modal');
                this.openModal(data.data.id);
            }
            else if (data && data.status === 500) {
                this.util.errorToast(data.data.message);
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loggedIn = false;
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    openModal(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('uid', uid);
            const modal = yield this.modalController.create({
                component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                componentProps: { code: this.mobileccCode, phone: this.mobileNumber }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.role === 'ok') {
                    const param = {
                        id: uid
                    };
                    this.api.post('users/getById', param).subscribe((data) => {
                        console.log('user data', data);
                        if (data && data.status === 200 && data.data && data.data.length && data.data[0].type === 'user') {
                            this.util.userInfo = data.data[0];
                            if (data && data.data && data.data[0].type === 'user') {
                                if (data.data[0].status === '1') {
                                    localStorage.setItem('uid', uid);
                                    const fcm = localStorage.getItem('fcm');
                                    if (fcm && fcm !== null && fcm !== 'null') {
                                        const updateParam = {
                                            id: uid,
                                            fcm_token: fcm
                                        };
                                        this.api.post('users/edit_profile', updateParam).subscribe((data) => {
                                            console.log('user info=>', data);
                                        }, error => {
                                            console.log(error);
                                        });
                                    }
                                    const favParam = {
                                        id: uid
                                    };
                                    this.api.post('favourite/getByUid', favParam).subscribe((data) => {
                                        console.log('fav data', data);
                                        if (data && data.status === 200 && data.data.length > 0) {
                                            this.util.haveFav = true;
                                            try {
                                                this.util.favIds = data.data[0].ids.split(',');
                                            }
                                            catch (error) {
                                                console.log('eroor', error);
                                            }
                                        }
                                        else {
                                            this.util.haveFav = false;
                                        }
                                    }, error => {
                                        this.util.haveFav = false;
                                        console.log('fav error', error);
                                    });
                                    this.navCtrl.navigateRoot(['']);
                                }
                                else {
                                    console.log('not valid');
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                        title: this.util.getString('Error'),
                                        text: this.util.getString('Your are blocked please contact administrator'),
                                        icon: 'error',
                                        showConfirmButton: true,
                                        showCancelButton: true,
                                        confirmButtonText: this.util.getString('Need Help?'),
                                        backdrop: false,
                                        background: 'white'
                                    }).then(status => {
                                        if (status && status.value) {
                                            const inboxParam = {
                                                queryParams: {
                                                    id: 0,
                                                    name: 'Support',
                                                    uid: uid
                                                }
                                            };
                                            this.router.navigate(['inbox'], inboxParam);
                                        }
                                    });
                                }
                            }
                            else {
                                this.util.errorToast(this.util.getString('Not valid user'));
                            }
                        }
                        else if (data && data.status === 500) {
                            this.util.errorToast(data.data.message);
                        }
                        else {
                            this.util.errorToast(this.util.getString('Something went wrong'));
                        }
                    }, error => {
                        localStorage.removeItem('uid');
                        console.log(error);
                    });
                }
            });
            modal.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map