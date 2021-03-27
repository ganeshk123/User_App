(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label> {{util.getString('Home')}} </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"apps-outline\"></ion-icon>\n      <ion-label> {{util.getString('Categories')}} </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"basket-outline\"></ion-icon>\n      <ion-label> {{util.getString('Cart')}} </ion-label>\n      <ion-badge color=\"danger\" *ngIf=\"cart.cart?.length\"> {{cart.cart.length}} </ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"orders\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n      <ion-label> {{util.getString('History')}} </ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label> {{util.getString('Account')}} </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/cartGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/cartGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: cartGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartGuard", function() { return cartGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



let cartGuard = class cartGuard {
    constructor(navCtrl, cart) {
        this.navCtrl = navCtrl;
        this.cart = cart;
    }
    canActivate(next, state) {
        if (this.cart.cart && this.cart.cart.length) {
            return true;
        }
        this.navCtrl.navigateRoot(['/tabs/cart']);
        return false;
    }
};
cartGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
cartGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
], cartGuard);



/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var src_app_cartGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cartGuard/auth.guard */ "./src/app/cartGuard/auth.guard.ts");

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
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
                    },
                    {
                        path: 'sub-category',
                        loadChildren: () => __webpack_require__.e(/*! import() | sub-category-sub-category-module */ "sub-category-sub-category-module").then(__webpack_require__.bind(null, /*! ../sub-category/sub-category.module */ "./src/app/pages/sub-category/sub-category.module.ts")).then(m => m.SubCategoryPageModule)
                    },
                    {
                        path: 'store',
                        loadChildren: () => __webpack_require__.e(/*! import() | store-store-module */ "store-store-module").then(__webpack_require__.bind(null, /*! ../store/store.module */ "./src/app/pages/store/store.module.ts")).then(m => m.StorePageModule)
                    },
                    {
                        path: 'top-picked',
                        loadChildren: () => __webpack_require__.e(/*! import() | top-picked-top-picked-module */ "top-picked-top-picked-module").then(__webpack_require__.bind(null, /*! ../top-picked/top-picked.module */ "./src/app/pages/top-picked/top-picked.module.ts")).then(m => m.TopPickedPageModule)
                    },
                    {
                        path: 'ratings',
                        loadChildren: () => __webpack_require__.e(/*! import() | rating-list-rating-list-module */ "rating-list-rating-list-module").then(__webpack_require__.bind(null, /*! ../rating-list/rating-list.module */ "./src/app/pages/rating-list/rating-list.module.ts")).then(m => m.RatingListPageModule)
                    },
                    {
                        path: 'products',
                        loadChildren: () => __webpack_require__.e(/*! import() | products-products-module */ "products-products-module").then(__webpack_require__.bind(null, /*! ../products/products.module */ "./src/app/pages/products/products.module.ts")).then(m => m.ProductsPageModule)
                    },
                    {
                        path: 'product',
                        loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ../product/product.module */ "./src/app/pages/product/product.module.ts")).then(m => m.ProductPageModule)
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | categories-categories-module */[__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null, /*! ../categories/categories.module */ "./src/app/pages/categories/categories.module.ts")).then(m => m.CategoriesPageModule)
                    },
                    {
                        path: 'products',
                        loadChildren: () => __webpack_require__.e(/*! import() | products-products-module */ "products-products-module").then(__webpack_require__.bind(null, /*! ../products/products.module */ "./src/app/pages/products/products.module.ts")).then(m => m.ProductsPageModule)
                    },
                    {
                        path: 'product',
                        loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ../product/product.module */ "./src/app/pages/product/product.module.ts")).then(m => m.ProductPageModule)
                    }
                ]
            },
            {
                path: 'cart',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ../cart/cart.module */ "./src/app/pages/cart/cart.module.ts")).then(m => m.CartPageModule),
                    },
                    {
                        path: 'delivery-options',
                        loadChildren: () => Promise.all(/*! import() | delivery-options-delivery-options-module */[__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("delivery-options-delivery-options-module")]).then(__webpack_require__.bind(null, /*! ../delivery-options/delivery-options.module */ "./src/app/pages/delivery-options/delivery-options.module.ts")).then(m => m.DeliveryOptionsPageModule),
                        canActivate: [src_app_cartGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["cartGuard"]]
                    },
                    {
                        path: 'payment',
                        loadChildren: () => __webpack_require__.e(/*! import() | payment-payment-module */ "payment-payment-module").then(__webpack_require__.bind(null, /*! ../payment/payment.module */ "./src/app/pages/payment/payment.module.ts")).then(m => m.PaymentPageModule),
                        canActivate: [src_app_cartGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["cartGuard"]]
                    },
                    {
                        path: 'address',
                        loadChildren: () => __webpack_require__.e(/*! import() | address-address-module */ "address-address-module").then(__webpack_require__.bind(null, /*! ../address/address.module */ "./src/app/pages/address/address.module.ts")).then(m => m.AddressPageModule),
                        canActivate: [src_app_cartGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["cartGuard"]]
                    },
                    {
                        path: 'stripe-payments',
                        loadChildren: () => __webpack_require__.e(/*! import() | stripe-payments-stripe-payments-module */ "stripe-payments-stripe-payments-module").then(__webpack_require__.bind(null, /*! ../stripe-payments/stripe-payments.module */ "./src/app/pages/stripe-payments/stripe-payments.module.ts")).then(m => m.StripePaymentsPageModule),
                        canActivate: [src_app_cartGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["cartGuard"]]
                    },
                    {
                        path: 'add-card',
                        loadChildren: () => __webpack_require__.e(/*! import() | add-card-add-card-module */ "add-card-add-card-module").then(__webpack_require__.bind(null, /*! ../add-card/add-card.module */ "./src/app/pages/add-card/add-card.module.ts")).then(m => m.AddCardPageModule)
                    }
                ],
                canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | orders-orders-module */[__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null, /*! ../orders/orders.module */ "./src/app/pages/orders/orders.module.ts")).then(m => m.OrdersPageModule)
                    }
                ],
                canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | account-account-module */[__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~02afed49"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! ../account/account.module */ "./src/app/pages/account/account.module.ts")).then(m => m.AccountPageModule),
                        canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    },
                    {
                        path: 'profile',
                        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule),
                        canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
                    },
                    {
                        path: 'about',
                        loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/pages/about/about.module.ts")).then(m => m.AboutPageModule)
                    },
                    {
                        path: 'contacts',
                        loadChildren: () => __webpack_require__.e(/*! import() | contacts-contacts-module */ "contacts-contacts-module").then(__webpack_require__.bind(null, /*! ../contacts/contacts.module */ "./src/app/pages/contacts/contacts.module.ts")).then(m => m.ContactsPageModule)
                    },
                    {
                        path: 'languages',
                        loadChildren: () => __webpack_require__.e(/*! import() | languages-languages-module */ "languages-languages-module").then(__webpack_require__.bind(null, /*! ../languages/languages.module */ "./src/app/pages/languages/languages.module.ts")).then(m => m.LanguagesPageModule)
                    },
                    {
                        path: 'faqs',
                        loadChildren: () => __webpack_require__.e(/*! import() | faqs-faqs-module */ "faqs-faqs-module").then(__webpack_require__.bind(null, /*! ../faqs/faqs.module */ "./src/app/pages/faqs/faqs.module.ts")).then(m => m.FaqsPageModule)
                    },
                    {
                        path: 'help',
                        loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ../help/help.module */ "./src/app/pages/help/help.module.ts")).then(m => m.HelpPageModule)
                    }
                ],
                canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: var(--ion-color-light);\n}\nion-tabs ion-tab-bar ion-tab-button {\n  --background: var(--ion-color-light);\n}\nion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0dyb2NlcnkgRGVsaXZlcnkvaW9uaWM1R3JvY2VyeWVlQXBwRnVsbF9WNy9BcHBfY29kZS9Vc2VyX2FwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBVUM7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7QURDRjtBQ0FFO0VBQ0Msb0NBQUE7QURFSDtBQ0lBO0VBQ0MsZUFBQTtBREREIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tdGFicyBpb24tdGFiLWJhciB7XG4gIC0tYm9yZGVyOiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi10YWJze1xuXHRpb24tdGFiLWJhciB7XG5cdFx0LS1ib3JkZXI6IDA7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXHRcdGlvbi10YWItYnV0dG9uIHtcblx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblx0XHR9XG5cblx0fVxufVxuXG5pb24taWNvbntcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



let TabsPage = class TabsPage {
    constructor(cart, util) {
        this.cart = cart;
        this.util = util;
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map