(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");







const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./../blog/blog.module */ "./src/app/blog/blog.module.ts")).then(m => m.BlogModule) },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_mat_list_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Michael Wutz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const st_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flyInOutX", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](st_r1.statement);
} }
class HomeComponent {
    constructor() {
        this.statements = [
            { 'statement': 'Machine Learning is also only optimization.', 'author': 'Michael Wutz' },
            { 'statement': "AWS Services without CDK support should be forbidden.", 'author': 'Michael Wutz' },
            { 'statement': "I'm too small for vendor lock in", 'author': 'Michael Wutz' }
        ];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 2, consts: [[1, "box", "flex"], [1, "me"], ["src", "assets/mw.jpg", 1, "me-item"], [2, "font-size", "medium"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "card-container"], ["title", "Angular", "href", "https://angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["src", "/assets/angular.svg", "width", "21.813", "height", "23.453"], ["title", "Matlab", "href", "mathworks.com", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["src", "/assets/Matlab_Logo.png", "width", "21.813", "height", "23.453"], ["title", "AWS CDK", "href", "https://aws.amazon.com/de/cdk/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["src", "/assets/cdk.png", "width", "21.813", "height", "23.453"], ["title", "Python", "href", "https://www.python.org/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["src", "/assets/Python.svg", "width", "21.813", "height", "23.453"], ["title", "AWS", "href", "https://aws.amazon.com/de/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["src", "/assets/aws.svg", "width", "21.813", "height", "23.453"], [1, "list-item"], [2, "max-height", "30px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hello, my name is Michael Wutz. I was once pleasantly lost in space of mathematics - but eventually discovered that there are a lot of other interesting topics especially in the SW world. Today I am an Expert for Artifical Intelligence for embedded controllers in the automotive industry but spend a lot of my time with DevOps and Cloud (AWS) topics or Fullstack Topics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Some ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_mat_list_item_15_Template, 6, 2, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flyInOutY", undefined);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"]], styles: ["img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n\n  .example-card[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n\n  .me[_ngcontent-%COMP%]{\n    display: flex;\n    align-self: center;\n    align-content: center;\n    justify-content: center;\n    width: 800px;\n    \n}\n\n  .me-item[_ngcontent-%COMP%]{\n    border-radius: 50%;\n    display: flex;\n    align-self: center;\n    align-content: center;\n    justify-content: center;\n    max-height: 300px;\n    \n}\n\n  .list[_ngcontent-%COMP%]{\n    display: flex;\n    align-self: center;\n    align-content: center;\n    justify-content: center;\n    \n    flex-direction: row;\n    \n}\n\n  .list-item[_ngcontent-%COMP%]:hover{\n    box-shadow: -1px 10px 29px 0px rgb(0, 0, 0);\n}\n\n  .list-item[_ngcontent-%COMP%]{\n    background-color: white;\n    margin: 5px;\n    width: 300px;\n    min-height: 100px;\n    transition: 1s ease-out;\n    border-radius: 5px;\n}\n\n  .sub[_ngcontent-%COMP%]{\n    font-size: small;\n}\n\n  .tool[_ngcontent-%COMP%]{\n    white-space: pre-line;\n    font-size: xx-large;\n    font-weight: bold;\n}\n\n  .box.flex[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsWUFBWTs7QUFFaEI7O0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7QUFFckI7O0VBSUU7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7O0lBRXZCLG1CQUFtQjs7QUFFdkI7O0VBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7O0VBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7RUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7RUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztFQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG4gIFxuICAubWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBcbn1cbi5tZS1pdGVte1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgXG59XG5cblxuXG4gIC5saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIFxufVxuLmxpc3QtaXRlbTpob3ZlcntcbiAgICBib3gtc2hhZG93OiAtMXB4IDEwcHggMjlweCAwcHggcmdiKDAsIDAsIDApO1xufVxuLmxpc3QtaXRlbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3Vie1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4udG9vbHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4uYm94LmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuIl19 */", "[_nghost-%COMP%] {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n      margin: 8px 0;\n    }\n  \n    p[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n  \n    .spacer[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n  \n    .toolbar[_ngcontent-%COMP%] {\n      height: 60px;\n      margin: -8px;\n      display: flex;\n      align-items: center;\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      margin: 0 16px;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n      height: 40px;\n      margin: 0 16px;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n      opacity: 0.8;\n    }\n  \n    .content[_ngcontent-%COMP%] {\n      display: flex;\n      margin: 32px auto;\n      padding: 0 16px;\n      max-width: 960px;\n      flex-direction: column;\n      align-items: center;\n    }\n  \n    svg.material-icons[_ngcontent-%COMP%] {\n      height: 24px;\n      width: auto;\n    }\n  \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n      margin-right: 8px;\n    }\n  \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n      fill: #888;\n    }\n  \n    .card-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-top: 16px;\n    }\n  \n    .card[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      border: 1px solid #eee;\n      background-color: #fafafa;\n      height: 40px;\n      width: 200px;\n      margin: 0 8px 16px;\n      padding: 16px;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      transition: all 0.2s ease-in-out;\n      line-height: 24px;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n      margin-right: 0;\n    }\n  \n    .card.card-small[_ngcontent-%COMP%] {\n      height: 16px;\n      width: 168px;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      cursor: pointer;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n      transform: translateY(-3px);\n      box-shadow: 0 4px 17px rgba(black, 0.35);\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n      fill: rgb(105, 103, 103);\n    }\n  \n    .card.highlight-card[_ngcontent-%COMP%] {\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n      border: none;\n      width: auto;\n      min-width: 30%;\n      position: relative;\n    }\n  \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 60px;\n    }\n  \n    svg#rocket[_ngcontent-%COMP%] {\n      width: 80px;\n      position: absolute;\n      left: -10px;\n      top: -24px;\n    }\n  \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      height: 100vh;\n      position: absolute;\n      top: 10px;\n      right: 180px;\n      z-index: -10;\n    }\n  \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n      color: #1976d2;\n      text-decoration: none;\n    }\n  \n    a[_ngcontent-%COMP%]:hover {\n      color: #125699;\n    }\n  \n    .terminal[_ngcontent-%COMP%] {\n      position: relative;\n      width: 80%;\n      max-width: 600px;\n      border-radius: 6px;\n      padding-top: 45px;\n      margin-top: 8px;\n      overflow: hidden;\n      background-color: rgb(15, 15, 16);\n    }\n  \n    .terminal[_ngcontent-%COMP%]::before {\n      content: \"\\2022 \\2022 \\2022\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 4px;\n      background: rgb(58, 58, 58);\n      color: #c2c3c4;\n      width: 100%;\n      font-size: 2rem;\n      line-height: 0;\n      padding: 14px 0;\n      text-indent: 4px;\n    }\n  \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n      color: white;\n      padding: 0 1rem 1rem;\n      margin: 0;\n    }\n  \n    .circle-link[_ngcontent-%COMP%] {\n      height: 40px;\n      width: 40px;\n      border-radius: 40px;\n      margin: 8px;\n      background-color: white;\n      border: 1px solid #eeeeee;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: 1s ease-out;\n    }\n  \n    .circle-link[_ngcontent-%COMP%]:hover {\n      transform: translateY(-0.25rem);\n      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n  \n    footer[_ngcontent-%COMP%] {\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      line-height: 20px;\n    }\n  \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%] {\n      color: #24292e;\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n      padding: 3px 10px;\n      border: 1px solid rgba(27, 31, 35, .2);\n      border-radius: 3px;\n      background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n      margin-left: 4px;\n      font-weight: 600;\n      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n      background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n      border-color: rgba(27, 31, 35, .35);\n      background-position: -.5em;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n      height: 16px;\n      width: 16px;\n      margin-right: 4px;\n    }\n  \n    svg#clouds[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: -160px;\n      left: -230px;\n      z-index: -10;\n      width: 1920px;\n    }\n  \n  \n    \n    @media screen and (max-width: 767px) {\n  \n      .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n  \n      .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n      }\n  \n      .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 72px;\n      }\n  \n      svg#rocket-smoke[_ngcontent-%COMP%] {\n        right: 120px;\n        transform: rotate(-5deg);\n      }\n    }\n  \n    @media screen and (max-width: 575px) {\n      svg#rocket-smoke[_ngcontent-%COMP%] {\n        display: none;\n        visibility: hidden;\n      }\n    }"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOutX', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOutY', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(+1000%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-1000%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOutX', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOutY', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(+1000%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-1000%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map