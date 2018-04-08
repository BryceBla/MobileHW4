webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_share_share__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, modalCtrl, shareService, dataService, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.shareService = shareService;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.quant = 1;
        this.orders = [];
        this.once = true;
        this.dataService.getOrder().then(function (cart) {
            if (cart) {
                _this.orders = cart;
            }
        });
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.orders = [
            { title: 'The Triple Stack BurgCheese', price: '10.00', category: 'Dish',
                photo: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
                description: 'This is the best pre-made menu item there is.' },
        ];
    };
    AboutPage.prototype.add = function (cart) {
        var indexOfOrder = this.orders.indexOf(cart);
        var orders = {
            quant: this.quant
        };
        if (this.once == true) {
            this.orders[indexOfOrder].quant = 1;
            this.once = false;
        }
        this.orders[indexOfOrder].quant++;
    };
    AboutPage.prototype.minus = function (cart) {
        var indexOfOrder = this.orders.indexOf(cart);
        var orders = {
            quant: this.quant
        };
        if (this.once == true) {
            this.orders[indexOfOrder].quant = 1;
            this.once = false;
        }
        if (this.orders[indexOfOrder].quant > 0) {
            this.orders[indexOfOrder].quant--;
        }
    };
    AboutPage.prototype.placeOrder = function (item) {
        var indexOfOrder = this.orders.indexOf(item);
        var orders = {
            quant: this.quant
        };
        var x = 0;
        var i = 0;
        for (i; i <= this.orders.lastIndexOf(item) + 1; i++) {
            x = x + JSON.parse(this.orders[indexOfOrder + 1].price);
            var y = this.orders[indexOfOrder + 1].quant;
            var z = x * y;
            this.Total = z;
        }
        this.dataService.saveOrder(this.orders);
        var alert = this.alertCtrl.create({
            title: 'Your total comes to: ',
            subTitle: '$' + this.Total,
            buttons: ['Thanks Dawg']
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Order Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main">\n  <ion-card *ngFor="let cart of orders" class="cards">\n\n    <img src={{cart.photo}}/>\n    Item: {{cart.title}} > {{cart.category}}\n    $ {{cart.price}}\n     Quantity: {{cart.quant}}\n    <button  (click)="add(cart)" class="quantP"> <ion-icon name="add"></ion-icon> </button>\n    <button  (click)="minus(cart)" class="quantN"><ion-icon name="remove"></ion-icon> </button>\n\n  </ion-card>\n\n   <button  (click)="placeOrder(item)" ion-button block large icon-only color="buy">\n     Get Total\n   </button>\n\n\n   <h2> Total : {{this.Total | currency:\'USD\'}}</h2>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_share_share__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_share_share__["a" /* ShareService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* Data */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* Data */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _f || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_share_share__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, modalCtrl, shareService, dataService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.shareService = shareService;
        this.dataService = dataService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Menu" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Order" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Receipt" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_share_share__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
    }
    ContactPage.prototype.clearData = function () {
        this.dataService.clearStorage();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Clear Storage\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <button  (click)="clearData()" ion-button block large icon-only color="buy">\n    Clean\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* Data */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_item_add_item__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_share_share__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, shareService, dataService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.shareService = shareService;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.orders = [];
        this.dataService.getData().then(function (todos) {
            if (todos) {
                _this.items = todos;
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.items = [
            { title: 'The Triple Stack BurgCheese', price: '10.00', category: 'Dish',
                photo: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
                description: 'This is the best pre-made menu item there is.' },
        ];
    };
    HomePage.prototype.edit = function (item) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_item_add_item__["a" /* AddItemPage */]);
        var indexOfItem = this.items.indexOf(item);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.updateItem(item, indexOfItem);
            }
        });
        addModal.present();
    };
    HomePage.prototype.addToCart = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */], {
            cart: item
        });
        this.orders.push(item);
        this.dataService.saveOrder(this.orders);
    };
    HomePage.prototype.deletItem = function (item) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);
                this.dataService.save(this.items);
            }
        }
        this.dataService.deleteItem(this.items);
    };
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_item_add_item__["a" /* AddItemPage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    HomePage.prototype.saveItem = function (item) {
        this.items.push(item);
        this.dataService.save(this.items);
    };
    HomePage.prototype.updateItem = function (item, indexOfItem) {
        this.items[indexOfItem] = item;
    };
    HomePage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\pages\home\home.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <ion-title color="primary">\n      Menu\n    </ion-title>\n\n    <ion-buttons end>\n       <button ion-button icon-only (click)="addItem()">\n        Add Item\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main">\n\n  <ion-list>\n     <ion-item-sliding *ngFor="let item of items"  class="cards">\n       <ion-item class="cards">\n         <p class="text"> Item: {{item.title}} </p>\n         <p class="text"> Category: {{item.category}}  ${{item.price}} </p>\n\n       <img src={{item.photo}}/>\n       <button  (click)="viewItem(item)" ion-button block large icon-only>\n         Detail\n         <ion-icon name="information"></ion-icon>\n       </button>\n     <button  (click)="addToCart(item)" ion-button block large icon-only color="buy">\n       Add to order\n       <ion-icon name="add"></ion-icon>\n     </button>\n\n   </ion-item>\n   <ion-item-options side="right">\n     <button ion-button color="delete"(click)="deletItem(item)">Delete Item <ion-icon name="trash"></ion-icon> </button>\n     <button ion-button color="danger" (click)="edit(item)">Edit Item <ion-icon name="create"></ion-icon> </button>\n   </ion-item-options>\n </ion-item-sliding>\n\n   </ion-list>\n\n   <ion-list>\n     <ion-item *ngFor=\'let Item of Items | async\'>\n       {{Item.title}}\n       {{Item.price}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_share_share__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.title = this.navParams.get('item').title;
        this.description = this.navParams.get('item').description;
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\pages\item-detail\item-detail.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      {{description}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\pages\item-detail\item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = (function () {
    function AddItemPage(navCtrl, view) {
        this.navCtrl = navCtrl;
        this.view = view;
    }
    AddItemPage.prototype.saveItem = function () {
        var newItem = {
            title: this.title,
            price: this.price,
            category: this.category,
            photo: this.photo,
            description: this.description
        };
        this.view.dismiss(newItem);
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\pages\add-item\add-item.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Add Item\n    </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-modal">\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Price</ion-label>\n      <ion-input type="number" [(ngModel)]="price"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Category</ion-label>\n      <ion-select [(ngModel)]="category">\n          <ion-option value="Dish">Dish</ion-option>\n          <ion-option value="Desert">Desert</ion-option>\n          <ion-option value="Drink">Drink</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Photo URL: </ion-label>\n      <ion-input type="text" [(ngModel)]="photo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button full ion-button color="primary" (click)="saveItem()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\pages\add-item\add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_data__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_share_share__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_data_data__["a" /* Data */],
                __WEBPACK_IMPORTED_MODULE_14__services_share_share__["a" /* ShareService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\c0c0j_000\HW2App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\c0c0j_000\HW2App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = (function () {
    function Data(storage) {
        this.storage = storage;
    }
    Data.prototype.getData = function () {
        return this.storage.get('todos');
    };
    Data.prototype.save = function (data) {
        this.storage.set('todos', data);
    };
    Data.prototype.getOrder = function () {
        return this.storage.get('cart');
    };
    Data.prototype.saveOrder = function (order) {
        this.storage.set('cart', order);
    };
    Data.prototype.clearStorage = function () {
        this.storage.clear();
    };
    Data.prototype.deleteItem = function (data) {
        this.storage.remove('todos');
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
        this.firstName = 'Blank';
        this.lastName = 'Name';
    }
    ShareService.prototype.setUserName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    ShareService.prototype.getUserName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    ShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShareService);
    return ShareService;
}());

//# sourceMappingURL=share.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map