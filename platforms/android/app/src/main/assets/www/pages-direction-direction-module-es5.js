function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-direction-direction-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDirectionDirectionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navCtrl.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\" *ngIf=\"who==='driver' && driverInfo && driverInfo.cover\">\n      <ion-label class=\"head_lbl\">Order on the Way</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+driverInfo.cover+'),url(assets/bg.png)'}\"></div>\n        <div style=\"padding-left: 20px;\" (click)=\"callDriver()\">\n          <ion-label class=\"boy_name\">{{driverInfo.first_name +' '+ driverInfo.last_name}}</ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"mail-outline\"></ion-icon> {{driverInfo.email}}\n          </ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"call-outline\"></ion-icon> {{driverInfo.mobile}}\n          </ion-label>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"lower_div\" *ngIf=\"who === 'store' && storeInfo && storeInfo.cover\">\n      <ion-label class=\"head_lbl\">Order on the Way</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+storeInfo.cover+'),url(assets/bg.png)'}\"></div>\n        <div style=\"padding-left: 20px;\" (click)=\"callStore()\">\n          <ion-label class=\"boy_name\">{{storeInfo.name}}</ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"location-outline\"></ion-icon> {{storeInfo.address}}\n          </ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"call-outline\"></ion-icon> {{storeInfo.mobile}}\n          </ion-label>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/direction/direction-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/direction/direction-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DirectionPageRoutingModule */

  /***/
  function srcAppPagesDirectionDirectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionPageRoutingModule", function () {
      return DirectionPageRoutingModule;
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


    var _direction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./direction.page */
    "./src/app/pages/direction/direction.page.ts");

    var routes = [{
      path: '',
      component: _direction_page__WEBPACK_IMPORTED_MODULE_3__["DirectionPage"]
    }];

    var DirectionPageRoutingModule = function DirectionPageRoutingModule() {
      _classCallCheck(this, DirectionPageRoutingModule);
    };

    DirectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DirectionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/direction/direction.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/direction/direction.module.ts ***!
    \*****************************************************/

  /*! exports provided: DirectionPageModule */

  /***/
  function srcAppPagesDirectionDirectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionPageModule", function () {
      return DirectionPageModule;
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


    var _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./direction-routing.module */
    "./src/app/pages/direction/direction-routing.module.ts");
    /* harmony import */


    var _direction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./direction.page */
    "./src/app/pages/direction/direction.page.ts");

    var DirectionPageModule = function DirectionPageModule() {
      _classCallCheck(this, DirectionPageModule);
    };

    DirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionPageRoutingModule"]],
      declarations: [_direction_page__WEBPACK_IMPORTED_MODULE_6__["DirectionPage"]]
    })], DirectionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/direction/direction.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/direction/direction.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDirectionDirectionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0dyb2NlcnkgRGVsaXZlcnkvaW9uaWM1R3JvY2VyeWVlQXBwRnVsbF9WNy9BcHBfY29kZS9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL2RpcmVjdGlvbi9kaXJlY3Rpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kaXJlY3Rpb24vZGlyZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0daO0FEQUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VSO0FERFE7RUFDSSxjQUFBO0FDR1o7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR1o7QURBUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VaO0FERFk7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDR2hCO0FERFk7RUFDSSxnQkFBQTtBQ0doQjtBRERZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNHaEI7QUREWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR2hCO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDUTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGlyZWN0aW9uL2RpcmVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLnVwcGVyX2RpdntcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAjbWFwe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRfbGJse1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJpdmVyX2RldGFpbF9kaXZ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoIDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3lfbmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAub3JkZXJfc3RhdHVze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH0gICBcbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IHtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuaGVhZF9sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgLmJveV9uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IC5hZGRyZXNzIHtcbiAgY29sb3I6IGdyYXk7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTNweDtcbiAgdG9wOiAtNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLm9yZGVyX2RldGFpbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAub3JkZXJfc3RhdHVzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/direction/direction.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/direction/direction.page.ts ***!
    \***************************************************/

  /*! exports provided: DirectionPage */

  /***/
  function srcAppPagesDirectionDirectionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionPage", function () {
      return DirectionPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

    var DirectionPage = /*#__PURE__*/function () {
      function DirectionPage(api, util, route, navCtrl, iab, platform, androidPermissions, geolocation, alertController) {
        var _this = this;

        _classCallCheck(this, DirectionPage);

        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id && data.lat && data.lng && data.who) {
            _this.uid = data.id;
            _this.orderId = data.orderId;
            _this.who = data.who;
            _this.orderAt = data.orderAt;
            _this.homeLat = data.homeLat;
            _this.homeLng = data.homeLng;

            if (_this.who === 'driver') {
              _this.driverLat = data.lat;
              _this.driverLng = data.lng;
              _this.homeLat = parseFloat(_this.homeLat);
              _this.homeLng = parseFloat(_this.homeLng);
              _this.driverLat = parseFloat(_this.driverLat);
              _this.driverLng = parseFloat(_this.driverLng);
              var param = {
                id: _this.uid
              };

              _this.api.post('drivers/getById', param).subscribe(function (infoss) {
                console.log('******************* driver --->>>> driverinfo --->', infoss);

                if (infoss && infoss.status === 200 && infoss.data && infoss.data.length) {
                  _this.driverInfo = infoss.data[0];
                  _this.driverLat = parseFloat(infoss.data[0].lat);
                  _this.driverLng = parseFloat(infoss.data[0].lng);

                  _this.loadMap(_this.driverLat, _this.driverLng, _this.homeLat, _this.homeLng);
                }
              }, function (error) {
                console.log('==>>', error);
              });
            } else {
              _this.storeLat = parseFloat(data.lat);
              _this.storeLng = parseFloat(data.lng);
              var _param = {
                id: _this.uid
              };

              _this.api.post('stores/getByUid', _param).subscribe(function (data) {
                console.log('*******************', data);

                if (data && data.status === 200 && data.data && data.data.length) {
                  _this.storeLat = parseFloat(data.data[0].lat);
                  _this.storeLng = parseFloat(data.data[0].lng);
                  _this.storeInfo = data.data[0];

                  _this.getMyLocation();
                }
              }, function (error) {
                console.log(error);
              });
            }
          } else {
            _this.navCtrl.back();
          }
        });
      }

      _createClass(DirectionPage, [{
        key: "callDriver",
        value: function callDriver() {
          this.iab.create('tel:' + this.driverInfo.mobile, '_system');
        }
      }, {
        key: "callStore",
        value: function callStore() {
          this.iab.create('tel:' + this.storeInfo.mobile, '_system');
        }
      }, {
        key: "getMyLocation",
        value: function getMyLocation() {
          var _this2 = this;

          this.platform.ready().then(function () {
            if (_this2.platform.is('android')) {
              _this2.androidPermissions.checkPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                return console.log('Has permission?', result.hasPermission);
              }, function (err) {
                return _this2.androidPermissions.requestPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              });

              _this2.grantRequest();
            } else if (_this2.platform.is('ios')) {
              _this2.grantRequest();
            } else {
              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this2.myLat = resp.coords.latitude;
                  _this2.myLng = resp.coords.longitude;

                  _this2.loadMap(_this2.myLat, _this2.myLng, _this2.storeLat, _this2.storeLng);
                }
              })["catch"](function (error) {
                console.log(error);

                _this2.grantRequest();
              });

              var watch = _this2.geolocation.watchPosition();

              watch.subscribe(function (data) {
                if (data && data.coords) {
                  console.log('update', data.coords);
                  _this2.myLat = data.coords.latitude;
                  _this2.myLng = data.coords.longitude;
                }
              });
            }
          });
        }
      }, {
        key: "grantRequest",
        value: function grantRequest() {
          var _this3 = this;

          this.geolocation.getCurrentPosition({
            maximumAge: 3000,
            timeout: 10000,
            enableHighAccuracy: false
          }).then(function (resp) {
            if (resp) {
              console.log('resp 1', resp);
              _this3.myLat = resp.coords.latitude;
              _this3.myLng = resp.coords.longitude;

              _this3.loadMap(_this3.myLat, _this3.myLng, _this3.storeLat, _this3.storeLng);
            }
          })["catch"](function (error) {
            console.log(error);
            console.log('ASK Permission');

            if (_this3.platform.is('ios')) {
              _this3.iOSAlert();
            } else {
              _this3.presentAlertConfirm();
            }
          });
          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            if (data && data.coords) {
              console.log('update', data.coords);
              _this3.myLat = data.coords.latitude;
              _this3.myLng = data.coords.longitude;
            }
          });
        }
      }, {
        key: "iOSAlert",
        value: function iOSAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Error',
                      subHeader: 'Location error',
                      message: 'Please Enable Location Service from settings for best experience',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Please Enable Location Service for best experience',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this4.askPermission();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "askPermission",
        value: function askPermission() {
          this.getMyLocation();
        }
      }, {
        key: "getDriverLocation",
        value: function getDriverLocation(marker, maps) {
          var _this5 = this;

          var param = {
            id: this.uid
          };
          this.api.post('drivers/getById', param).subscribe(function (data) {
            console.log('******************* driver --->>>> driverinfo --->', data);

            if (data && data.status === 200 && data.data && data.data.length) {
              _this5.driverLat = parseFloat(data.data[0].lat);
              _this5.driverLng = parseFloat(data.data[0].lng);

              _this5.changeMarkerPosition(marker, maps);
            }
          }, function (error) {
            console.log('==>>', error);
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap(latOri, lngOri, latDest, lngDest) {
          var _this6 = this;

          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer();
          directionsDisplay = new google.maps.DirectionsRenderer();
          var bounds = new google.maps.LatLngBounds();
          var origin1 = {
            lat: parseFloat(latOri),
            lng: parseFloat(lngOri)
          };
          var destinationA = {
            lat: latDest,
            lng: lngDest
          };
          var maps = new google.maps.Map(this.mapElement.nativeElement, {
            center: {
              lat: latOri,
              lng: lngOri
            },
            disableDefaultUI: true,
            zoom: 100
          });
          var custPos = new google.maps.LatLng(latOri, lngOri);
          var restPos = new google.maps.LatLng(latDest, lngDest);
          var logo = {
            url: 'assets/marker.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor

          };
          var marker = new google.maps.Marker({
            map: maps,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: logo
          });
          var markerCust = new google.maps.Marker({
            map: maps,
            position: restPos,
            animation: google.maps.Animation.DROP
          });
          marker.setMap(maps);
          markerCust.setMap(maps);
          directionsDisplay.setMap(maps); // directionsDisplay.setOptions({ suppressMarkers: true });

          directionsDisplay.setOptions({
            polylineOptions: {
              strokeWeight: 4,
              strokeOpacity: 1,
              strokeColor: '#44C261'
            },
            suppressMarkers: true
          });
          var geocoder = new google.maps.Geocoder();
          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function (response, status) {
            if (status !== 'OK') {
              alert('Error was: ' + status);
            } else {
              var originList = response.originAddresses;
              var destinationList = response.destinationAddresses;

              var showGeocodedAddressOnMap = function showGeocodedAddressOnMap(asDestination) {
                return function (results, status) {
                  if (status === 'OK') {
                    maps.fitBounds(bounds.extend(results[0].geometry.location));
                  } else {
                    alert('Geocode was not successful due to: ' + status);
                  }
                };
              };

              directionsService.route({
                origin: origin1,
                destination: destinationA,
                travelMode: 'DRIVING'
              }, function (response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });

              for (var i = 0; i < originList.length; i++) {
                var results = response.rows[i].elements;
                geocoder.geocode({
                  'address': originList[i]
                }, showGeocodedAddressOnMap(false));

                for (var j = 0; j < results.length; j++) {
                  geocoder.geocode({
                    'address': destinationList[j]
                  }, showGeocodedAddressOnMap(true));
                }
              }
            }
          });
          this.interval = setInterval(function () {
            if (_this6.who === 'driver') {
              _this6.getDriverLocation(marker, maps);
            } else {
              console.log('update->');

              _this6.changeMyMarker(marker, maps);
            }
          }, 12000);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log('leaved');
          clearInterval(this.interval);
        }
      }, {
        key: "changeMarkerPosition",
        value: function changeMarkerPosition(marker, map) {
          var latlng = new google.maps.LatLng(this.driverLat, this.driverLng);
          map.setCenter(latlng);
          marker.setPosition(latlng);
        }
      }, {
        key: "changeMyMarker",
        value: function changeMyMarker(marker, map) {
          var latlng = new google.maps.LatLng(this.myLat, this.myLng);
          map.setCenter(latlng);
          marker.setPosition(latlng);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DirectionPage;
    }();

    DirectionPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DirectionPage.prototype, "mapElement", void 0);
    DirectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-direction',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./direction.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./direction.page.scss */
      "./src/app/pages/direction/direction.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], DirectionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-direction-direction-module-es5.js.map