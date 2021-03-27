function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-address-add-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddAddressAddAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Add New Address')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_map\" #map></div>\n  <div class=\"informations\">\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('LOCATIONS')}} </ion-label>\n      <ion-input [(ngModel)]=\"address\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('HOUSE / FLAT NO')}} </ion-label>\n      <ion-input [(ngModel)]=\"house\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('LANDMARK')}} </ion-label>\n      <ion-input [(ngModel)]=\"landmark\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('Pincode')}} </ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"pincode\"></ion-input>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"title\">\n      <ion-label class=\"title\">\n        {{util.getString('SAVE AS')}}\n      </ion-label>\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('HOME')}} </ion-label>\n        <ion-radio value=\"home\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('WORK')}} </ion-label>\n        <ion-radio value=\"work\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('OTHER')}} </ion-label>\n        <ion-radio value=\"other\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n      {{util.getString('Add')}}\n    </ion-button>\n\n    <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n      {{util.getString('Update')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-address/add-address-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddAddressPageRoutingModule */

  /***/
  function srcAppPagesAddAddressAddAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPageRoutingModule", function () {
      return AddAddressPageRoutingModule;
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


    var _add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
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
      component: _add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"]
    }];

    var AddAddressPageRoutingModule = function AddAddressPageRoutingModule() {
      _classCallCheck(this, AddAddressPageRoutingModule);
    };

    AddAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddAddressPageModule */

  /***/
  function srcAppPagesAddAddressAddAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function () {
      return AddAddressPageModule;
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


    var _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-address-routing.module */
    "./src/app/pages/add-address/add-address-routing.module.ts");
    /* harmony import */


    var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddAddressPageModule = function AddAddressPageModule() {
      _classCallCheck(this, AddAddressPageModule);
    };

    AddAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddAddressPageRoutingModule"]],
      declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })], AddAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddAddressAddAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.div_map {\n  height: 50vh;\n  width: 100%;\n  border: 1px solid gray;\n}\n.informations {\n  padding: 10px;\n}\n.informations .title {\n  font-weight: bold;\n  padding: 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwiL1VzZXJzL2FkbWluL0Rlc2t0b3AvR3JvY2VyeSBEZWxpdmVyeS9pb25pYzVHcm9jZXJ5ZWVBcHBGdWxsX1Y3L0FwcF9jb2RlL1VzZXJfYXBwL3NyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBREVGO0FDQUE7RUFDRSxhQUFBO0FER0Y7QUNGRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uZGl2X21hcCB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5pbmZvcm1hdGlvbnMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmluZm9ybWF0aW9ucyAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uZGl2X21hcCB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG4uaW5mb3JtYXRpb25zIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddAddressPage */

  /***/
  function srcAppPagesAddAddressAddAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPage", function () {
      return AddAddressPage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddAddressPage = /*#__PURE__*/function () {
      function AddAddressPage(geolocation, androidPermissions, navCtrl, api, util, route, platform) {
        var _this = this;

        _classCallCheck(this, AddAddressPage);

        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.route = route;
        this.platform = platform;
        this.address = '';
        this.house = '';
        this.landmark = '';
        this.title = 'home';
        this.pincode = '';
        this.gotLatLng = false;
        this.gotLatLng = false;
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.from) {
            _this.from = 'edit';
            var info = JSON.parse(data.data);
            console.log('da===>', info);
            _this.address = info.address;
            _this.house = info.house;
            _this.id = info.id;
            _this.landmark = info.landmark;
            _this.lat = info.lat;
            _this.lng = info.lng;
            _this.pincode = info.pincode;

            _this.loadmap(_this.lat, _this.lng, _this.mapEle);
          } else {
            _this.from = 'new';

            _this.getLocation();
          }
        });
      }

      _createClass(AddAddressPage, [{
        key: "getLocation",
        value: function getLocation() {
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
                maximumAge: 9000,
                timeout: 20000,
                enableHighAccuracy: true
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this2.lat = resp.coords.latitude;
                  _this2.lng = resp.coords.longitude;
                  _this2.gotLatLng = true;

                  _this2.loadmap(resp.coords.latitude, resp.coords.longitude, _this2.mapEle);

                  _this2.getAddress(_this2.lat, _this2.lng);
                }
              }, function (error) {
                console.log(error);
              })["catch"](function (error) {
                console.log(error);
              });

              _this2.geolocation.watchPosition({
                enableHighAccuracy: true,
                maximumAge: 8000
              }).subscribe(function (position) {
                if (position.coords !== undefined && _this2.gotLatLng === false) {
                  console.log('ok', position);
                  _this2.gotLatLng = true;
                  _this2.lat = position.coords.latitude;
                  _this2.lng = position.coords.longitude;

                  _this2.loadmap(position.coords.latitude, position.coords.longitude, _this2.mapEle);

                  _this2.getAddress(_this2.lat, _this2.lng);
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
            maximumAge: 9000,
            timeout: 20000,
            enableHighAccuracy: true
          }).then(function (resp) {
            if (resp) {
              console.log('resp', resp);
              _this3.gotLatLng = true;

              _this3.loadmap(resp.coords.latitude, resp.coords.longitude, _this3.mapEle);

              _this3.getAddress(resp.coords.latitude, resp.coords.longitude);
            }
          }, function (error) {
            console.log(error);
          })["catch"](function (error) {
            console.log(error);
          });
          this.geolocation.watchPosition({
            enableHighAccuracy: true,
            maximumAge: 8000
          }).subscribe(function (position) {
            if (position.coords !== undefined && _this3.gotLatLng === false) {
              console.log('ok', position);
              _this3.gotLatLng = true;
              _this3.lat = position.coords.latitude;
              _this3.lng = position.coords.longitude;

              _this3.loadmap(position.coords.latitude, position.coords.longitude, _this3.mapEle);

              _this3.getAddress(_this3.lat, _this3.lng);
            }
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          var _this4 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(lat, lng);
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this4.address = results[0].formatted_address;
            _this4.lat = lat;
            _this4.lng = lng;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadmap",
        value: function loadmap(lat, lng, mapElement) {
          var location = new google.maps.LatLng(lat, lng);
          var style = [{
            featureType: 'all',
            elementType: 'all',
            stylers: [{
              saturation: -100
            }]
          }];
          var mapOptions = {
            zoom: 15,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
          };
          this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
          var mapType = new google.maps.StyledMapType(style, {
            name: 'Grayscale'
          });
          this.map.mapTypes.set('Foodfire5', mapType);
          this.map.setMapTypeId('Foodfire5');
          this.addMarker(location);
        }
      }, {
        key: "addMarker",
        value: function addMarker(location) {
          var _this5 = this;

          console.log('location =>', location);
          var icons = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50)
          };
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icons,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          google.maps.event.addListener(this.marker, 'dragend', function () {
            console.log(_this5.marker);

            _this5.getDragAddress(_this5.marker);
          });
        }
      }, {
        key: "getDragAddress",
        value: function getDragAddress(event) {
          var _this6 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(event.position.lat(), event.position.lng());
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this6.address = results[0].formatted_address;
            _this6.lat = event.position.lat();
            _this6.lng = event.position.lng();
          });
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this7 = this;

          if (this.address === '' || this.landmark === '' || this.house === '' || this.pincode === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
          }

          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
          }, function (results, status) {
            console.log(results, status);

            if (status === 'OK' && results && results.length) {
              _this7.lat = results[0].geometry.location.lat();
              _this7.lng = results[0].geometry.location.lng();
              console.log('----->', _this7.lat, _this7.lng);
              console.log('call api');

              _this7.util.show();

              var param = {
                uid: localStorage.getItem('uid'),
                address: _this7.address,
                lat: _this7.lat,
                lng: _this7.lng,
                title: _this7.title,
                house: _this7.house,
                landmark: _this7.landmark,
                pincode: _this7.pincode
              };

              _this7.api.post('address/save', param).subscribe(function (data) {
                _this7.util.hide();

                if (data && data.status === 200) {
                  _this7.util.publishNewAddress();

                  _this7.navCtrl.back();

                  _this7.util.showToast('Address added', 'success', 'bottom');
                } else {
                  _this7.util.errorToast(_this7.util.getString('Something went wrong'));
                }
              }, function (error) {
                console.log(error);

                _this7.util.hide();

                _this7.util.errorToast(_this7.util.getString('Something went wrong'));
              });
            } else {
              _this7.util.errorToast(_this7.util.getString('Something went wrong'));

              return false;
            }
          });
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          var _this8 = this;

          if (this.address === '' || this.landmark === '' || this.house === '' || this.pincode === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
          }

          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
          }, function (results, status) {
            console.log(results, status);

            if (status === 'OK' && results && results.length) {
              _this8.lat = results[0].geometry.location.lat();
              _this8.lng = results[0].geometry.location.lng();
              console.log('----->', _this8.lat, _this8.lng);
              var param = {
                id: _this8.id,
                uid: localStorage.getItem('uid'),
                address: _this8.address,
                lat: _this8.lat,
                lng: _this8.lng,
                title: _this8.title,
                house: _this8.house,
                landmark: _this8.landmark,
                pincode: _this8.pincode
              };

              _this8.util.show();

              _this8.api.post('address/editList', param).subscribe(function (data) {
                _this8.util.hide();

                if (data && data.status === 200) {
                  _this8.util.publishNewAddress();

                  _this8.navCtrl.back();

                  _this8.util.showToast('Address updated', 'success', 'bottom');
                } else {
                  _this8.util.errorToast(_this8.util.getString('Something went wrong'));
                }
              }, function (error) {
                console.log(error);

                _this8.util.hide();

                _this8.util.errorToast(_this8.util.getString('Something went wrong'));
              });
            } else {
              _this8.util.errorToast(_this8.util.getString('Something went wrong'));

              return false;
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }]);

      return AddAddressPage;
    }();

    AddAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddAddressPage.prototype, "mapEle", void 0);
    AddAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-address',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-address.page.scss */
      "./src/app/pages/add-address/add-address.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], AddAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-address-add-address-module-es5.js.map